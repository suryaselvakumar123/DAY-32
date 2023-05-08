import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/Base";
import * as yup from 'yup'
import { useFormik } from "formik";

const userSchemaValidtion = yup.object({
    id: yup.string().required("Please specify your ID."),
    bookname: yup.string().required("Please fill in your book name."),
    email: yup.string().email().required("Please fill in your email."),
    publishdate: yup.string().required("Please specify the year of publication."),
    author: yup.string().required("Please fill in the author's name."),
  });
  

export default function AddUser({user, setUser}){

    const{values,handleChange,handleSubmit,handleBlur,errors,touched} =useFormik({
        initialValues :{
            id:"",
            bookname:"",
            email:"",
            author:"",
            publishdate:"",
        },
        validationSchema :userSchemaValidtion,
        onSubmit : (newUser)=>{
            addNewUser(newUser)
        }

    })




  const history =useHistory();



   const addNewUser =(newUser)=>{
    
    
    setUser([...user,newUser]);
    history.push("/")
    

   }


    return(
    <BaseApp
    title={"Add A New Book"}
    >


<div className="form-container">
  <form onSubmit={handleSubmit} className="form">
    <h2>Add a Book</h2>

    <TextField
      className="text-field"
      fullWidth
      id="id"
      label="ID"
      variant="outlined"
      onBlur={handleBlur}
      name="id"
      value={values.id}
      onChange={handleChange}
    />
    {touched.id && errors.id && (
      <p className="error-message">{errors.id}</p>
    )}

    <TextField
      className="text-field"
      fullWidth
      id="bookname"
      label="Book Name"
      variant="outlined"
      onBlur={handleBlur}
      name="bookname"
      value={values.bookname}
      onChange={handleChange}
    />
    {touched.bookname && errors.bookname && (
      <p className="error-message">{errors.bookname}</p>
    )}

    <TextField
      className="text-field"
      fullWidth
      id="email"
      label="Email"
      variant="outlined"
      onBlur={handleBlur}
      name="email"
      value={values.email}
      onChange={handleChange}
    />
    {touched.email && errors.email && (
      <p className="error-message">{errors.email}</p>
    )}

    <TextField
      className="text-field"
      fullWidth
      id="author"
      label="Author"
      variant="outlined"
      onBlur={handleBlur}
      name="author"
      value={values.author}
      onChange={handleChange}
    />
    {touched.author && errors.author && (
      <p className="error-message">{errors.author}</p>
    )}

    <TextField
      className="text-field"
      fullWidth
      id="publishdate"
      label="Publish Date"
      variant="outlined"
      onBlur={handleBlur}
      name="publishdate"
      value={values.publishdate}
      onChange={handleChange}
    />
    {touched.publishdate && errors.publishdate && (
      <p className="error-message">{errors.publishdate}</p>
    )}

    <button type="submit" className="submit-button">
      Add Book
    </button>
  </form>
</div>

       
         
    </BaseApp>
        

    )
}