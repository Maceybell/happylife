import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";


const AdminScreen = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .get("/api/allUsers")
      .then((res) => {
        console.log(res.data)
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData()
  }, []);



  const userDisplay = users.map((user, index) => {
    return <div className="user-display">  <UserCard user={user}/> </div> 
  })

  return <div className="main-page"><div className="welcome">Admin</div>
  <div className="user-container">{userDisplay}</div></div>;
};

export default AdminScreen;
