import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalB = ({
  showModalB,
  closeModalB,
  contacts,
  switchToModalA,
  onlyEven,
  handleToggleEven,
}) => {
  const filteredContacts = onlyEven
    ? contacts.filter((contact) => contact.id % 2 === 0)
    : contacts;
  const usContacts = filteredContacts.filter(
    (contact) => contact.country.name === "United States"
  );
  return (
    <Modal show={showModalB} onHide={closeModalB}>
      <Modal.Header closeButton>
        <Modal.Title>All Contacts Modal B</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {usContacts.map((contact) => (
            <ul key={contact.id } className="mb-5 border p-2" style={{ listStyleType: 'none' }}>
              <li >{contact.country.name}</li>
              <li >{contact.phone}</li>
            </ul>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">
          <Form.Check
            type="checkbox"
            label="Only Even "
            checked={onlyEven}
            onChange={handleToggleEven}
            className=""
          />
        </Button>
        <Button
          style={{ background: "#46139f", border: "none" }}
          onClick={switchToModalA}
        >
          All Contact
        </Button>
        <Button
          style={{
            background: "white",
            borderColor: "#46139f",
            borderPadding: "2px",
            borderStyle: "solid",
            color:"black"
          }}
          onClick={closeModalB}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalB;
