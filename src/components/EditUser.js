import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../core/Base";
import * as yup from 'yup'
import { useFormik } from "formik";

const userSchemaValidtion =yup.object({
    id :yup.string().required("please specify your id"),
    bookname :yup.string().required("please fill your book name..."),
    email: yup.string().email().required("please fill mail id"),
    publishdate:yup.string().required("specify the exeprience"),
    author:yup.string().required("please fill author name..."),


})






export default function EditUser ({user,setUser})  {
    const{values,handleChange,handleSubmit,handleBlur,errors,touched} =useFormik({
        initialValues :{
            id:"",
            bookname:"",
            email:"",
            author:"",
            publishdate:"",
        },
        validationSchema :userSchemaValidtion,
        onSubmit : (updateUser)=>{
            updateUser(updateUser)
        }

    })


    

    const {id}= useParams();
    const history = useHistory()
    const selectedUser = user.find((per ,index)=>per.id === id);

    useEffect(() =>{
       
        
    },[]);
        
     const updateUser =(EditUser) =>{
        const editIndex = user.findIndex(per => per.id === id)
        
       
        setUser([...user]);
        history.push("/");
        
     }
    return (
        <BaseApp
        title={"Edit the user details"}
        >
    
    
               
               


<form  onSubmit={handleSubmit} className="text-areas">

<TextField fullWidth id="fullWidth" label="idx" variant="outlined" 
onBlur={handleBlur} name="idx" value={values.idx}
onChange={handleChange}/>
{touched.idx &&  errors.idx ? <p style={{color:"crimson"}}>{errors.idx}</p>:""}

<TextField fullWidth id="fullWidth" label="bookname" variant="outlined" 
 onBlur={handleBlur} name ="bookname" value={values.bookname}
onChange={handleChange}/>
{touched.bookname && errors.bookname ? <p style={{color:"crimson"}}>{errors.bookname}</p>:""}


<TextField fullWidth id="fullWidth" label="email" variant="outlined" 
onBlur={handleBlur} name ="email" value={values.email}
onChange={handleChange}/>
{touched.email && errors.email ? <p style={{color:"crimson"}}>{errors.email}</p>:""}


<TextField fullWidth id="fullWidth" label="author" variant="outlined" 
onBlur={handleBlur} name ="author" value={values.authorauthor}
onChange={handleChange}/>
{touched.author && errors.author ? <p style={{color:"crimson"}}>{errors.author}</p>:""}

<TextField fullWidth id="fullWidth" label="publishdate" variant="outlined" 
 onBlur={handleBlur} name ="publishdate" value={values.publishdate}
onChange={handleChange}/>
{touched.publishdate && errors.publishdate ? <p style={{color:"crimson"}}>{errors.publishdate}</p>:""}


<Button variant="contained" type="submit" color="secondary" >
Edit ✏️ Book
  </Button>





</form>
    
           
           
             
        </BaseApp>
    )
}

