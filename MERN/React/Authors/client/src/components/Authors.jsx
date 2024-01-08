import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Authors = (props) => {
    const [authorList, setAuthorList] = useState([]);
    
    const navigate = useNavigate()
    const navigateEdit = () => {
        navigate('/author/edit/${id}')
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthorList(res.data.authors);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setAuthorList]);

    const deleteAuthorById = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/author/${idFromBelow}`)
            .then(() => {
                setAuthorList(authorList.filter((author) => author._id !== idFromBelow));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="resultDiv">
            <h2>Favourite Authors </h2>

            {
                authorList && authorList.length > 0 ?
                    authorList.map((author, index) => {
                        return (
                            <div className="results p-2" key={index}>
                                <p>Name:{author.name}</p>
                                <button onClick={(e) => deleteAuthorById(author._id)}>Delete</button>
                                <button onClick={navigateEdit(author._id)}>Edit</button>
                            </div>
                        );
                    }) :
                    <div>
                        <p>There are no authors yet!</p>
                        <Link to="/author/add">Create One</Link>
                    </div>
            }
        </div>
    );
};

export default Authors;
