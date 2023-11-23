import * as Yup from 'yup';
export const signInValidation = Yup.object({

    email:Yup.string().email("please enter valid email").required("please enter email"),
    password:Yup.string().min(5).required("please enter password"),
  

})