import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef=useRef('');
    const passwordRef=useRef('');



    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(emailRef.current.value);
      const password=  passwordRef.current.value;
      console.log(password);


    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input ref={emailRef} type="email" name="email" placeholder='email' /> <br/>
                <input ref={passwordRef} type="password" name="password" placeholder='password'  />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;