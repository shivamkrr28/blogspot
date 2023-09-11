import { AppContext } from "../Context";
import React from "react";
import { Link } from 'react-router-dom';


const Logout = () => {
 
 let data =  JSON.parse(sessionStorage.getItem('user-info'));
 
 if(data != null)
 {
	  sessionStorage.removeItem('user-info');
	  window.location = "";
 }
 


export default Logout;