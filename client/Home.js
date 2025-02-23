import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {products.map(product => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>{product.price} USD</p>
                    <Link to={`/product/${product._id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;