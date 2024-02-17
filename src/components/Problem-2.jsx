// Problem2.js
import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import ModalA from "./ModalA";
import { Button } from "react-bootstrap";

const Problem2 = () => {
  // All states
  const [showModalA, setShowModalA] = useState(false);
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

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Button
            variant="outline-primary"
            size="lg"
            onClick={openModalA}
          >
            All Contacts
          </Button>
          <Button variant="outline-warning" size="lg" type="button">
            US Contacts
          </Button>
        </div>
      </div>

      {/* Modal A component */}
      <ModalA showModalA={showModalA} closeModalA={closeModalA} contacts={contacts}/>
      {/* Modal A component */}
      <ModalB showModalA={showModalA} closeModalA={closeModalA} contacts={contacts}/>
    </div>
  );
};

export default Problem2;
