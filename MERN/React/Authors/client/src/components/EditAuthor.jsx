import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import axios from 'axios'
import '../App.css'
const Update = (props) => {
    const navigate = useNavigate()


    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [author, setAuthor] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {

                setAuthor(res.data.author);

                setName(res.data.author.name)

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const navigateBack = () => {
        navigate('/home')
    }

    const updateUser = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        if (name.length < 3 ) {
            setErrorMessage('Your form has some unsolved issues!')
        }
        else {

            axios.put(`http://localhost:8000/api/author/${author._id}`, {
                name
            })
                .then(res => {
                    console.log(res); 
                    console.log(res.data);
                    setName("");
                    navigate(-1)
                })
                .catch(err => {
                    setErrorMessage("Your api has some problems!")
                    console.log(err)
                })


        }
    }

    return (
        <div className="form px-3">

            <h1 className="text-center p-2">Edit Author</h1>
            {
                errorMessage ?
                    <p className="red text-center">{errorMessage}</p> :
                    null
            }

            <form className="w-75 m-auto" onSubmit={(e) => updateAuthor(e)}>
                <div>
                    <label className="form-label">Name: </label>
                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter the author name" />
                </div>
                {name.length > 0 && name.length < 3 ?
                    <p className="red">The first name should be 3 characters or more</p> :
                    null
                }
                <button className="text-decoration-none" onClick={navigateBack}>Cancel</button>
                <button className="btn btn-success mt-2">Update</button>

            </form>


        </div>
    )
}
export default Update;
