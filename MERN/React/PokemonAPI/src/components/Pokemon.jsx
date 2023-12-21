import React, { useEffect, useState } from "react";

const Pokemonat = () => {

    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokemon(response.results)
            })
            .catch((err) => {
                console.log(err);
                setError("You done messed up AARON")
            })
    }, []);


    return (
        <div>

            <ul>
                {error === "" ? (
                    pokemon.map((pokemonObj, index) => (
                        <li key={index}>{pokemonObj.name}</li>
                    ))
                ) : <p>{error}</p>
                }
            </ul>


        </div>
    )
}

export default Pokemonat;