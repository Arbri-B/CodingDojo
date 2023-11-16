import React from "react";

const PersonCard = (props) => {

    const { firstName, lastName, age, hairColor } = props;

    return(
        <>
            <h1>{props.lastName},{props.firstName}</h1>
            <h4>Age : {props.age}</h4>
            <h4>Hair Color : {props.hairColor}</h4>
        </>
    )

}


export default PersonCard;