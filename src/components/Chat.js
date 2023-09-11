import Header from "./Header";
import { Link } from 'react-router-dom';

const Message = () => {  
  
   console.log("chat componenet load");
  
  return (
 <div style={{ width: '100%'}}>
 <Header />
 
  <p style={{ textAlign: "center", marginRight: "132px"}}>Chat Messages</p>

  <div style={{ border: "1px solid", width: '600px', marginLeft: '390px', padding: '12px', backgroundColor:'#E7E9EB' }}>
     
				<Link to="/message" style={{ textDecoration: 'inherit'}}>
					<div style={{margin: "0px 0px 5px", height: "63px"}}>					
							<div style={{width: "58px",border: "0px solid",height: "52px",float: "left"}}>
								<img alt="user1" src="http://localhost:3000/user1.jpg" style={{width: "50px", height: "50px", borderRadius: "50%", float: "left", marginRight: "13px"}} />
								<span style={{height: "15px", width: "15px", backgroundColor: "green", borderRadius: "50%", display: "inline-block", margin: "36px 0 0 -20px"}}></span>
							</div>
						
							<div style={{width: "510px",border: "0px solid",float: "right",padding: "0px"}}>
								<p style={{float: "left", margin: "-3px -60px 0px 0px", fontSize: "13px"}}>Ashish K,12:29</p>
								<p style={{float: "left",margin : "24px 0 5px 0px"}}>Hi</p>
							</div>					
					</div>	
				</Link>	
		
				<Link to="/message" style={{ textDecoration: 'inherit'}}>
					<div style={{margin: "0px 0px 5px", height: "63px"}}>					
							<div style={{width: "58px",border: "0px solid",height: "52px",float: "left"}}>
								<img alt="user2" src="http://localhost:3000/user1.jpg" style={{width: "50px", height: "50px", borderRadius: "50%", float: "left", marginRight: "13px"}} />
   								<span style={{height: "15px", width: "15px", backgroundColor: "green", borderRadius: "50%", display: "inline-block", margin: "36px 0 0 -20px"}}></span>

							</div>
						
							<div style={{width: "510px",border: "0px solid",float: "right",padding: "0px"}}>
								<p style={{float: "left", margin: "-3px -60px 0px 0px", fontSize: "13px"}}>Ashish K,12:29</p>
								<p style={{float: "left",margin : "24px 0 5px 0px"}}>Hi</p>
							</div>					
					</div>	
				</Link>		
		
				<Link to="/message" style={{ textDecoration: 'inherit'}}>
					<div style={{margin: "0px 0px 5px", height: "63px"}}>					
							<div style={{width: "58px",border: "0px solid",height: "52px",float: "left"}}>
								<img alt="user3" src="http://localhost:3000/user1.jpg" style={{width: "50px", height: "50px", borderRadius: "50%", float: "left", marginRight: "13px"}} />
							</div>
						
							<div style={{width: "510px",border: "0px solid",float: "right",padding: "0px"}}>
								<p style={{float: "left", margin: "-3px -60px 0px 0px", fontSize: "13px"}}>Ashish K,12:29</p>
								<p style={{float: "left",margin : "24px 0 5px 0px"}}>Hi</p>
							</div>					
					</div>	
				</Link>
				
				<Link to="/message" style={{ textDecoration: 'inherit'}}>
					<div style={{margin: "0px 0px 5px", height: "63px"}}>					
							<div style={{width: "58px",border: "0px solid",height: "52px",float: "left"}}>
								<img alt="user4" src="http://localhost:3000/user1.jpg" style={{width: "50px", height: "50px", borderRadius: "50%", float: "left", marginRight: "13px"}} />
							</div>
						
							<div style={{width: "510px",border: "0px solid",float: "right",padding: "0px"}}>
								<p style={{float: "left", margin: "-3px -60px 0px 0px", fontSize: "13px"}}>Ashish K,12:29</p>
								<p style={{float: "left",margin : "24px 0 5px 0px"}}>Hi</p>
							</div>					
					</div>	
				</Link>
				
				<Link to="/message" style={{ textDecoration: 'inherit'}}>
					<div style={{margin: "0px 0px 5px", height: "63px"}}>					
							<div style={{width: "58px",border: "0px solid",height: "52px",float: "left"}}>
								<img alt="user4" src="http://localhost:3000/user1.jpg" style={{width: "50px", height: "50px", borderRadius: "50%", float: "left", marginRight: "13px"}} />
							</div>
						
							<div style={{width: "510px",border: "0px solid",float: "right",padding: "0px"}}>
								<p style={{float: "left", margin: "-3px -60px 0px 0px", fontSize: "13px"}}>Ashish K,12:29</p>
								<p style={{float: "left",margin : "24px 0 5px 0px"}}>Hi</p>
							</div>					
					</div>	
				</Link>
		
	 
	  <div style={{ border: '0px solid gray' }} >
	  <table style={{ width : '100%', marginLeft: '0'}}>
    
      <tbody>
	
			
      </tbody>
    </table>
	</div>
	 
	</div>
	</div>
  );
};

export default Message;