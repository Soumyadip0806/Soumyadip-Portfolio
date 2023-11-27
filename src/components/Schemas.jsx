import * as Yup from 'yup';




export const signUpSchema= Yup.object({
   
   
    your_name: Yup.string().min(2).max(30).required("please enter your name"),
    email: Yup.string().email().required("please enter a valid email"),
    phone_number:Yup.number().required("please enter a valid phone number"),
    message: Yup.string().min(10).required("please write something"),



});