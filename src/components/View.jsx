import React, { useEffect, useState } from "react";
import VedioCard from "./VedioCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getAllVedios } from "../services/allAPI";

function View({ uploadVedioStatus }) {
    const [deleteVedioStatus, setDeleteVedioStatus] = useState(false);

    const [allVedio, setAllVedio] = useState([]);

    const getAllUploadedVedios = async () => {
        const response = await getAllVedios();
        const { data } = response;
        setAllVedio(data);
    };

    useEffect(() => {
        setDeleteVedioStatus(false);
        getAllUploadedVedios();
    }, [uploadVedioStatus , deleteVedioStatus]);

    return (
        <>
            <Row>
                {allVedio.length > 0 ? (
                    allVedio.map((vedio) => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <VedioCard displayVedio={vedio} setDeleteVedioStatus={setDeleteVedioStatus} />
                        </Col>
                    ))
                ) : (
                    <p>Nothing tho display</p>
                )}
            </Row>
        </>
    );
}

export default View;
