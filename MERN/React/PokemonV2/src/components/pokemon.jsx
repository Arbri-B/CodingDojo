import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemonat = () => {

    
    const [error, setError] = useState("");
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response)=>{setResponseData(response.data.results)})
            .catch((err) => {
                console.log(err);
                setError("You done messed up AARON")
            })
    }, []);


    return (
        <div>
                <ul>
                    { error === "" ?
                    responseData.map((pokemon,index) => 
                    (<li key ={index}>{pokemon.name}</li>))
                    : <p>{error}</p>
                }
                </ul>
        </div>
    )
}

export default Pokemonat;