import React, {useState} from "react";

const PersonCard = (props) => {

    const { firstName, lastName, hairColor } = props;
    const [age, setAge] = useState(props.age)
    const [ name, setName] = useState(firstName)
    const changeName = "Endi";

    const addAge= () => {
        setAge(age +1)
        setName("Endi")   
    };



    return(
        <>
            <h1>{lastName},{name}</h1>
            <h4>Age : {age}</h4> 
            <button onClick={() => addAge()}>Make {firstName} older!</button>
            <h4>Hair Color : {hairColor}</h4>
        </>
    )

}


export default PersonCard;