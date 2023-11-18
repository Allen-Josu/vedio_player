import React, { useState } from "react";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";
import { Link } from "react-router-dom";

function Home() {
    //create a state for state-lifting.
    const [uploadVedioStatus, setUploadVedioStatus] = useState({});

    return (
        <>
            <div className=" container d-flex justify-content-between align-items-center w-100 mt-5 mb-5">
                <div className="add-vedios">
                    <Add setUploadVedioStatus = {setUploadVedioStatus} />
                </div>

                <Link
                    to={"/watch-history"}
                    style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "30px",
                    }}
                >
                    Watch History
                </Link>
            </div>

            <div className="d-flex container-fluid w-100 mt-5 mb-5 justify-content-between ">
                <div className="all-vedios col-lg-9">
                    <h4 className="mb-5">All Vedios</h4>
                    <View uploadVedioStatus={uploadVedioStatus}  />
                </div>
                <div className="category col-lg-3">
                    <Category />
                </div>
            </div>
        </>
    );
}

export default Home;
