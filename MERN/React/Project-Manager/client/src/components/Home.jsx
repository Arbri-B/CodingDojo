import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios'
import '../App.css'
const Home = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            {
                products && products.length >0 ?
                products.map((product, index) => {
                    return <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.price}</p>
                            <Link to={`/product/${product._id}`}>See more.</Link>

                            
                        </div>
                    </div>
                }):
                
                <Link to={'/product/create'}>There are no products. Create one.</Link>
                
            }
        </>
    )
}
export default Home;