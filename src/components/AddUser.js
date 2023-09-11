import { useState, useContext } from "react";
import { AppContext } from "../Context";
import Header from "./Header";

const AddUser = () => {
  const { insertUser } = useContext(AppContext);
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
	
	insertUser(newUser);
	
	e.target.reset();
  };

  return (
 <div style={{ width: '100%', height: '700px' }}>
 <Header />
  <div style={{ width: '600px', marginLeft: '468px', height: '700px', padding: '30px' }}>
	
    <form className="insertForm" onSubmit={submitUser}>
      <h2>Add User</h2>
      <label htmlFor="_name">Name</label>
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewUser(e, "name")}
        placeholder="Enter name"
        autoComplete="off"
        
      />
      <label htmlFor="_email">Username</label>
      <input
        type="text"
        id="_email"
        onChange={(e) => addNewUser(e, "user_name")}
        placeholder="Enter Username"
        autoComplete="off"
        
      />
	  <label htmlFor="_email">Email</label>
      <input
        type="text"
        id="_email"
        onChange={(e) => addNewUser(e, "user_email")}
        placeholder="Enter email"
        autoComplete="off"
        
      />
	  <label htmlFor="_email">DOB</label>
      <input
        type="date"
        id="_email"
        onChange={(e) => addNewUser(e, "user_dob")}        
        autoComplete="off"
        
      />
	  <label htmlFor="_email">Mobile</label>
      <input
        type="text"
        id="_email"
        onChange={(e) => addNewUser(e, "user_mobile")}
        placeholder="Enter mobile"
        autoComplete="off"
        
      />
	  <label htmlFor="_email">City</label>
      <input
        type="text"
        id="_email"
        onChange={(e) => addNewUser(e, "user_city")}
        placeholder="Enter city"
        autoComplete="off"
        
      />
	  
	   
	    <label htmlFor="_email">User Type</label>
		  <select className="dropdown" id="_email" onChange={(e) => addNewUser(e, "user_type")}>
			  <option value="">Select User</option>			  
			  <option value="1">Admin</option>
              <option value="2">User</option>
			  <option value="3">Guest User</option>
		  </select>
	
	  
	    <label htmlFor="_email">Status</label>
		  <select className="dropdown" id="_email" onChange={(e) => addNewUser(e, "user_status")}>
			  <option value="">Select Status</option>
			  <option value="1">Active</option>
			  <option value="0">DeActive</option>
	 	  </select>
	   
      <input type="submit" value="Submit" />
    </form>
	</div>
	</div>
  );
};

export default AddUser;