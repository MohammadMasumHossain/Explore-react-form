import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const[error,setError]=useState("");

    const handleProductSubmit=(e)=>{
             e.preventDefault();
             const name=e.target.name.value;
             const price=e.target.productPrice.value;
             const quantity=e.target.ProductQuantity.value;

             console.log(name,price,quantity);

            //  validation
            if(name.length===0){
                setError('please provide a product name')
                return;
            }
            else if(price.length=== 0){
                setError("please provide product price")
                return ;

            }
            else if (price.quantity<0){
                setError("price cannot be negative")
                return ;
            }

            else{
                setError("")
            }



             const newProduct={
                name,
                price,
                quantity
             }
             handleAddProduct(newProduct);
    }
    return (
        <div>
            <form onSubmit={handleProductSubmit} >
                <input type="text" name="name" placeholder='enter proudctName' />
                <br />
                <input type="text" name="productPrice" placeholder='enter proudctPrice' />
                <br />
                <input type="text" name="ProductQuantity" placeholder='enter proudctQuantity' />
                <br />
                <input type="submit" value="submit" />
                
            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;