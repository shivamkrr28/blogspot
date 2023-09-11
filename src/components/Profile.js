import { useContext } from "react";
import { AppContext } from "../Context";
import Header from "./Header";

import { Link } from 'react-router-dom';

const Profile = () => {
  
   console.log("profile componenet load");
  
   const {  } = useContext(AppContext);
  

// function Timer() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
    // setTimeout(() => {
      // setCount((count) => count + 1);
    // }, 1000);
  // });

  // return <h1>I have rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);


  
  return (
 <div style={{ width: '100%'}}>
 <Header />
  <div style={{ width: '600px', marginLeft: '280px', padding: '30px' }}>
     
	    <div style={{margin:"0 0 5px 0px", height: "52px"}}>
			<img alt="user" src="http://localhost:3000/user1.jpg"  style={{ width: '50px', height: '50px', borderRadius: '50%', float: 'left', marginRight: "13px" }} />	  
	 
			<div style={{ marginTop:"6px" }}><label htmlFor="_name">Shivam K</label>
				<div>5 Blogs 10 Followers  15 Following </div>
			</div> 			
		</div>

		<div style={{width: '100%', border: "0px solid gray", margin: "12px 0 11px 0px", height: "28px"}} >
			<label htmlFor="_name" style={{border: "1px solid gray", padding:"2px 25px 4px 24px"}}> <Link to="/following" style={{textDecoration: "initial"}}> Following </Link> </label><label htmlFor="_name"  style={{border: "1px solid gray", padding:"2px 28px 4px 24px", marginLeft:"12px"}} ><Link to="/message" style={{textDecoration: "initial"}}>Message</Link></label> 
		</div>
		
	 <div>Bio :  <label htmlFor="_name">#musiclover #developer</label> </div>
	 <div>Profession :  <label htmlFor="_name">Soft Developer</label> </div>
	 <div>Birthday :  <label htmlFor="_name">28 march</label> </div>
	 <div>Hobbies :  <label htmlFor="_name">Music, News, Movies, Cricket</label> </div>	
	 <div>Email :  <label htmlFor="_name">shivamkr227@gmail.com</label> </div>	 
	 <div>Address :  <label htmlFor="_name">Noida</label> </div>
	 
	 
	  <div style={{ border: '0px solid gray' }} >
	  <table style={{ width : '100%', marginLeft: '0'}}>
      
	  <thead>
        <tr>
		  <th>Blogs</th>
		  
        </tr>
      </thead>
      <tbody>
	   		
		<tr>
			  <td>
			  <div style={{ border: '0px solid darkred',  padding: '12px', backgroundColor: '#F9FAFB' }}>
					

				<div style={{margin:"0 0 5px 0px", height: "56px"}}>
					<div style={{ width: '50px', height: '50px', borderRadius: '50%', float: 'left', marginRight: "13px" }}>
						<img alt="user1" src="http://localhost:3000/user1.jpg"  style={{ width: '50px', height: '50px', borderRadius: '50%' }}  />	  
					</div>

					<div style={{ marginTop:"6px", height: "50px", width: "85%" }}>
						<div style={{float: "left"}} >
							<Link to="/profile" style={{textDecoration: "initial"}}> <span>Shivam K</span> </Link>
							<p style={{ fontSize: "11px", textAlign: "left"}}>Soft Developer</p> 
						</div>
					</div> 
				
				</div>
					
					 <span style={{marginRight: '433px',fontSize: '13px'}}> Posted on : 01 june 2022 2pm </span>
					
					
					 <div>
						   <div style={{width: '100%', float: 'left'}}> 
									<p style={{ float: 'left' }} >#blog10</p>									
						   </div>	
					   
						   <img alt="blog" src="http://localhost:3000/image.jpg"  style={{ width: '630px', height: '300px' }} />
						   <div style = {{ marginRight: '573px', width: '100%'}} >
							 <p> #travelblog</p>
							 <p> #its my 10th travelling blog </p>
						   </div>
				   </div>
				   
				<div>  


				</div>				     
				  
			  </div>
			  </td>		     
			  
            </tr>
			
      </tbody>
    </table>
	</div>
	 
	</div>
	</div>
  );
};

export default Profile;