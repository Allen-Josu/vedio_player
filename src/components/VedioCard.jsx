import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { addToHistory, deleteVedios } from "../services/allAPI";

function VedioCard({ displayVedio, setDeleteVedioStatus }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);

        const { caption, embedLink } = displayVedio;
        const today = new Date();
        let timeStamp = new Intl.DateTimeFormat(`en-US`, {
            year: `numeric`,
            month: "2-digit",
            day: `2-digit`,
            hour: `2-digit`,
            minute: `2-digit`,
            second: `2-digit`,
        }).format(today);

        let vedioDetails = {
            caption,
            embedLink,
            timeStamp,
        }
        await addToHistory(vedioDetails)
    };

    const deleteVedio = async (id) => {
        const response = await deleteVedios(id);
        setDeleteVedioStatus(true);
    };

    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    height={"300px"}
                    variant="top"
                    src={displayVedio.url}
                    onClick={handleShow}
                />
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Title>
                        <h6>{displayVedio.caption}</h6>
                    </Card.Title>
                    <button
                        onClick={() => {
                            deleteVedio(displayVedio?.id);
                        }}
                        className="btn btn-danger"
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{displayVedio.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        className="rounded"
                        width="475"
                        height="500"
                        src={`${displayVedio.embedLink}?autoplay=1`}
                        title={displayVedio.caption}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default VedioCard;
