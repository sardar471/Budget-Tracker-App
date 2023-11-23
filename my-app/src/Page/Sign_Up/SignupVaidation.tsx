import * as Yup from 'yup';
export const signupValidation = Yup.object({


    firstName:Yup.string().required("please enter FirstName"),
    lastName:Yup.string().required("please enter LastName"),

    // name:Yup.string().min(3).required("please enter name"),
    email:Yup.string().email("please enter valid email").required("please enter email"),
    password:Yup.string().min(5).required("please enter password"),
    confirmPassword:Yup.string().oneOf([Yup.ref("password")],"password no match").required("Please enter ConfirmPassword"),
    budgetLimit:Yup.number().min(1000).required("please enter your budget")

})