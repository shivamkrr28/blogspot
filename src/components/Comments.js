import React from "react";
import { Link } from 'react-router-dom';


const Comments = () => {
 
  return (	
		
		<div style={{width: '100%', height: "125px", border: "0px solid", backgroundColor: "rgb(249, 250, 251)"}}> 
				<div style={{width: '100%', height: "68px", border: "0px solid"}}>
					<div style={{margin: "5px 0 0 17px"}}>
						<div style={{width: "8%", border: "0px solid", height: "52px", float: "left"}}>
							<img alt="user1" src="http://localhost:3000/user1.jpg" style={{width: "50px", height: "50px", borderRadius: "50%", float: "left", marginRight: "13px"}} />
						</div>
						<div style={{width: "90%", border: "0px solid", float: "right", padding: "0px"}}>
							<p style={{float: "left", margin: "-3px -60px 0px 0px", fontSize: "13px"}}>Ashish K,12:29</p>
							<p style={{float: "left", margin: "24px 0px 5px"}}>Hi</p>
						</div>
					</div>
				</div>
				<div style={{width: '100%', height: "55px", padding: "0px", border: "0px solid"}}>
					<input style={{ width: "77%", borderRadius: "1 solid gray", border: "1px solid", borderRadius: "20px", height: "44px", padding: "8px", marginRight: "10px" }} type="text" name="comment" placeholder="Write Comment" />
					<input type="submit" value="Submit" />	
				</div>											
		</div>
   
  );
};

export default Comments;