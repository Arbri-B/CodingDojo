import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DisplayOne = (props) => {

    const [pirate, setPirate] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then((res) => {
                setPirate(res.data.pirate);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="card w-50 m-auto">
            { pirate?
                <div className="card-body">
                    <div>
                        <img src={pirate.imageUrl} alt={pirate.pirateName} width="500" height="600" />
                        <Link to={`/pirate/edit/${pirate._id}`}> Edit {pirate.pirateName}</Link>
                    </div>
                    <div className="d-flex justify-content-evenly">

                    </div>

                    <p className="card-text">Position: {pirate.position}</p>
                    <p className="card-text">Treasures: {pirate.treasures}</p>
                    {
                        pirate.pegLeg ? <p className="card-text">Peg Leg: Yes!</p>
                            : <p className="card-text">Peg Leg: No!</p>
                    }
                    {
                        pirate.eyePatch ? <p className="card-text">Eye Patch: Yes!</p>
                            : <p className="card-text">Eye Patch: No!</p>
                    }

                    {
                        pirate.hookHand ? <p className="card-text">Hook Hand: Yes!</p>
                            : <p className="card-text">Hook Hand: No!</p>
                    }

                </div> : <p>You have errors</p>
            }
        </div>
    );
};

export default DisplayOne;
