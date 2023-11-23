import { NavLink,useNavigate} from "react-router-dom"; 
import {Form}
  from 'formik';
import { Formik } from "formik";
import { signupValidation } from './SignupVaidation';
import React, { useState,useEffect } from 'react';
import Input from '../../Components/InputFields/Input';
import './Login.css';

const SignUp:React.FC = () => {
  const navigate = useNavigate();
const initialValues= {

  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:"",
  budgetLimit:""
};
  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const response = await fetch('http://localhost:4000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('User signed up successfully');
        navigate  ("/SignIN")
      } else {
        const data = await response.json();
        console.log(data.message);
      }

    } catch (error) {
      console.log('An error occurred');
    }
  };
  return (
  <div className="main-container">
 <div className="form">
    <div className="left-side-conatiner">
        <h2 className='leftSide-heading'>Start your jurney with us </h2>
        <img className="png" src='./images/1.png'/>
        </div>
     <div className="right-side-conatiner">
        <h2 className='signup-heading'>SignUp</h2>
        <NavLink to= "/SignIN" >Already have a account?</NavLink>
    
   <Formik
   initialValues={initialValues}
   validationSchema={signupValidation}
   onSubmit={handleSubmit} 
   >
   <Form>
   
      <Input  className="input"
      placeholder="FirstName"
      type="text"
      name="firstName"
      />
       <Input   className="input"
         placeholder="LastName"
      type="text"
      name="lastName"
      />
       <Input   className="input"
         placeholder="Email"
      type="text"
      name="email"
      />
       <Input   className="input"
         placeholder="Password"
      type="password"
      name="password"
      />
       <Input   className="input"
         placeholder="ConfirmPassword"
      type="password"
      name="confirmPassword"
      />
       <Input   className="input"
         placeholder="BudgetLimit"
      type="number"
      name="budgetLimit"
      />
   <button type="submit" className='submit-btn'>Submit</button>
   </Form>
     </Formik>
    
       </div>
    </div>
  </div>
  )
}

export default SignUp;