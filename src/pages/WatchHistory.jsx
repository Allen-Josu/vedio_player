import React from "react";
import { Link } from "react-router-dom";

function WatchHistory() {
    return (
        <>
            <div className="d-flex container justify-content-between mt-5">
                <h3>Watch History</h3>
                <Link
                    to={"/home"}
                    className="d-flex align-items-center"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "20px",
                    }}
                >
                    <i className="fa-solid fa-arrow-left me-2"></i>
                    Back to Home
                </Link>
            </div>
            <table className="table mt-5 mb-5 container">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Caption</th>
                        <th>URL</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Kanban</td>
                        <td>
                            <a href="https://www.youtube.com/watch?v=byvzk3yjtxw">
                                {" "}
                                https://www.youtube.com/watch?v=byvzk3yjtxw
                            </a>
                        </td>
                        <td>4/10/23</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default WatchHistory;
