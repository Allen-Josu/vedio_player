import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Category() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="d-grid ms-3">
                <button
                    onClick={handleShow}
                    style={{ color: "white" }}
                    className=" btn bg-warning "
                >
                    Add new Category
                </button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {" "}
                        <i className="fa-solid fa-film text-warning" /> Add Category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="border border-secondary p-3" action="">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Enter Category Id"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Enter Category Name "
                            />
                        </Form.Group>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Category;
