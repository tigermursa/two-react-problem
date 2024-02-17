import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalB = ({ showModalB, closeModalB, contacts, switchToModalA }) => {
  return (
    <Modal show={showModalB} onHide={closeModalB}>
      <Modal.Header closeButton>
        <Modal.Title>All Contacts Modal B</Modal.Title>
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
        <Button variant="primary" onClick={switchToModalA}>
          All Contact
        </Button>
        <Button variant="secondary" onClick={closeModalB}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalB;