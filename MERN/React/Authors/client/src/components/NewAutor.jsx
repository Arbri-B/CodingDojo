import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios'
import '../App.css'
const NewAuthor = (props) => {
    const navigate = useNavigate()


    const [name, setName] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const navigateBack = () => {
        navigate('/home')
    }
    const createUser = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        if (name.length <3){
            setErrorMessage('Your form has some unsolved issues!')
        }
        else{
            
            axios.post('http://localhost:8000/api/authors', {
                name
            })
                .then(res=>{
                    console.log(res); 
                    console.log(res.data);
                    setName("");
                    navigate('/home')
                })
                .catch(err=>{
                    setErrorMessage("Your api has some problems!")
                    console.log(err)})

                
        }
    }


    return(
        <div className="form px-3">

            <h1 className="text-center p-2">Add a new author</h1>
            {
                errorMessage?
                <p className="red text-center">{errorMessage}</p>:
                null
            }

            <form className="w-75 m-auto" onSubmit={(e)=>createUser(e)}>
                <div>
                    <label className="form-label">Name: </label>
                    <input className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter the author name"/>
                </div>
                { name.length >0 && name.length <3?
                <p className="red">The Name should be 3 characters or more</p>:
                null
                }
                <button className="text-decoration-none" onClick={navigateBack}> Cancel </button>
                <button className="btn btn-success mt-2">Submit</button>
                
            </form>

            
        </div>
    )
}
export default NewAuthor;
