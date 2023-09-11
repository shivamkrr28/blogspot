import { useState, useContext } from "react";
import { AppContext } from "../Context";
import Header from "./Header";

const AddBlog = () => {
  
  const { insertBlog } = useContext(AppContext);
  const [newblog, setNewBlog] = useState({});

  // Storing the Insert User Form Data.
  const addNewBlog = (e, field) => {
	  
    setNewBlog({
      ...newblog,
      [field]: e.target.value,
    });
	
	console.log("newBlog=>"+JSON.stringify(newblog));
  };

  // Inserting a new user into the Database.
  const submitBlog = (e) => {   
	e.preventDefault();
 
 	// console.log("newBlog=>"+JSON.stringify(newblog));
	
	insertBlog(newblog);
	
	e.target.reset();
  };

  return (
 <div style={{ width: '100%', height: '700px' }}>
 <Header />
 
  { console.log("working render 2") }  
 
  <div style={{ width: '600px', marginLeft: '468px', height: '700px', padding: '30px' }}>
	  
    <form className="insertForm" onSubmit={submitBlog}>
      <h2>Add Blog</h2>
      <label htmlFor="_name">Title</label>
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewBlog(e, "title")}
        placeholder="Enter Title"
        autoComplete="off"
        
      />
      <label htmlFor="_email">Image</label>
      <input
        type="file"
        id="_name"
        onChange={(e) => addNewBlog(e, "image")}
        placeholder="Select Image"
        autoComplete="off"
      />
	  <label htmlFor="_email">Caption</label>
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewBlog(e, "caption")}        
        autoComplete="off"
        
      />
	  <label htmlFor="_email">Description</label>
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewBlog(e, "description")}
        placeholder="Enter Description"
        autoComplete="off"
        
      />
	  
	    <label htmlFor="_name">Status</label>
		  <select className="dropdown" id="_name" onChange={(e) => addNewBlog(e, "status")}>
			  <option value="">Select Status</option>
			  <option value="1">Active</option>
			  <option value="0">DeActive</option>
	 	  </select>
	   
      <input type="submit" value="Submit" />
    </form>
	</div>
	</div>
  );
};

export default AddBlog;