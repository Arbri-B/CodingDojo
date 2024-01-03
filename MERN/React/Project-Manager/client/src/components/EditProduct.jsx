import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import axios from 'axios'
import '../App.css'
const EditProduct = (props) => {
    const navigate = useNavigate()


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    

    const [product, setProduct] = useState([{}])
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {

                setProduct(res.data.product);

                setTitle(res.data.product.title)

                setDescription(res.data.product.description)
                setPrice(res.data.product.price)
                
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const navigateBack = () => {
        navigate(-1)
    }

    const updateProduct = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        if (title.length < 2 || description.length < 2 || price < 1) {
            setErrorMessage('Your form has some unsolved issues!')
        }
        else {

            axios.put(`http://localhost:8000/api/product/${id}`, {
                title,    // this is shortcut syntax for firstName: firstName,
                description,
                price
                // this is shortcut syntax for lastName: lastName
            })
                .then(res => {
                    console.log(res); // always console log to get used to tracking your data!
                    console.log(res.data);
                    setProduct(prevProduct => ({ ...prevProduct, ...res.data.product }));
                    setTitle("");
                    setDescription("");
                    setPrice(0)
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
            <p className="text-decoration-none" onClick={navigateBack}> &larr; </p>
            <h1 className="text-center p-2">Update</h1>
            {
                errorMessage ?
                    <p className="red text-center">{errorMessage}</p> :
                    null
            }

            <form className="w-75 m-auto" onSubmit={(e) => updateProduct(e)}>
                <div>
                    <label className="form-label">Title: </label>
                    <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title" />
                </div>
                {title.length > 0 && title.length < 3 ?
                    <p className="red">The title name should be 2 characters or more</p> :
                    null
                }
                <div>
                    <label className="form-label">Description: </label>
                    <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter the description" />
                </div>
                {description.length > 0 && description.length < 3 ?
                    <p className="red">The description should be 2 characters or more</p> :
                    null
                }

                <div>
                    <label className="form-label">Price: </label>
                    <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter the price" />
                </div>
                {price == 0 ?
                    <p className="red">The price is required</p> :
                    null
                }


                <button className="btn btn-success mt-2">Update the product</button>

            </form>


        </div>
    )
}
export default EditProduct;