import { useEffect, useState } from "react";

export const Actions = () => {
  
  let [users, setUsers] = useState([]);
  let [blogs, setBlogs] = useState([]);
  let [userViewData, setUserViewData] = useState({});
  

    //userLength is for showing the Data Loading message.
  let [userLength, setUserLength] = useState(null);
  let [blogLength, setBlogLength] = useState(null);


	// useEffect(() => {   
		// console.log("useeffect testing is on...");		
		// fetch("http://localhost/php-react/all-users.php")
		// .then((res) => {		
		  // return res.json();
		// })
		// .then((data) => {
		
		  // if (data.success) {			
			// console.log("if=>"+JSON.stringify(data));
			// setUsers(data.users.reverse());
			// setUserLength(true);
		  // } else {
			// console.log("else=>"+data);
			// setUserLength(0);
		  // }
		// })
		// .catch((err) => {
		  // console.log(err);
		// }); 
	  
	// },[users]);
	

  useEffect(() => {  
    
    fetch("http://localhost/php-react/all-users.php")
    .then((res) => {		
      return res.json();
    })

    .then((data) => {
    
      if (data.success) {   
        
        setUsers(data.users.reverse());
        setUserLength(true);
      } else {
        setUserLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    }); 

	 // load blogs
	   let userid = 0;

       userid = 0;
	  
	  fetch("http://localhost/php-react/all-blogs.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id : userid}),
    })
	  
      .then((result) => {		
        return result.json();
      })
  
      .then((datablogs) => {
			
        if (datablogs.success) {
		
          setBlogs(datablogs.blogs.reverse());
          setBlogLength(true);
        } else {
          setBlogLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      }); 
	  
	  
  },[]);
  
  
  // console.log("@@@=>"+JSON.stringify(blogs));
  
  
   // view user details
  const viewUserDetails = (id) => {
	  
	  let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };
    fetch("http://localhost/php-react/view-user.php", option)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          
		//  console.log("user details=>"+JSON.stringify(data));
		
		  
		     setUserViewData(data.user);
			 
		  
		//  console.log("users state final=>"+JSON.stringify(users));		  		  
		   
        } else {
          alert(data.msg);
        }
      })
	  
      .catch((err) => {
        console.log(err);
      });
  };
  
  // Inserting a new user into the database.
  const insertUser = (newUser) => {	 
	  
    fetch("http://localhost/php-react/add-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          
		  setUsers([
            {
              id: data.id,
              ...newUser,
            },
            ...users,
          ]);
		  
		  alert(data.msg);
		  
          setUserLength(true);
		  
		   
        } else {
          alert(data.msg);
        }
      })
	  
      .catch((err) => {
        console.log(err);
      });
  };
  
  
  // Inserting a new blog into the database.
  const insertBlog = (newUser) => {
	  
	    var user_id = JSON.parse(sessionStorage.getItem('user-roll')).id;
		
	//	 console.log("user_lol"+JSON.stringify(newUser));
		 
		 let params = {'blog_data':newUser,'userid':user_id};
		 
		 console.log(JSON.stringify(params));
	  
    fetch("http://localhost/php-react/add-blog.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
		  

		  alert(data.msg);
		  
          setBlogLength(true);
		  
		   
        } else {
          alert(data.msg);
        }
      })
	  
      .catch((err) => {
        console.log(err);
      });
  };
  
			// like blog
	const blogLike = (params) => {
	  
	      // var user_id = JSON.parse(sessionStorage.getItem('user-roll')).id;
		
		  console.log("blog item=>"+JSON.stringify(params));
		  
		  console.log("blog like1 =>"+JSON.stringify(params.flag));
		  
		  if(params.flag === 1){
		   params.flag = 0;
	   }else{
		   params.flag = 1;
	   }
	   
	    console.log("blog like2 =>"+JSON.stringify(params.flag));
	  
    fetch("http://localhost/php-react/blog-like.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
		  
		  	console.log("useEffect working in blogLike");
			 
			blogs = blogs.map((blog) => {
				if (blog.id === params.blog_id) {				 
				  
				   blog.mylikes = params.flag;	
				   
					if(params.flag === 1){
						blog.bloglikes = parseInt(blog.bloglikes) + parseInt(1);
					}else{
						blog.bloglikes = parseInt(blog.bloglikes) - parseInt(1);
					}
				
				  // alert(data.msg);
				  
				  return blog;
				}
				
            return blog;
          });	
				setBlogs(blogs);
		
		  
          setBlogLength(true);
		  
		   
        } else {
          // alert(data.msg);
        }
      })
	  
      .catch((err) => {
        console.log(err);
      });
  };
  
  //  console.log("blogs like0=>" + JSON.stringify(likeColor));
	
     // dislike blog
  const blogDislike = (params) => {
		
	console.log("blog dislike item=>"+JSON.stringify(params));
	  
    fetch("http://localhost/php-react/blog-dislike.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {		  

		  // alert(data.msg);		
		  
          setBlogLength(true);		  
		   
        } else {
          // alert(data.msg);
        }
      })
	  
      .catch((err) => {
        console.log(err);
      });
  };
  
  
    // login user.
  const loginUser = (newUser) => {
	  
	console.log("login state=>"+JSON.stringify(newUser));
	  
    fetch("http://localhost/php-react/login-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success === 1) {
          
		   let role = data.user_type;
		   let userid = data.id;
		   
		   //let userid = '28';
				   
		   let user_roll = {"id":userid,"user_type":role};
		  		  
		  localStorage.setItem('user-info', JSON.stringify(newUser));
		  
		  sessionStorage.setItem("user-info", JSON.stringify(newUser));
		  
		  sessionStorage.setItem('user-roll', JSON.stringify(user_roll));
		  
		  console.log("login successfull");		
		  
		 // alert(data.msg);
		  
		  window.location = "/blogs";
		   
        } else {		  
           alert(data.msg);
        }
      })
	  
      .catch((err) => {
        console.log(err);
      });
	  
  };
  

  // Enabling the edit mode for a listed user.
  const editMode = (id) => {
	  
      users = users.map((user) => {
		
      if (user.id === id) {
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });
    setUsers(users);
  };
  
    // Enabling the edit mode for a listed blog.
  const blogEditMode = (id) => {
	  
      blogs = blogs.map((blog) => {
		
      if (blog.id === id) {
        blog.isEditing = true;
        return blog;
      }
	  
      blog.isEditing = false;
      return blog;
    });
    setBlogs(blogs);
  };

  // Cance the edit mode.
  const cancelEdit = (id) => {
    users = users.map((user) => {
      if (user.id === id) {
        user.isEditing = false;
        return user;
      }
      return user;
    });
    setUsers(users);
  };

  // Updating a user.
  const updateUser = (userData) => {
    fetch("http://localhost/php-react/update-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
			

			
          users = users.map((user) => {
            if (user.id === userData.id) {
              user.isEditing = false;
			  user.name = userData.name;
              user.user_name = userData.user_name;
              user.user_email = userData.user_email;
			  user.mobile = userData.mobile;
			  user.city = userData.city;
			  user.user_type = userData.user_type;
			  user.status = userData.status;
			  
			   alert(data.msg);
			  
              return user;
            }
            return user;
          });
		  
		 
		  
          setUsers(users);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
    // Updating a blog.
  const updateBlog = (blogData) => {
    fetch("http://localhost/php-react/update-blog.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
			
          blogs = blogs.map((blog) => {
            if (blog.id === blogData.id) {
              blog.isEditing = false;
			  blog.title = blogData.title;
              blog.image = blogData.image;
              blog.caption = blogData.caption;
			  blog.description = blogData.description;			  
			  blog.status = blogData.status;
			  
			   alert(data.msg);
			  
              return blog;
            }
            return blog;
          });
		  
		 
		  
          setBlogs(blogs);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

   // Change status of user.
  const changeUserStatus = (id, a_status) => {	

		if(a_status === 0){
		   a_status = 1;
	   }else{
		   a_status = 0;
	   }
	
    fetch("http://localhost/php-react/change-status.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, status: a_status, table: "users" }),
    })
      .then((res) => {		  
		   
        return res.json();
      })
      .then((data) => {
		   
        if (data.success) {			
					  
			  users = users.map((user) => {
				if (user.id === id) {				 
				  
				   user.status = a_status;
				  
				  
				  // alert(data.msg);
				  
				  return user;
				}
				
				
				
            return user;
          });	
				setUsers(users);
							
		  
          if (users.length === 1) {
            setUserLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
    // Change status of blog.
  const changeBlogStatus = (id, a_status) => {	 
	
	   if(a_status === 0){
		   a_status = 1;
	   }else{
		   a_status = 0;
	   }
				   
    fetch("http://localhost/php-react/change-status.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, status: a_status, table: "blogs" }),
    })
      .then((res) => {		  
		   
        return res.json();
      })
      .then((data) => {
		   
        if (data.success) {
			  blogs = blogs.map((blog) => {
				if (blog.id === id) {					
				  
				   blog.status = a_status;				  
				  
				  // alert(data.msg);
				  
				  return blog;
				}				
            return blog;
          });	
				setBlogs(blogs);
							
		  
          if (blogs.length === 1) {
            setBlogLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  // Deleting a user.
  const deleteUser = (theID) => {
      // filter outing the user.	  
    let userDeleted = users.filter((user) => {
      return user.id !== theID;
    });	 
	
    fetch("http://localhost/php-react/delete-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: theID }),
    })
      .then((res) => {		  
		   
        return res.json();
      })
      .then((data) => {
		   
        if (data.success) {
          setUsers(userDeleted);
          if (users.length === 1) {
            setUserLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
    // Deleting a user.
  const deleteBlog = (theID) => {
      // filter outing the user.	  
    let blogDeleted = blogs.filter((blog) => {
      return blog.id !== theID;
    });	 
	
	 // console.log("blog "+ JSON.stringify(blogDeleted));
	
    fetch("http://localhost/php-react/delete-blog.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: theID }),
    })
      .then((res) => {		  
		   
        return res.json();
      })
      .then((data) => {
		   
        if (data.success) {
          setBlogs(blogDeleted);
          if (blogs.length === 1) {
            setBlogLength(0);
          }
		  
		  alert(data.msg);
		  
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //	console.log("blog after"+ JSON.stringify(blogs));

  return {
    users,
	blogs,
	userViewData,
	blogLike,
	blogDislike,
    editMode,
	blogEditMode,
    cancelEdit,
    updateUser,
	updateBlog,
    insertUser,
	insertBlog,
	loginUser,
    deleteUser,
	deleteBlog,
	blogLength,
    userLength,
	changeUserStatus,
	changeBlogStatus,
	viewUserDetails
  };
};