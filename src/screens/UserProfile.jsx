import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const userId = useSelector((state) => state.userId);
  // console.log(userId)
  const getData = () => {
    axios
      .get(`/api/thisUser/${userId}`)
      .then((res) => {
        setUserInfo(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(userInfo);
  
  


  return (
    <div className="profile-card">
        
      <h2 className="welcome">
        Welcome, {userInfo.f_name} 
      </h2>
      <div className="user-plan">
        
        <div className="user-profile">
          <div className="treat">  Here's how you're treating {userInfo.spouse_name} with the {" "}
          {userInfo.plan.type} plan. </div>
          <br />
          <br />
          <p className="plan-details">
            {userInfo.plan.flowers === true
              ? ` ${userInfo.spouse_name} is receiving a custom bouquet, hand delivered to your doorstep.`
              : null}
          </p>
          <br />
          <p className="plan-details">
            {userInfo.plan.gifts === true
              ? `You've got gifts for ${userInfo.spouse_name} scheduled to arrive for the following special occassions:`
              : null}
          </p>
          </div>
          <div className="plan-details">
            {userInfo.plan.gifts === true ? (
              <div>
                
                <p>Valentine's Day</p>
                <p>{userInfo.spouse_name}'s Birthday</p>
                <p>Your anniversary</p>
                </div>
              
            ) : null}
          </div>
          
          <p className="plan-details">
            {userInfo.plan.reservations === true
              ? `Reservations are being made for 2 of your area's hottest restaurants.`
              : null}
          </p>
          <br />
          <p className="plan-details">
            {userInfo.plan.planned_dates === true
              ? `You are receiving a catalog of planned dates in your area, including activities conveniently located near your dinner reservations.`
              : null}
          </p>
          <br />
          <p className="plan-details">
            {userInfo.plan.letter_assistant === true
              ? `You have a pending appointment with our letter assistant to draft a love note ${userInfo.spouse_name} will melt over.` 
              : null}
          </p>
          <br />
          <p className="plan-details">
            {userInfo.plan.monthly_consults=== true
              ? `You have access to our team to further customize your plan or provide additional assistance` 
              : null}
          </p>

        
      </div>
      </div>
    
  );
};

export default UserProfile;
