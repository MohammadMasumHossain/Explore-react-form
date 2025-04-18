import React, { useState } from 'react';

const ControlledField = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted")
    }

    let [password,setPassword] =useState("");

    const handlePasswordOnChange=e=>{
           console.log(e.target)
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='email' id="" /> <br />
                <input type="password" name="Password"  onChange={handlePasswordOnChange } defaultValue={password} placeholder='password'  required id="" /> <br />

                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;