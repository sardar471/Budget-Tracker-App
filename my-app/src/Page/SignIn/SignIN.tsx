
import { NavLink,useNavigate} from "react-router-dom"; 
import {Form,Field}
  from 'formik';
import { Formik } from "formik";
import { signInValidation } from './SignInValidation'
import Input from '../../Components/InputFields/Input';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIN = () => {
    const navigate = useNavigate();
  const initialValues = {
    email:"",
    password:"",
    
  } 

    const handleSubmit = (values: typeof initialValues) => {
      // actions.resetForm(SigninSchema);
      axios.post('http://localhost:4000/api/users/signin', values)
      .then(response => {   
          const { success, message, token ,userId} = response.data;
        
          if (success && token) {
              localStorage.setItem('token', token);
              localStorage.setItem('userId',userId)
             
              navigate('/Budget');
              toast.success('Budget added successfully');
             
          } else {
              alert(`Login failed: ${message}`);
          }
      })
      .catch(err => {
          console.error('Axios Error:', err);
      });
    };
  return(
    <div className="mainn-container">
        
    <div className="form">
      
        <div className="left-side-conatinerr">
         
            <h2 className='leftSide-heading'>SignIn Now </h2>
            <img className="png" src='./images/1.png' alt='img'/>
            </div>
         <div className="right-side-conatiner">
           <NavLink to="/" >SignUp Now</NavLink>
      <Formik
       initialValues={initialValues}
       validationSchema={signInValidation}
      
       onSubmit={handleSubmit} 
       >  
       <Form>
         <Input    className="input"
      type="text" placeholder="Email"
      name="email"
      />
         <Input    className="input"
      type="password" placeholder="Password"
      name="password"
      />
       <button type="submit" className='submit-btn'>Submit
   
       </button>
       
       </Form>
            </Formik>
            
            </div>
        </div>
        <ToastContainer />
      </div>
      
  )
}

export default SignIN;