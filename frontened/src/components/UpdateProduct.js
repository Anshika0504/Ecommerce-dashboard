import React, { useState }  from 'react'

function UpdateProduct() {
    const [name,SetName]=useState("");
    const [price,SetPrice]=useState("");
    const [category,SetCategory]=useState("");
    const [company,SetCompany]=useState("");
    const [error,setError]=useState(false);
    const updateproduct=async ()=>{
        console.warn(name,price,category,company)
    }
  return (
    <div>
        <div class="product"> 
      <h1>Update Prduct</h1>
      <input type="text"  value={name} placeholder='Enter product name' className='inputbox' onChange={(e)=>SetName(e.target.value)}></input>{error && !name && <span className='invalid-input'>Enter Valid Name</span>}
      <input type="text"  value={price} placeholder='Enter product price' className='inputbox' onChange={(e)=>SetPrice(e.target.value)}></input>{error && !price && <span className='invalid-input'>Enter Valid Price</span>}
      <input type="text" value={category}  placeholder='Enter product category' className='inputbox' onChange={(e)=>SetCategory(e.target.value)}></input>{error && !category && <span className='invalid-input'>Enter Valid Category</span>}
      <input type="text" value={company} placeholder='Enter product company' className='inputbox' onChange={(e)=>SetCompany(e.target.value)}></input>{error && !company && <span className='invalid-input'>Enter Valid Company</span>}
      <button className='btn' onClick={updateproduct}>Update Product</button>
    </div>
    </div>
  )
}

export default UpdateProduct
