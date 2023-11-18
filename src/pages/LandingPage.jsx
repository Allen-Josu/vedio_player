import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigateByUrl = useNavigate()

    return (
        <>
            <Row className="mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
                <Col></Col>
                <Col lg={5}>
                    <h3>
                        Welcome to{" "}
                        <span className="text-warning">Media Player</span>
                    </h3>
                    <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolore libero impedit delectus fugit sed autem
                        sequi blanditiis! A commodi sint libero pariatur,
                        cupiditate similique aut quidem iste enim saepe
                        provident. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Beatae odit nisi unde veritatis
                        suscipit hic voluptate non fugiat sunt iusto quisquam
                        amet similique eveniet odio maxime, consequatur nobis?
                        Molestias, quae. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quas vero, totam voluptatem sunt eos,
                        at reprehenderit officia recusandae distinctio rerum,
                        incidunt voluptatibus cum. Ut nihil quis repudiandae!
                        Sequi, assumenda inventore.
                    </p>
                    <button onClick={()=>navigateByUrl("/home")} className="btn btn-warning mt-5">
                        Get Started
                        <i className="fa-solid fa-arrow-right ms-3"></i>
                    </button>
                </Col>
                <Col></Col>
                <Col lg={5}>
                    <img
                        src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
                        alt="no-image"
                    />
                </Col>
            </Row>

            <div className="container mb-5 mt-5 align-items-center justify-content-center flex-column d-flex ">
                <h3>Features</h3>
                <div className="cards align-items-center justify-content-evenly  d-flex w-100">
                    <Card className="p-4" style={{ width: "22rem" }}>
                        <Card.Img
                            style={{ width: "100%", height: "300px" }}
                            variant="top"
                            src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
                        />
                        <Card.Body>
                            <Card.Title>Managing Vedios</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="p-4" style={{ width: "22rem" }}>
                        <Card.Img
                            style={{ width: "100%", height: "300px" }}
                            variant="top"
                            src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
                        />
                        <Card.Body>
                            <Card.Title>Categorized Vedios</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="p-4" style={{ width: "22rem" }}>
                        <Card.Img
                            style={{ width: "100%", height: "300px" }}
                            variant="top"
                            src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif"
                        />
                        <Card.Body>
                            <Card.Title>Watch History</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="container mb-5 mt-5 border border-2 border-secondary rounded p-5 d-flex align-items-center justify-content-between w-100">
                <div className="col-lg-5">
                    <h3 className="mb-5 text-warning">
                        Simple fast and Powerful
                    </h3>
                    <p>
                        {" "}
                        <span className="fs-4 fw-border">Play Everything</span>:
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex et temporibus exercitationem ipsa iste? Aut,
                        accusamus, placeat excepturi sunt eum dolore aliquam
                        porro soluta odio expedita dolor saepe minima rem?
                    </p>
                    <p>
                        {" "}
                        <span className="fs-4 fw-border">Play Everything</span>:
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex et temporibus exercitationem ipsa iste? Aut,
                        accusamus, placeat excepturi sunt eum dolore aliquam
                        porro soluta odio expedita dolor saepe minima rem?
                    </p>
                    <p>
                        {" "}
                        <span className="fs-4 fw-border">Play Everything</span>:
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex et temporibus exercitationem ipsa iste? Aut,
                        accusamus, placeat excepturi sunt eum dolore aliquam
                        porro soluta odio expedita dolor saepe minima rem?
                    </p>
                </div>
                <div className="col-lg-5">
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/WWr9086eWtY"
                        title="LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
        </>
    );
}

export default LandingPage;
