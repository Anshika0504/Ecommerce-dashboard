import React, { useState } from 'react'

function AddProduct() {
    const [name,SetName]=useState("");
    const [price,SetPrice]=useState("");
    const [category,SetCategory]=useState("");
    const [company,SetCompany]=useState("");
    const [error,setError]=useState(false);
    const addproduct=async ()=>{
        console.warn(!name);
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
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
      <input type="text"  value={name} placeholder='Enter product name' className='inputbox' onChange={(e)=>SetName(e.target.value)}></input>{error && !name && <span className='invalid-input'>Enter Valid Name</span>}
      <input type="text"  value={price} placeholder='Enter product price' className='inputbox' onChange={(e)=>SetPrice(e.target.value)}></input>{error && !price && <span className='invalid-input'>Enter Valid Price</span>}
      <input type="text" value={category}  placeholder='Enter product category' className='inputbox' onChange={(e)=>SetCategory(e.target.value)}></input>{error && !category && <span className='invalid-input'>Enter Valid Category</span>}
      <input type="text" value={company} placeholder='Enter product company' className='inputbox' onChange={(e)=>SetCompany(e.target.value)}></input>{error && !company && <span className='invalid-input'>Enter Valid Company</span>}
      <button className='btn' onClick={addproduct}>Add Product</button>
    </div>
  )
}

export default AddProduct
