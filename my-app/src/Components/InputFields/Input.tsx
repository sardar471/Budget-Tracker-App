import { Field,ErrorMessage } from 'formik'
import React,{Fragment} from 'react'


const Input = (props:any) => {
  
  return (
    <Fragment>
      {/* <div className='cr'> */}
        <Field  {...props} 
        />
        {/* <small className='small'> */}
        <div className="small">
        <ErrorMessage className='error'
        name= {props.name}/>
        {/* </small> */}
        </div>
        {/* </div> */}
    </Fragment>

  )
}

export default Input