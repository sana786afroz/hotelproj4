import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import style from './Login.module.css'
import { isLogIn } from '../../Recoil/RecoilData'
import Swal from 'sweetalert2'
import { useSetRecoilState } from 'recoil'
export default function Login (){
const setIsLogin=useSetRecoilState(isLogIn)
    const nav=useNavigate()
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
   
    const[userData,setUserData]=useState('')
    const[errorU,setErrorU]=useState('')
    const[errorP,setErrorP]=useState('')
    const[errorE,setErrorE]=useState('')
    useEffect(()=>{
        if(localStorage.UserList){
          setUserData(JSON.parse(localStorage.getItem("UserList")))
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
    setPassword(e.target.value)
    const regExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
    if(!regExp.test(password)){
      setErrorP("Password Is Invalid")
    }else{
      setErrorP("")
    }
  }
 
  
  function handleClick(){
   let userDataFind=userData.filter((x)=>x.username===username && x.cpassword===password && x.email===email )
      if(userDataFind.length >0){
        Swal.fire('You Are Successfully  Login !! ')
        setIsLogin(true)
        nav("/home")
      }else if(username==="" || password===""|| email===""){
        Swal.fire("Fill Input First")
       
      }else{
        Swal.fire( "Do Register First")
        nav("/")
      }
   }
  
    return(
        <>
      <form>
       <div className={style.parent}>
        <div className={style.form}>
            <div>
            <input onChange={handleChangeU} placeholder='username' className={style.input}/><br/>
            <span style={{color:"red"}}>{errorU}</span>
            </div>
            
            <div>
            <input onChange={handleChangeE} placeholder='email' className={style.input}/><br/>
            <span  style={{color:"red"}}>{errorE}</span>
            </div>
            <div>
            <input type="password" onChange={handleChangeP} placeholder='password' className={style.input}/><br/>
            <span  style={{color:"red"}}>{errorP}</span>
            </div>
           
            <div>
           <p style={{color:"black"}}><i>Dont have an account?</i></p> 
           <Link to="/Register">Register</Link>
          
            <div >
      <button className={style.btn} onClick={(e)=>{
        e.preventDefault()
     handleClick()

       }}>Submit</button>
       </div>
            </div>
        </div>
       </div>
       </form>
       </>
    )
}
