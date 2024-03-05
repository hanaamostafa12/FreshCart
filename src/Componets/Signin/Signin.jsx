 import axios from 'axios'
import {  useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"

export default function Signin() {
   let navegate =  useNavigate()
  const [errorMsg,setErrorMsg] =useState('')
  const [loading,setLoading] =useState(true)
  function SendDataToBackEnd(values){
    setLoading(false)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values )
    .then(({data})=>{
      console.log(data);
      if(data.message=='success'){
        localStorage.setItem('token',data.token)
        navegate(
          '/home'
        )
      }
     
    }).catch((err)=>{    
      setErrorMsg(err.response.data.message)
      setLoading(true)
  })
}
    
  function validationSchema(){
     let schema = new Yup.object(
      {
       
        email: Yup.string().required().email(),
        password: Yup.string().required().matches(/^[a-z][A-Za-z0-9@]{6,}$/),
      

      }
     )
     return schema
  } 
  
  let Login =  useFormik(
    {
        initialValues: {
       
            email: '',
            password: '',
        
            // phone: '',
        },validationSchema , onSubmit:(values)=>{
       console.log(values);
       SendDataToBackEnd(values);
        }
    }
  )
  console.log(Login.errors)
  return (
    <>

    <div className="w-75 m-auto my-4">
        <h2>LoginNow:</h2>
        <form onSubmit={Login.handleSubmit} >
           
            <label htmlFor="name">Email:</label>
            <input  onBlur={Login.handleBlur} placeholder='Enter Your email' value={Login.values.email} onChange={Login.handleChange} type="email" name='email' id='email ' className='form-control my-2' />
            {Login.errors.email&& Login.touched.email ? <div className="alert alert-danger  "> {Login.errors.email}</div> : ''}
            <label htmlFor="name">Password:</label>
            <input  onBlur={Login.handleBlur} placeholder='Enter Your Password' value={Login.values.password} onChange={Login.handleChange} type="password" name='password' id='password ' className='form-control my-2' />
            {Login.errors.password&& Login.touched.password ? <div className="alert alert-danger  "> {Login.errors.password}</div> : ''}
           
         {errorMsg? <div className="alert alert-danger">{errorMsg}</div>:''}
            <button  disabled={!(Login.dirty&&Login.isValid)} type="submit" className='btn bg-main text-white' >
              {loading? "signin" :<i className="fa fa-spinner fa-spin"  ></i>}
            </button>
           
        </form>
        <Link className="fw-bolder  pt-4  text-main cursor-pointer " to="/forgotpassword">Forgot password</Link>
    </div>
    
    
    </>
  )
}
