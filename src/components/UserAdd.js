import { useContext, useState } from "react";
import { AppContext } from "../Context";

const UserAdd = () => {
  const {
    users,
    userLength,
    editMode,
    cancelEdit,
    updateUser,
    deleteUser,
  } = useContext(AppContext);

  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateUser(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value, 
    });
  };

  const enableEdit = (id, user_name, user_email, mobile, city, status) => {
    setNewData({ id, user_name, user_email , mobile, city, status});
    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };

  return !userLength ? (
    <p>{userLength === null ? "Loading..." : "Please insert some users."}</p>
  ) : (
  <div style={{ height: '600px' }} >
    <table>
      <thead>
        <tr>
		<th>User Name</th>
          <th>Name</th>
          <th>Email</th>		  
		  <th>Mobile</th>		  
		  <th>City</th>
		  <th>User Type</th>
		  <th>Created Time</th>
		  <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, user_name, name, user_email, mobile, city, user_type, dob, status, isEditing }) => {
          return isEditing === true ? (
            <tr key={id}>
              <td>
                <input
                  type="text"
                  defaultValue={user_name}
                  onChange={(e) => updateNewData(e, "user_name")}
                />
              </td>
			  <td>
                <input
                  type="text"
                  defaultValue={name}
                  onChange={(e) => updateNewData(e, "name")}
                />
              </td>
              <td>
                <input
                  type="email"
                  defaultValue={user_email}
                  onChange={(e) => updateNewData(e, "user_email")}
                />
              </td>			  
			   <td>
                <input
                  type="text"
                  defaultValue={mobile}
                  onChange={(e) => updateNewData(e, "mobile")}
                />
              </td>
			   <td>
                <input
                  type="text"
                  defaultValue={city}
                  onChange={(e) => updateNewData(e, "city")}
                />
              </td>
			  <td>
                <input
                  type="text"
                  defaultValue={user_type}
                  onChange={(e) => updateNewData(e, "user_type")}
                />
              </td>
			   <td>
                <input
                  type="text"
                  defaultValue={dob}
                  onChange={(e) => updateNewData(e, "dob")}
                />
              </td>
			   <td>
                <input
                  type="text"
                  defaultValue={status}
                  onChange={(e) => updateNewData(e, "status")}
                />
              </td>
              <td>
                <button className="btn green-btn" onClick={() => saveBtn()}>
                  Save
                </button>
                <button
                  className="btn default-btn"
                  onClick={() => cancelEdit(id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={id}>
              <td>{user_name}</td>
			  <td>{name}</td>
              <td>{user_email}</td>			 
			  <td>{mobile}</td>
			  <td>{city}</td>
			   <td>{user_type}</td>
			    <td>{dob}</td>
			  <td>{status}</td>
              <td>
                <button
                  className="btn default-btn"
                  onClick={() => enableEdit(id, user_name, user_email, mobile, city, status)}
                >
                  Edit
                </button>
                <button
                  className="btn red-btn"
                  onClick={() => deleteConfirm(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
	</div>
  );
};

export default UserAdd;