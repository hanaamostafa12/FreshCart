import axios from 'axios'
import {  useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"

export default function Signup() {
   let navegate =  useNavigate()
  const [errorMsg,setErrorMsg] =useState('')
  const [loading,setLoading] =useState(true)
  function SendDataToBackEnd(values){
    setLoading(false)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values )
    .then(({data})=>{
      console.log(data)
      navegate(
        '/signin'
      )
    }).catch((err)=>{    
      setErrorMsg(err.response.data.message)
      setLoading(true)
  })
}
    
  function validationSchema(){
     let schema = new Yup.object(
      {
        name: Yup.string().required().min(3).max(30),
        email: Yup.string().required().email(),
        password: Yup.string().required("must be * Start with a letter (either uppercase or lowercase). * Be between 6 and 9 characters in total. * Can only contain letters (A-Z or a-z) and numbers (0-9)").matches(/^[a-z][A-Za-z0-9@]{6,}$/),
        rePassword: Yup.string().required().oneOf([Yup.ref("password")]),
        phone:Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/, 'phone is not valid')

      }
     )
     return schema
  } 
  
  let Register =  useFormik(
    {
        initialValues: {
            name: '', 
            email: '',
            password: '',
            rePassword: '',
            phone: '',
        },validationSchema , onSubmit:(values)=>{
       console.log(values);
       SendDataToBackEnd(values);
        }
    }
  )
  console.log(Register.errors)
  return (
    <>

    <div className="w-75 m-auto my-4">
        <h2>RegisterNow:</h2>
        <form onSubmit={Register.handleSubmit} >
            <label htmlFor="name">Name:</label>
            <input onBlur={Register.handleBlur} placeholder='Enter Your Name' value={Register.values.name} onChange={Register.handleChange} type="text" name='name' id='name ' className='form-control my-2' />
            {Register.errors.name&& Register.touched.name ? <div className="alert alert-danger  "> {Register.errors.name}</div> : ''}
            <label htmlFor="name">Email:</label>
            <input  onBlur={Register.handleBlur} placeholder='Enter Your email' value={Register.values.email} onChange={Register.handleChange} type="email" name='email' id='email ' className='form-control my-2' />
            {Register.errors.email&& Register.touched.email ? <div className="alert alert-danger  "> {Register.errors.email}</div> : ''}
            <label htmlFor="name">Password:</label>
            <input  onBlur={Register.handleBlur} placeholder='Enter Your Password' value={Register.values.password} onChange={Register.handleChange} type="password" name='password' id='password ' className='form-control my-2' />
            {Register.errors.password&& Register.touched.password ? <div className="alert alert-danger  "> {Register.errors.password}</div> : ''}
            <label htmlFor="name">rePassword:</label>
            <input  onBlur={Register.handleBlur} placeholder='Enter Your rePassword' value={Register.values.rePassword} onChange={Register.handleChange} type="password" name='rePassword' id='rePassword ' className='form-control my-2' />
            {Register.errors.rePassword&& Register.touched.rePassword ? <div className="alert alert-danger  "> {Register.errors.rePassword}</div> : ''}
            <label htmlFor="name">phone:</label>
            <input  onBlur={Register.handleBlur} placeholder='Enter Your phone' value={Register.values.phone} onChange={Register.handleChange} type="text" name='phone' id='phone ' className='form-control my-2' />
            {Register.errors.phone&& Register.touched.phone ? <div className="alert alert-danger  "> {Register.errors.phone}</div> : ''}
         {errorMsg? <div className="alert alert-danger">{errorMsg}</div>:''}
            <button  disabled={!(Register.dirty&&Register.isValid)} type="submit" className='btn bg-main text-white' >
              {loading? "signup" :<i className="fa fa-spinner fa-spin"  ></i>}
            </button>
            
        </form>
    </div>
    
    
    </>
  )
}
