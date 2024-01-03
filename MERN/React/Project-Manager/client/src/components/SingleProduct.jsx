import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import '../App.css';

const SingleProduct = (props) => {
    const [product, setProduct] = useState([{}]);
    const { id } = useParams();
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res)
                Navigate('/')
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <>
            <div className="card-body">
                <h5 className="card-title">{product[0].title}</h5>
                <p className="card-text">{product[0].description}</p>
                <p className="card-text">{product[0].price}</p>
                <button onClick={deleteProduct}>Delete</button>
                <Link to={`/product/edit/${product._id}`}>Edit</Link>
            </div>
        </>
    );
}

export default SingleProduct;
