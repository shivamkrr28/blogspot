import { useContext, useState } from "react";
import { AppContext } from "../Context";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Blogs = () => {
  const {
	blogs,    
	blogLength,
    editMode,
	blogEditMode,
    cancelEdit,
    updateBlog,
    deleteBlog,
	changeBlogStatus
  } = useContext(AppContext);

  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});
  

	// console.log("blogs on list page=>"+JSON.stringify(blogs));

  const saveBtn = () => {
	
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
  
  
var count = 1;
  
  const changeStatus = (id, a_status) => {
    if (window.confirm("Do you want to change status?")) {
	
	  changeBlogStatus(id,a_status);
    }
  };

	 
	  
  return !blogLength ? (
    <p>{blogLength === null ? "Loading..." : "Please insert some blogs."}</p>
  ) : (
   
   <div style={{ height: '600px', border: '0px solid gray' }} >
   
      {  console.log("blogs data_@@=>"+JSON.stringify(blogs))  }
	  
  <Header />
	
	<Link to="/addblog" onClick={() => enableEdit()} style={{ textDecoration: 'inherit', padding: '7px', float: 'right', marginBottom: '10px'  }}> Add Blog </Link>

    <table style={{ width : '46%', marginLeft: '327px'}}>
      <thead>
        <tr>
		  <th>Sno</th>
		  <th>Title</th>
          <th>Image</th>
          <th>Caption</th>		  
		  <th>description</th>
		  <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
	  

	   
        {blogs.map(({ id, title, image, caption, description, status, isEditing }) => {
          return isEditing === true ? (
            <tr key={id}>
			 <td>
				{ count }
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={title}
                  onChange={(e) => updateNewData(e, "title")}
                />
              </td>
			  <td>
                <input
                  type="text"
                  defaultValue={image}
                  onChange={(e) => updateNewData(e, "image")}
                />
              </td>
              <td>
                <input
                  type="email"
                  defaultValue={caption}
                  onChange={(e) => updateNewData(e, "caption")}
                />
              </td>			  
			   <td>
                <input
                  type="text"
                  defaultValue={description}
                  onChange={(e) => updateNewData(e, "description")}
                />
              </td>		  
			   
			   <td>               
				<select defaultValue={status} onChange={(e) => updateNewData(e, "status")}>
				<option value="">Select Option</option>
					<option value="1">Active</option>
					<option value="0">DeActive</option>
				</select>
              </td>
              <td>
                <button className="btn green-btn" onClick={() => saveBtn()}>
                  Save
                </button>
                <button  className="btn default-btn" onClick={() => cancelEdit(id)}  > Cancel </button>
              </td>
            </tr>
          ) : (
            <tr key={id}>
			  <td>{ count }</td>
              <td>{title}</td>
			  <td>{image}</td>
              <td>{caption}</td>			 
			  <td>{description}</td>
			     
			  <td> <button  className="btn default-btn" onClick={() => changeStatus(id,status)}  > {status == 1 ? "Active" : "Deactive"} </button></td>
              <td>
				
               <button
                  className="btn default-btn"
                  onClick={() => enableEdit(id, title, image, caption, description, status)}
                >
                  Edit
                </button>
				<button className="btn red-btn" onClick={() => deleteConfirm(id)} > Delete </button>
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