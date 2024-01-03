import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios'
import '../App.css'
const CreateProduct = (props) => {
    const navigate = useNavigate()


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    

    const [errorMessage, setErrorMessage] = useState("");
    const navigateBack = () => {
        navigate(-1)
    }
    const createProduct = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        if (title.length <2 || description.length<2){
            setErrorMessage('Your form has some unsolved issues!')
        }
        else{
            
            axios.post('http://localhost:8000/api/product', {
                title,    
                price,
                description,
            })
                .then(res=>{
                    console.log(res); // always console log to get used to tracking your data!
                    console.log(res.data);
                    setTitle("");
                    setPrice(0);
                    setDescription("");
                    navigate('/products')
                })
                .catch(err=>{
                    setErrorMessage("Your api has some problems!")
                    console.log(err)})

                
        }
    }


    return(
        <div className="form px-3">
            <p className="text-decoration-none" onClick={navigateBack}> &larr; </p>
            <h1 className="text-center p-2">Create Product</h1>
            {
                errorMessage?
                <p className="red text-center">{errorMessage}</p>:
                null
            }

            <form className="w-75 m-auto" onSubmit={(e)=>createProduct(e)}>
                <div>
                    <label className="form-label">Title </label>
                    <input className="form-control" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="Enter title"/>
                </div>
                { title.length >0 && title.length <3?
                <p className="red">The title should be 2 characters or more</p>:
                null
                }
                <div>
                    <label className="form-label">Description </label>
                    <textarea className="form-control" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
                </div>
                { description.length >0 && description.length <3?
                <p className="red">The description should be 2 characters or more</p>:
                null
                }
                
                <div>
                    <label className="form-label">Price </label>
                    <input className="form-control" type="number" value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="Enter the price"/>
                </div>
                { price == 0?
                <p className="red">The price is required</p>:
                null
                }
                
                
                <button className="btn btn-success mt-2">Create Product</button>
                
            </form>

            
        </div>
    )
}
export default CreateProduct;