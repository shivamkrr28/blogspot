
import React from "react";
import Header from "./Header";


const Dashboard = () => {
 
  return (							
    <div style={{ height: '600px' }} >
			<Header />
			
			
		<div style={{ width: '1112px', border: '0px solid gray', height: '160px', marginLeft: '168px' }}>
			<div style={{ width: '250px', border: '1px solid gray', height: '160px', float: 'left', marginRight:'20px', marginLeft:'29px'}}>
				<p style={{margin: '63px'}}>Total Admin - 10</p>
			</div>
			
			<div style={{ width: '250px', border: '1px solid gray', height: '160px', float: 'left', marginRight:'20px'}}>
				<p style={{margin: '63px'}}> Total Users - 10</p>
			</div>
						
			<div style={{ width: '250px', border: '1px solid gray', height: '160px', float: 'left', marginRight:'20px'}}>
				<p style={{margin: '63px'}}> Total Blogs - 10</p>
			</div>
			
			<div style={{ width: '250px', border: '1px solid gray', height: '160px',  float: 'right', marginRight:'20px'}}>
				<p style={{margin: '63px'}}> Total Posts - 10</p>
			</div>
		</div>
	</div>
  );
};

export default Dashboard;