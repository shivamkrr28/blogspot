import { useState, useContext } from "react";
import { AppContext } from "../Context";
import React from "react";

const Login = () => {
  const { loginUser } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});

  // Storing the Insert User Form Data.
  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const submitUser = (e) => {
    e.preventDefault();
    loginUser(newUser);
   // e.target.reset();
  };

  return (
    <div style={{ width: '540px', marginLeft: '484px', height: '700px', padding: '30px' }}>
	
     <form className="insertForm" onSubmit={submitUser}>
	 
      <h2>Login</h2>
      <label htmlFor="_name">User Name</label>
      <input type="text" id="_name" onChange={(e) => addNewUser(e, "user_name")}  placeholder="Enter Username"  autoComplete="off" required />
      
	  <label htmlFor="_email">Password</label>
      <input type="password"  id="_email"  onChange={(e) => addNewUser(e, "user_pass")}  placeholder="Enter Password"  autoComplete="off"  required />
      
	  <input type="submit" value="Login" />
	  
    </form>
	</div>
  );
};

export default Login;