import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const Display = () => {
    const [pirateList, setPirateList] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then((res) => {
                setPirateList(res.data.pirates);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deletePirate = (pirateId) => {


        axios.delete(`http://localhost:8000/api/pirate/${pirateId}`)
            .then(res => {
                setPirateList(prevPirates => prevPirates.filter(pirate => pirate.id !== pirateId));
            })
            .catch(err => console.log(err));
    };


    const viewPirate = (id) => {
        navigate(`/pirate/${id}`);
    };




    return (
        <div>
            <div className="header">
                <h1>Pirate Crew</h1>
                <Link to="/pirate/add">See Crew</Link>
            </div>
            <div className="resultDiv">
                {pirateList && pirateList.length > 0 ? (
                    pirateList.map((pirate, index) => (
                        <div className="pirate-box" key={index}>
                            {
                                pirate.postition === "Captain"? <p>Captain</p> : null
                            }
                            <p>Name: {pirate.pirateName}</p>
                            <button onClick={(e) => viewPirate(pirate.id)}>View Pirate</button>
                            <button onClick={(e) => deletePirate(pirate.id)}>Walk the plank</button>
                        </div>
                    ))
                ) : (
                    <div>
                        <p>There are no pirates yet!</p>
                        <Link to="/pirate/add">Create One</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Display;
