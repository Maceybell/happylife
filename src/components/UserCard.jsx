import React from "react";

const UserCard = ({ user }) => {

    
    

  return (
    <div className="user-card">
      {user.admin !== true ? (
        <div>
        <p className="user-card-data">
          Name: {user.f_name} {user.l_name}
        </p>
        <p className="user-card-data">
            Email: {user.email}
        </p>
        <p className="user-card-data">
            Spouse: {user.spouse_name}
        </p>
        <p className="user-card-data">
            Anniversary: {user.anniversary}
        </p>
        <p className="user-card-data">
            Spouse's Birthday: {user.spouse_bday}
        </p>
        <p className="user-card-data">
            Delivery Address: {user.address}
        </p>
        <p className="user-card-data">
            Plan: {user.plan.type}
        </p>

        <p className="user-card-data">Services:</p>
        {user.plan.flowers === true? <p className="services">Flower Delivery</p>   : null}
        {user.plan.reservations === true? <p className="services">Reservations</p>   : null}
        {user.plan.gifts === true? <p className="services">Gifts</p>   : null}
        {user.plan.letter_assistant === true? <p className="services">Letter Assistant</p>   : null}
        {user.plan.planned_dates === true? <p className="services">Planned Dates</p>   : null}
        {user.plan.monthly_consults === true? <p className="services">Monthly Consults</p>   : null}
        </div>
      ) : null}
    </div>
  );
};

export default UserCard;
