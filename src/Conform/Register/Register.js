import React, { useEffect, useState } from "react";
import style from './Register.module.css'
import {useNavigate } from "react-router-dom";
export default function Register(){
const tohome=useNavigate()
const [username,setUserName]=useState('')
const [email,setEmail]=useState('')
const [cpassword,setCpasswored]=useState('')
const [userList,setUserList]=useState([])
const[errorU,setErrorU]=useState('')
const[errorP,setErrorP]=useState('')
const[errorE,setErrorE]=useState('')

   useEffect(()=>{
   if(localStorage.getItem('UserList')){
    let data=JSON.parse(localStorage.getItem('UserList'))
    setUserList(data)
   }
   },[])
    function handleChangeU(e){
        setUserName(e.target.value)
        const reg=/^[A-Za-z][A-Za-z0-9_]{7,29}$/
        if(!reg.test(username)){
         setErrorU("Username Not Valid")
        }else{
          setErrorU("")
        }
    }
    function handleChangeE(e){
        setEmail(e.target.value) 
        let regEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,3})+$/
        if(!regEx.test(email)){
         setErrorE("Email Is Invalid")
        }else{
         setErrorE("")
        }
       }
       function handleChangeP(e){
        setCpasswored(e.target.value)
        const regExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
        if(!regExp.test(cpassword)){
          setErrorP("Password Is Invalid")
        }else{
          setErrorP("")
        }
      }
   

    function handleClick(){
      const userData={
        username:username,
        email:email,
        cpassword:cpassword,
       
      }
      setUserList(userList.push(userData))
      localStorage.setItem("UserList",JSON.stringify(userList))
        tohome("/")
    }
    

    return(
        <div className={style.parent}>
        <div className={style.form}>
        <div>
            <input onChange={handleChangeU} placeholder='username' className={style.input}/><br/>
            <span style={{color:"red"}}>{errorU}</span>
            </div>
            <div>
            <input onChange={handleChangeE} placeholder='email' className={style.input}/><br/>
            <span style={{color:"red"}}>{errorE}</span>
            </div>
            <div>
            <input type="password" onChange={handleChangeP} placeholder='password' className={style.input}/><br/>
           <span style={{color:"red"}}>{errorP}</span> 
            </div>
           
       
          
           <h3 style={{color:"black"}}><i>done with the login ,move to register page!!</i></h3> 
          
            <button className={style.btn} onClick={handleClick}>Submit</button>
        </div>
       </div>
    )
}
