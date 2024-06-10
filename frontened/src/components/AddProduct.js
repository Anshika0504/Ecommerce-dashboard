import React, { useState } from 'react'

function AddProduct() {
    const [name,SetName]=useState("");
    const [price,SetPrice]=useState("");
    const [category,SetCategory]=useState("");
    const [company,SetCompany]=useState("");
    const addproduct=()=>{
        console.log(name,price,category,company)
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
