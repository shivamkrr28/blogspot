 import { useState, useContext } from "react";
 import { AppContext } from "../Context";


const Signup = () => {

    const { loginUser } = useContext(AppContext);
    const [newUser, setNewUser] = useState({});

  const addNewUser = (val, field) => {
    setNewUser({
      ...newUser,
      [field]: val.target.value,
    });
  };

 //   console.log("signup ==>"+ JSON.stringify(newUser));

 const submitUser = (e) => {

 console.log("signup ==>"+ JSON.stringify(newUser));

    e.preventDefault();
    loginUser(newUser);
   // e.target.reset();
  };


  return (
    <div style={{ width: '540px', marginLeft: '484px', height: '700px', padding: '30px' }}>
	
        <form className="insertForm"  onSubmit={submitUser} >
        
            <h2>Register</h2>
        
            <label htmlFor="_name">Name</label>
            <input type="text"  onChange={(val) => addNewUser(val, "user_name")}   placeholder="Enter Name"   required />
        
            <label htmlFor="_name">Email id</label>
            <input type="text"   onChange={(val) => addNewUser(val, "user_email")}   placeholder="Enter Email id"   required />
        

            <label htmlFor="_name">Mobile</label>
            <input type="text"  onChange={(val) => addNewUser(val, "mobile")}  placeholder="Enter Mobile"    required />
        
            <label htmlFor="_name">User Name</label>
            <input type="text"  onChange={(val) => addNewUser(val, "username")}  placeholder="Enter Username"    required />
            
        
            <label htmlFor="_email">Password</label>
            <input type="password"  onChange={(val) => addNewUser(val, "pass")}  placeholder="Enter Password"    required />
            
            <label htmlFor="_email">Confirm Password</label>
            <input type="password" onChange={(val) => addNewUser(val, "conf_pass")}  placeholder="Enter Confirm Password"    required />
            
            <input type="submit" value="Signup" />
        
        </form>
	</div>
  );
};

export default Signup;