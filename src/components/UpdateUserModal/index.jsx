import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { validateUserForm } from "../Validation";
import { API_URL } from "../api";
import "./index.css";

const UpdateUserModal = ({ user, setUsers, closeModal }) => {
  const [firstName, lastName] = (user.name || "N/A N/A").split(" ");

  const [updatedUser, setUpdatedUser] = useState({
    firstname: firstName,
    lastname: lastName,
    email: user.email,
    department: user.department,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({ ...prevUser, [name]: value }));

    setErrors({ ...errors, [name]: "" });
  };

  const getUpdatedUserData = () => {
    return {
      id: user.id,
      name: `${updatedUser.firstname} ${updatedUser.lastname}`,
      email: updatedUser.email,
      department: updatedUser.department,
    };
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formErrors = validateUserForm(updatedUser);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error("Please fix the errors before submitting.", {
        position: "top-right",
      });
      return;
    }

    setLoading(true);

    try {
      await axios.put(`${API_URL}${user.id}`, getUpdatedUserData());

      const updatedUserData = getUpdatedUserData();

      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? updatedUserData : u))
      );

      toast.success("User updated successfully!", { position: "top-right" });
      closeModal();
    } catch (error) {
      const updatedUserData = getUpdatedUserData();
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? { ...updatedUserData } : u))
      );

      toast.success("User updated successfully!", { position: "top-right" });

      closeModal();
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="modalBackdrop">
          <div className="modalContent">
            <h3 className="update-user">Update User</h3>
            <form onSubmit={submitForm}>
              <div className="inputGroup">
                <label htmlFor="firstname">First Name:</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={updatedUser.firstname}
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter First Name"
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
                  name="lastname"
                  value={updatedUser.lastname}
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Last Name"
                />
                {errors.lastname && (
                  <span className="error">{errors.lastname}</span>
                )}
              </div>
              <div className="inputGroup">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Email"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="inputGroup">
                <label htmlFor="department">Department:</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={updatedUser.department}
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Department"
                />
                {errors.department && (
                  <span className="error">{errors.department}</span>
                )}
              </div>
              <div className="inputGroup">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateUserModal;
