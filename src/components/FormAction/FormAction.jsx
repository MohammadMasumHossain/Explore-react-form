import React from 'react';

const FormAction = () => {

   const handleFormAction=(formData) =>{
        console.log(formData.get("name"));
        console.log(formData.get("email"))
    }
    return (
        <form action={handleFormAction}>
            <input type="text" name="name" placeholder='Enter your Name' />
            <br />
            <input type="Email" name="email" placeholder='enter email'/>
            <br />
            <input type="submit" value="submit" />
        </form>            
        
    );
};

export default FormAction;