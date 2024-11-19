import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import ReactPaginate from "react-paginate";
import UpdateUserModal from "../UpdateUserModal";
import { API_URL } from "../api";
import Loader from "../Loader";
import "./index.css";

const User = ({ users, setUsers }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const USERS_PER_PAGE = 5;
  const offset = currentPage * USERS_PER_PAGE;
  const currentUsers = users.slice(offset, offset + USERS_PER_PAGE);
  const pageCount = Math.ceil(users.length / USERS_PER_PAGE);

  const deleteUser = async (userId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!isConfirmed) {
      return;
    }

    setLoading(true);
    try {
      await axios.delete(`${API_URL}${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete user.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="userTable">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Link to="/add" className="btn btn-primary btn-add">
            Add User <i className="fa-solid fa-user-plus"></i>
          </Link>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => {
                const [firstName = "N/A", lastName = ""] =
                  user.name?.split(" ") || [];
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.department}</td>
                    <td className="actionButtons">
                      <button
                        onClick={() => openModal(user)}
                        className="btn btn-info btn-icon"
                      >
                        <i className="fa-solid fa-pen-to-square icon"></i>
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="btn btn-danger btn-icon"
                      >
                        <i className="fa-solid fa-trash icon"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            previousLinkClassName={currentPage === 0 ? "disabled" : ""}
            nextLinkClassName={currentPage === pageCount - 1 ? "disabled" : ""}
          />

          {isModalOpen && (
            <UpdateUserModal
              user={selectedUser}
              setUsers={setUsers}
              closeModal={closeModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default User;
