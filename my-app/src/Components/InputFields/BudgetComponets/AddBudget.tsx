// BudgetForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCross, faCut, faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'

const BudgetForm = ({ showAddForm, handleToggleForm, handleSubmit,onSubmit }:any) => {
  const initialValues = {
    name: '',
    date: '',
    price: 0,
  };

  return (
    
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
   
        <Form className="Form">
      
          {showAddForm && (
              <div className="form-div">
            <div className="add-budget-container">
              <div className="h1-cros">
                <>
                <h1 className="add-h1">Add Budget</h1>
                </>
                <>
                <FontAwesomeIcon className="close" icon={faClose} onClick={handleToggleForm} />
                </>
              </div>
              <div className="add-sub-container">
                <Input className="input-container" placeholder="Name" type="text" name="name" />
                <Input className="input-container" type="date" name="date" />
                <Input className="input-container" type="number" name="price" />

                <div className="addbudget-btn-container">
                  <button className="btn-add-budget" onSubmit={handleSubmit}>
                    Add Budget
                  </button>
                
                </div>
              </div>
            </div>
            </div>

          )}
        
        </Form>
    
    </Formik>
  );
};

export default BudgetForm;

