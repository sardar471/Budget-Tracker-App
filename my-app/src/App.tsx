import react, { ReactElement } from 'react';
import Navebar from './Components/InputFields/Navbar/Navebar';
import {  Routes,Route } from "react-router-dom";
import SignUp from './Page/Sign_Up/SignUp'
import SignIN from './Page/SignIn/SignIN';
import React from 'react';
import Budget from './Page/BudgetList/Budget';




const App: React.FC = () => {
 
    
  return (
    <>
    
   {/* <BudgetDetails/> */}
    <Navebar/>
    
   



      
          <Routes>
          <Route  path="/" element= {<SignUp />}/>
          <Route  path="/SignIN" element= {<SignIN/>}/> 
          <Route   path="/Budget" element={<Budget/>} />
    
            </Routes>
          
   
  
    </>
  );
};

export default App;
