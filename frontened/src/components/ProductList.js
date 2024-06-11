import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []); // Empty dependency array ensures useEffect runs only once

    const getProducts = async () => {
        try {
            let result = await fetch("http://localhost:5000/products",{
              headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
              }
            });
            result = await result.json();
            setProducts(result);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            let result = await fetch(`http://localhost:5000/product/${id}`, {
                method: "DELETE"
            });
            result = await result.json();
            if (result) {
                getProducts();
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            try {
                let result = await fetch(`http://localhost:5000/search/${key}`);
                result = await result.json();
                setProducts(result);
            } catch (error) {
                console.error('Error searching products:', error);
            }
        } else {
            getProducts();
        }
    };

    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <input className="search" type="text" placeholder='Search Product' onChange={searchHandle} />
            <ul>
                <li>S.NO</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operations</li>
            </ul>
            {
                products.length > 0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>${item.price}</li>
                        <li>{item.category}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id}>Update</Link>
                        </li>
                    </ul>
                )
                    : <h1>No Result Found</h1>
            }
        </div>
    );
}

export default ProductList;
