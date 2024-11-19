import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { validateUserForm } from "../Validation";
import { API_URL } from "../api";
import "./index.css";

const AddUser = ({ users, setUsers }) => {
  const initialUserState = {
    firstname: "",
    lastname: "",
    email: "",
    department: "",
  };

  const [user, setUser] = useState(initialUserState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formErrors = validateUserForm(user);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error("Please fix the errors before submitting.", {
        position: "top-right",
      });
      return;
    }

    setLoading(true);

    try {
      await axios.post(API_URL, user);

      const highestId = users.reduce(
        (max, user) => (user.id > max ? user.id : max),
        0
      );

      const newId = highestId + 1;

      const newUser = {
        id: newId,
        name: `${user.firstname} ${user.lastname}`,
        email: user.email,
        department: user.department,
      };

      setUsers((prevUsers) => [...prevUsers, newUser]);
      toast.success("User added successfully!", { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user. Try again!", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="addUser">
          <Link to="/" className="btn btn-secondary">
            <i className="fa-solid fa-backward"></i> Back
          </Link>

          <h3>Add New User</h3>
          <form className="addUserForm" onSubmit={submitForm}>
            <div className="inputGroup">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                onChange={inputHandler}
                name="firstname"
                autoComplete="off"
                placeholder="Enter your First Name"
                value={user.firstname}
              />
              {errors.firstname && (
                <span className="error">{errors.firstname}</span>
              )}
            </div>
            <div className="inputGroup">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                onChange={inputHandler}
                name="lastname"
                autoComplete="off"
                placeholder="Enter your Last Name"
                value={user.lastname}
              />
              {errors.lastname && (
                <span className="error">{errors.lastname}</span>
              )}
            </div>
            <div className="inputGroup">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                onChange={inputHandler}
                name="email"
                autoComplete="off"
                placeholder="Enter your Email"
                value={user.email}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="inputGroup">
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                onChange={inputHandler}
                name="department"
                autoComplete="off"
                placeholder="Enter your department"
                value={user.department}
              />
              {errors.department && (
                <span className="error">{errors.department}</span>
              )}
            </div>
            <div className="inputGroup">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddUser;
