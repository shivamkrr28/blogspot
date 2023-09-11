import React from "react";

import { Provider } from "./Context";

import UserList from "./components/UserList";
import Login from "./components/Login";
import AddUser from "./components/AddUser";
import Dashboard from "./components/Dashboard";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Message from "./components/Message";
import Chat from "./components/Chat";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Actions } from "./Actions";



function Testing_comp(props) {
	
  return  (
  <div style={{ height: '600px' }} >   			
  <Header />	
	<Link to="/adduser"> Add User </Link>
    <table>
      <thead>	  
        <tr>
		  <th>Sno</th>
		  <th>User Name</th>
          <th>Name</th>
          <th>Email</th>		  
		  <th>Mobile</th>		  
		  <th>City</th>
		  <th>User Type</th>		  
		  <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>         
            <tr>
			 <td> 1 </td>
              <td> {props.car.name} </td>
			  <td> {props.car.model} </td>
              <td> test </td>	  
			  <td> test </td>
			  <td> test </td>
			  <td> test </td>	   
			  <td> test </td>
              <td>
                <button className="btn green-btn">
                  Edit
                </button>
                <button  className="btn default-btn"> Delete </button>
              </td>
            </tr>
      </tbody>
    </table>
	</div>);
}


function App() {
  const data = Actions();  

console.log("data55=>"+JSON.stringify(data));
  

 const carInfo = { name: "Ford", model: "Mustang" };
  
  return (
    <Provider value={data}>

      <div className="App">
        
        <div className="wrapper">
          <section className="right-side">
	       
		<Router>				
				 
				 				
				<Routes>
				    
					<Route path="" element ={ <Login />} />
					<Route path="/dashboard" element ={ <Dashboard /> } />
					<Route path="/adduser" element ={ <AddUser />} />
					<Route path="/userlist" element ={<UserList />} />					
					<Route path="/blogs" element ={ <Blogs />} />
					<Route path="/addblog" element ={ <AddBlog />} />
					<Route path="/profile" element ={ <Profile />} />
					<Route path="/test" element ={ <Testing_comp car={ carInfo } /> } />
					<Route path="/chat" element={<Chat />} />
					<Route path="/message" element={<Message />} />
					<Route path="/signup" element={<Signup />} />

				</Routes>
				
			</Router>    

          </section>
        </div>
      </div>
    </Provider>


  );
}

export default App;