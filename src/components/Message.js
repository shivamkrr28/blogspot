
import Header from "./Header";

const Message = () => {  

  return (
 <div style={{ width: '100%'}}>
 <Header />
  {    console.log("Message")  }
 <p style={{ textAlign: "center", marginRight: "132px"}}>Messages</p>

  <div style={{ border: "1px solid", width: '600px', marginLeft: '390px', padding: '12px' }}>
     
        <div style={{margin: "0px 0px 5px", height: "52px"}}>
            <div style={{width: "58px",border: "0px solid",height: "52px",float: "left"}}>
                <img alt="user1" src="http://localhost:3000/user1.jpg" style={{width: "50px", height: "50px", borderRadius: "50%", float: "left", marginRight: "13px"}} />
				
            </div>
            <div style={{width: "510px",border: "0px solid",float: "right",padding: "0px"}}>
                <p style={{float: "left", margin: "-3px -60px 0px 0px", fontSize: "13px"}}>Ashish K,12:29</p>
                <p style={{float: "left",margin : "24px 0 5px 0px"}}>Hi</p>
            </div>
        </div>

        <div style={{margin: "0px 0px 5px", height: "52px"}}>
            <div style={{width: "510px",border: "0px solid",float: "left",padding: "0px"}}>
                <p style={{float: "right", marginTop: "-3px", fontSize: "13px"}}>12:30</p>
                <p style={{float: "right",margin : "24px 0 5px 0px"}}>Hi</p>
            </div>

            <div style={{width: "58px",border: "0px solid",height: "52px",float: "right"}}>
                <img alt="user2" src="http://localhost:3000/user1.jpg" style={{width: "50px", height: "50px", borderRadius: "50%", float: "left", marginRight: "13px"}} />
            </div>            
        </div>

		<form>
            <input type="text" placeholder="Write Message" style={{width: "86%", padding: "15px"}} />
                <input type="submit" value="Send" style={{margin: "10px"}} />
        </form>
	 
	 
	 
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