import React, { useState, useEffect } from "react";
import ModalA from "./ModalA";
import ModalB from "./ModalB";
import { Button } from "react-bootstrap";
import axios from "axios";

const Problem2 = () => {
  // All states
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [onlyEven, setOnlyEven] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://contact.mediusware.com/api/contacts/"
        );
        setContacts(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openModalA = () => {
    setShowModalA(true);
  };

  const closeModalA = () => {
    setShowModalA(false);
  };

  const openModalB = () => {
    setShowModalB(true);
  };

  const closeModalB = () => {
    setShowModalB(false);
  };

  const switchToModalB = () => {
    setShowModalA(false);
    setShowModalB(true);
  };

  const switchToModalA = () => {
    setShowModalB(false);
    setShowModalA(true);
  };
  const handleToggleEven = () => {
    setOnlyEven(!onlyEven);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Button variant="outline-primary" size="lg" onClick={openModalA}>
            All Contacts
          </Button>
          <Button
            variant="outline-warning"
            size="lg"
            type="button"
            onClick={openModalB}
          >
            US Contacts
          </Button>
        </div>
      </div>

      {/* Modal A component */}
      <ModalA
        showModalA={showModalA}
        closeModalA={closeModalA}
        contacts={contacts}
        switchToModalB={switchToModalB}
        onlyEven={onlyEven}
        handleToggleEven={handleToggleEven}
      />
      {/* Modal B component */}
      <ModalB
        showModalB={showModalB}
        closeModalB={closeModalB}
        contacts={contacts}
        switchToModalA={switchToModalA}
        onlyEven={onlyEven}
        handleToggleEven={handleToggleEven}
      />
    </div>
  );
};

export default Problem2;
