import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
 
  let data =  JSON.parse(sessionStorage.getItem('user-info'));
 
 var session_name ='';
 
 if(data != null)
 {
	   session_name = data.user_name[0].toUpperCase() + data.user_name.slice(1);
 }
 
 
  const logout = () => {   

		localStorage.removeItem('user-info');
		sessionStorage.removeItem('user-info');
		
	     window.location.href = '/';	
  };
 
  return (							
    <div style={{ height: '50px' }} >
		<Link to="/dashboard" style={{ textDecoration: 'inherit', padding: '7px'  }}><i className ="fa-solid fa-house"></i>  </Link>
		
		<Link to="/blogs" style={{ textDecoration: 'inherit', padding: '7px'  }}>  Blogs  </Link>		

		<Link to="/userlist" style={{ textDecoration: 'inherit', padding: '7px'  }}>  Following </Link>		
	
		<Link to="/chat" style={{ textDecoration: 'inherit', padding: '7px'  }}>  Message </Link>
		
		<Link to="/userlist" style={{ textDecoration: 'inherit', padding: '7px'  }}>  <i title="Notfication" className="fa-solid fa-bell"></i>  </Link>

		<input type="text" placeholder="Search..."   style={{ width: '278px', padding: '5px', marginLeft: '100px', fontStyle: 'italic' }} />
			
		
<div style={{float: 'right'}}>
	{session_name}
	<Link to='/' onClick={logout} style={{ textDecoration: 'inherit', marginLeft: '10px'  }}><i title="Logout" className="fa-solid fa-right-from-bracket"></i>  </Link>
</div>

	</div>
  );
};

export default Header;