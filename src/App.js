import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/GetUser";
import AddUser from "./components/AddUser";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "./components/Loader";
import { API_URL } from "./components/api";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        const fetchedUsers = response.data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          department: user.company?.name || "N/A",
        }));
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users!", { position: "top-right" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="appContainer">
        <Loader />
      </div>
    );
  }

  return (
    <Router>
      <div className="appContainer">
        <h1 className="appHeader">User Management Dashboard</h1>
        <Routes>
          <Route
            path="/"
            element={<User users={users} setUsers={setUsers} />}
          />
          <Route
            path="/add"
            element={<AddUser users={users} setUsers={setUsers} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
