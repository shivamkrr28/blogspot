import { useState, useContext } from "react";
import { AppContext } from "../Context";

const EditUser = () => {
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
	
 //	console.log("newUser=>"+JSON.stringify(newUser));
	
	insertUser(newUser);
	
	e.target.reset();
  };

  return (
  <div style={{ width: '600px', marginLeft: '468px', height: '700px', padding: '30px' }}>
	
    <form className="insertForm" onSubmit={submitUser}>
      <h2>Edit User</h2>
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
        type="email"
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
			  <option value="Admin">Admin</option>
			  <option value="M0">M0</option>
			  <option value="M1">M1</option>
			  <option value="M2">M2</option>
		  </select>
	
	  
	    <label htmlFor="_email">Status</label>
		  <select className="dropdown" id="_email" onChange={(e) => addNewUser(e, "user_status")}>
			  <option value="">Select Status</option>
			  <option value="Active">Active</option>
			  <option value="DeActive">DeActive</option>
	 	  </select>
	   
      <input type="submit" value="Update" />
    </form>
	</div>
  );
};

export default EditUser;