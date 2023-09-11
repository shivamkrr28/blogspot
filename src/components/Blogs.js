import { useContext, useState } from "react";
import { AppContext } from "../Context";
import Header from "./Header";
import { Link } from 'react-router-dom';
import Comments from "./Comments";

const Blogs = () => {
  const {
	blogs,    
	blogLike,	
	blogLength,    
	blogEditMode,
    cancelEdit,    
    deleteBlog,
	viewUserDetails,
	updateBlog
  } = useContext(AppContext);


	//console.log("blogs221 =>"+JSON.stringify(blogs));


  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});
  const [comment, setCommentBox] = useState(false);
  
    // console.log("blogs11"+JSON.stringify(blogs));  
  
	// console.log("blogs on list page=>"+JSON.stringify(blogs));

	  const viewUser = (id) => {
		// console.log("view userid=>"+id);
		viewUserDetails(id);
		
	  };  
  
	  const saveBtn = () => {
			
			//viewUser(newData);
			
			updateBlog(newData);
		
		};

	  const updateNewData = (e, field) => {
		  
			console.log("newdta=>"+JSON.stringify(newData));
		  
			setNewData({
			  ...newData,
			  [field]: e.target.value,
			});
		
	  };

	  const enableEdit = (id, title, image, caption, description, status) => {
		  
		  console.log("edit mode=>"+JSON.stringify(newData));
		  setNewData({id, title, image, caption, description, status});
		
		blogEditMode(id);
	  };

	  const deleteConfirm = (id) => {
		if (window.confirm("Are you sure?")) {
		  deleteBlog(id);
		}
	  };
	  
		var user_data = JSON.parse(sessionStorage.getItem('user-roll'));
	
		const likeBlog = (a,b) => {
		  
		  console.log("a=>" +a+ "<=b=>"+b);
		  
		  let data = {"blog_id": a, "flag" : b, "user_id":user_data.id};	 
		
		  blogLike(data);
	  };
  
  // let color1 = likeColor.likecolor1;
	  
	 // console.log("lolita=>"+user_data.user_type);
	  
  return !blogLength ? (
    <p>{blogLength === null ? "Loading..." : "Please insert some blogs."}</p>
  ) : (
   
   <div style={{ border: '0px solid gray' }} >
   
       
	  
  <Header />
	

	<Link to="/addblog" style={{ textDecoration: 'inherit', padding: '7px'  }}> <i onClick={() => enableEdit()} style={{ fontSize: '30px'  }} title="Create Blog" className="fa-solid fa-circle-plus"></i></Link>

    <table style={{ width : '46%', marginLeft: '365px'}}>
      <thead>
        <tr>
		  
        </tr>
      </thead>
      <tbody>  
		  
		  
		  
        { blogs.map(({ id, title, image, caption, description, status, isEditing, name, role, user_id, mylikes, bloglikes, profession }) => {
          return isEditing === true ? (
            <tr key={id}>
			  <td>
			   <input
                  type="text"
                  defaultValue={title}
                  onChange={(e) => updateNewData(e, "title")}
                />
				   		
				   <img alt="blog" src="http://localhost:3000/image.jpg"  style={{ width: '630px', height: '300px' }} />
				   
				   
				   <input
                  type="email"
                  defaultValue={caption}
                  onChange={(e) => updateNewData(e, "caption")}
                />
				  <input
                  type="text"
                  defaultValue={description}
                  onChange={(e) => updateNewData(e, "description")}
                />	
				   
				<button className="btn green-btn" onClick={() => saveBtn()}>
                  Save
                </button>
                <button  className="btn default-btn" onClick={() => cancelEdit(id)}  > Cancel </button>
				
			  </td>		     
			  
            </tr>
          ) : (
            <tr key={id}>
			  <td>
			  <div style={{ border: '0px solid darkred',  padding: '12px', backgroundColor: '#F9FAFB' }}>

					<div style={{margin:"0 0 5px 0px", height: "56px"}}>
						<div style={{ width: '50px', height: '50px', borderRadius: '50%', float: 'left', marginRight: "13px" }}>
							<img alt="user" src="http://localhost:3000/user1.jpg"  style={{ width: '50px', height: '50px', borderRadius: '50%' }}  />	  
						</div>
						<div style={{ marginTop:"6px", height: "50px", width: "85%" }}>
						  <div style={{float: "left"}} >
							<Link to="/profile" onClick={() => viewUser(id)} style={{textDecoration: "initial"}}> <span> {name}</span> </Link>
							<p style={{ fontSize: "12px", textAlign: "left", margin: "0 0 0 0"}}>{ profession }</p> 
						  </div>
						</div> 
					
					</div>
					
				<span style={{float: 'left',fontSize: '13px'}}> Posted on : 01 june 2022 2pm </span>
										
				   
					   <div style={{width: '100%', float: 'left'}}> 
								<p style={{ float: 'left' }} >{title}</p>									
					   </div>	
				   
							<img alt="blog" src="http://localhost:3000/image.jpg"  style={{ width: '630px', height: '300px' }} />
					   <div style = {{marginRight: '573px', width: '100%'}}>
						 <p> {caption}</p>
						 <p> {description} </p>
					   </div>		   
				   
				<i onClick={() => likeBlog(id, mylikes)} style={{ color: mylikes=== 1 ? "deeppink" : "" }}   className="fa-solid fa-thumbs-up"></i> <span style={{ marginRight: '20px'}}>{ bloglikes }</span>			
				<i onClick={() => setCommentBox(!comment)} className="fa-solid fa-comment"></i> <span style={{ marginRight: '20px'}}>20</span>
					{ (user_data.id !== user_id && user_data.user_type !== 'admin') ?  "" : (<i onClick={() => enableEdit(id, title, image, caption, description, status)} className="fa-solid fa-pen-to-square"></i>)}
					{ (user_data.id !== user_id && user_data.user_type !== 'admin') ?  "" : (<i style={{marginLeft: '14px'}}  onClick={() => deleteConfirm(id)}  className="fa-solid fa-trash"></i>)}
				

				{ console.log("comments=>"+comment) }
				
				{comment===true ? <Comments /> : ""} 
				  
			  </div>
			  </td>		     
			  
            </tr>
		
          );		  
		  
        })}
      </tbody>
    </table>
	</div>
  );
};

export default Blogs;