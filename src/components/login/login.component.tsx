import React, { useState } from 'react'
import {
  signInWithFacebookPopup,
  signInWithGooglePopup
} from '../../utils/firebase';
import './login.styles.css';

const defaultFormFields = {
  email: '',
  password: '',
};
const login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const user = await signInWithGooglePopup();
    console.log(user);
  };

  const signInWithFacebook = async () => {
    const user = await signInWithFacebookPopup();
    console.log(user);
  };

  const handleSubmit:React.FormEventHandler<HTMLFormElement>  = async (event) => {
    event.preventDefault();
    resetFormFields();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  
  return (
    <div className='login-container'>
        <form action="#" onSubmit={handleSubmit}>
        <label>Enter Username:</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={email} /> <br />
        <label htmlFor="">Enter Password:</label> &nbsp;
        <input type="password" name="password" id="password" onChange={handleChange} value={password}/> <br />
        <button>Login</button>
        <br />
        <br />
        <button type='button' onClick={signInWithGoogle}><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" /></button>
        <button onClick={signInWithFacebook}><img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="facebook" /></button>
      </form>
    </div>
  )
}

export default login