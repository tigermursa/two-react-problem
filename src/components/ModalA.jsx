import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalA = ({ showModalA, closeModalA, contacts, switchToModalB }) => {
  return (
    <Modal show={showModalA} onHide={closeModalA}>
      <Modal.Header closeButton>
        <Modal.Title>All Contacts Modal A</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.country}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={switchToModalB}>
          US Contact
        </Button>
        <Button variant="secondary" onClick={closeModalA}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;