import React, { useState, useEffect } from "react";
import ModalA from "./ModalA";
import ModalB from "./ModalB";
import { Button } from "react-bootstrap";


const Problem2 = () => {
  // All states
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    //demo data
    setContacts([
      { id: 1, name: "John Doe", country: "USA" },
      { id: 2, name: "Jane Doe", country: "Canada" },
    ]);
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
      />
      {/* Modal B component */}
      <ModalB
        showModalB={showModalB}
        closeModalB={closeModalB}
        contacts={contacts}
        switchToModalA={switchToModalA}
      />
    </div>
  );
};

export default Problem2;