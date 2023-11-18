import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { uploadAllVedios } from "../services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVedioStatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [vedio, setVedio] = useState({
        id: "",
        caption: "",
        url: "",
        embedLink: "",
    });
    console.log(vedio);

    const embedVedioLink = (e) => {
        const value = e.target.value;
        const link = `https://www.youtube.com/embed/${value.slice(-11)}`;
        setVedio({ ...vedio, embedLink: link });
    };

    const handleUpload = async () => {
        const { id, caption, url, embedLink } = vedio;
        if (!id || !caption || !url || !embedLink) {
            toast.warning("Please fill the form Completly");
        } else {
            const response = await uploadAllVedios(vedio);
            if (response.status >= 200 && response.status < 300) {
                toast.success(`${response.data.caption} uploaded successfully`);
                //to check the value of uploadVedioStatus
                setUploadVedioStatus(response.data)
                // close the modal
                handleClose();
            } else {
                toast.error(` Failed to upload`);
            }
        }
    };

    return (
        <>
            <div className="d-flex align-items-center ">
                <h5>Upload New Vedio</h5>
                <button onClick={handleShow} className="btn">
                    <i className="fa-solid fa-cloud-arrow-up  fs-5"></i>
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
                        <i className="fa-solid fa-film text-warning" /> Upload Vedio
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="border border-secondary p-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                onChange={(e) =>
                                    setVedio({
                                        ...vedio,
                                        id: e.target.value,
                                    })
                                }
                                type="text"
                                placeholder="Enter VedioId"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                onChange={(e) =>
                                    setVedio({
                                        ...vedio,
                                        caption: e.target.value,
                                    })
                                }
                                type="text"
                                placeholder="Enter Vedio Caption "
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                onChange={(e) =>
                                    setVedio({
                                        ...vedio,
                                        url: e.target.value,
                                    })
                                }
                                type="text"
                                placeholder="Enter Vedio Image URL"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                onChange={embedVedioLink}
                                type="text"
                                placeholder="Enter Youtube Vedio Link"
                                required
                            />
                        </Form.Group>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-center" theme="coloured" autoClose={2000} />
        </>
    );
}

export default Add;
