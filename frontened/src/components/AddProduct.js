import React, { useState } from 'react'

function AddProduct() {
    const [name,SetName]=useState("");
    const [price,SetPrice]=useState("");
    const [category,SetCategory]=useState("");
    const [company,SetCompany]=useState("");
    const addproduct=async ()=>{
        console.log(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        console.warn(result);
    }
  return (
    <div class="product"> 
      <h1>ADD PRODUCT PAGE</h1>
      <input type="text"  value={name} placeholder='Enter product name' className='inputbox' onChange={(e)=>SetName(e.target.value)}></input>
      <input type="text"  value={price} placeholder='Enter product price' className='inputbox' onChange={(e)=>SetPrice(e.target.value)}></input>
      <input type="text" value={category}  placeholder='Enter product category' className='inputbox' onChange={(e)=>SetCategory(e.target.value)}></input>
      <input type="text" value={company} placeholder='Enter product company' className='inputbox' onChange={(e)=>SetCompany(e.target.value)}></input>
      <button className='btn' onClick={addproduct}>Add Product</button>
    </div>
  )
}

export default AddProduct
