import React, { useState } from 'react';

const ControlledField = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted")
    }

    let [password,setPassword] =useState("");

    let[error,setError] =useState("");

    const handlePasswordOnChange=e=>{
           console.log(e.target.value);
           setPassword(e.target.value);

           if(password.length<6){
            setError('password must be 6 character');
           }
           else{
            setError("");
           }
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='email' id="" /> <br />
                <input type="password" name="Password"  onChange={handlePasswordOnChange } defaultValue={password} placeholder='password'  required id="" /> <br />

                <input type="submit" value="submit" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;