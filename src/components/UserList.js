import { useContext, useState } from "react";
import { AppContext } from "../Context";
import Header from "./Header";
import { Link } from 'react-router-dom';

const UserList = () => {
  const {
    users,
    userLength,
	changeUserStatus	
  } = useContext(AppContext);

  let [hookVal, setHookVal] = useState(0);
  
 
  
  // Storing users new data when they editing their info.  
  
  var count = 1;
  
  const changeStatus = (id, a_status) => {
    // if (window.confirm("Do you want to change status?")) {
	
	  // changeUserStatus(id,a_status);
    // }
	changeUserStatus(id,a_status);
  };

  return !userLength ? (
    <p>{userLength === null ? "Loading..." : "Please insert some users."}</p>
  ) : (
  
   <div style={{ height: '600px' }} >
   
   			
  <Header />  	
	
	<div>{ hookVal }</div>
	 <button  className="btn default-btn" onClick={() => setHookVal(hookVal+1)}  > Click Here </button>
	<Link to="/adduser" style={{ textDecoration: 'inherit', padding: '7px'  }}> <i style={{ fontSize: '30px'  }} title="Create User" className="fa-solid fa-circle-plus"></i></Link>
    <table>
      <thead>
        <tr>
		  <th>Sno</th>
		  <th>User Profile</th>
          <th>UserName</th>
          <th>Name</th>
		  <th>Email</th>
		  <th>City</th>		  
		  <th>status</th>         
        </tr>
      </thead>
      <tbody>
	   
        {users.map(({ id, user_name, name, user_email, mobile, city, user_type, status, isEditing }) => {
          return (
            <tr key={id}>
			  <td>{ count }</td>
              <td> <Link to="/profile">  <img alt="user" src="http://localhost:3000/user1.jpg"  style={{ width: '50px', height: '50px', borderRadius: '50%' }}  /> </Link></td>
			  <td><Link to="/profile" style={{textDecoration: "initial"}}> {user_name} </Link></td>
			  <td>{name}</td>
              <td>{user_email}</td>	
			  <td>{city}</td>                    
			  		   
			  <td> <button  className="btn default-btn" onClick={() => changeStatus(id,status)}  > {status === 1 ? "Following" : "Follow"} </button></td>
              <td>          
              </td>
            </tr>		
          );		
		  
        })}
      </tbody>
    </table>
	</div>
  );
};

export default UserList;