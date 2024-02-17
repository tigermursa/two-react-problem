import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalA = ({
  showModalA,
  closeModalA,
  contacts,
  switchToModalB,
  onlyEven,
  handleToggleEven,
}) => {
  const filteredContacts = onlyEven
    ? contacts.filter((contact) => contact.id % 2 === 0)
    : contacts;
//   console.log(contacts);
  return (
    <Modal show={showModalA} onHide={closeModalA}>
      <Modal.Header closeButton>
        <Modal.Title>All Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {filteredContacts.map((contact) => (
            <ul key={contact.id} className="mb-5 border p-2" style={{ listStyleType: 'none' }}>
              <li className="">{contact.country.name}</li>
              <li className="">{contact.phone}</li>
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

        <Button  style={{ background: "#ff7f50", border: "none" }} onClick={switchToModalB}>
          US Contact
        </Button>
        <Button
          style={{
            background: "white",
            borderColor: "#46139f",
            borderPadding: "2px",
            borderStyle: "solid",
            color:"black"
          }}
          onClick={closeModalA}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
