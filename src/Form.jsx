import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState({}); // store edits for multiple users

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users/all");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users/register", formData);
      setFormData({ name: "", email: "", password: "" });
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/user/${id}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/users/user/${id}`, editData[id]);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditChange = (id, field, value) => {
    setEditData({
      ...editData,
      [id]: {
        ...editData[id],
        [field]: value,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Users List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <input
                  type="text"
                  value={editData[user._id]?.name ?? user.name}
                  onChange={(e) =>
                    handleEditChange(user._id, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="email"
                  value={editData[user._id]?.email ?? user.email}
                  onChange={(e) =>
                    handleEditChange(user._id, "email", e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
                <button onClick={() => handleUpdate(user._id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
