import React from "react";
import flower from "../components/assets/flowers.png"
import beach from "../components/assets/beach.jpg"
import cafe from "../components/assets/cafe.jpeg"
import couple from "../components/assets/couple.jpg"
import date from "../components/assets/date.jpg"
import daten from "../components/assets/daten.jpeg"
import datenight from "../components/assets/datenight.jpeg"
import dinner from "../components/assets/dinner.jpeg"


const Home = () => {
  return (
    <div>
      <div className="title">
        <h1>HAPPY</h1>
        <h2 className="rotatingText-adjective">Life</h2>
        <h2 className="rotatingText-adjective">You</h2>
        <h2 className="rotatingText-adjective">Wife</h2>
      </div>

      <div className="pitch">
        {" "}
        It's hard to be busy <span className="emphasized">and</span> thoughtful.
        Let us make it easy.
      </div>

      <img className="banner" src={daten} alt="" />

      <div className="facts">
        <div className="fact-container">
          <div className="fact-title">Flowers</div>
          <div className="fact-info">
            Fresh, custom bouquets hand delivered to your door
          </div>
        </div>
        <div className="fact-container">
          <div className="fact-title">Reservations</div>
          <div className="fact-info">
            Made on your behalf at the most romantic hubs in your area
          </div>
        </div>
        <div className="fact-container">
          <div className="fact-title">Gifts</div>
          <div className="fact-info">
            The cherry on top for your holiday celebration or special occasion
          </div>
        </div>
      </div>
      <div>
        <a href="#">Learn More </a>
      </div>

      <div className="two-img">
      <img className="img2" src={flower} alt="" />
        <img className="img2" src={dinner} alt="" />
      </div>

      <div className="plans">
        <div className="plan-container">
          <div className="fact-title">Platinum Plan</div>
          <div className="fact-info">
            <ul>
              <li>Flower Delivery</li>
              <li>Monthly Consultation</li>
              <li>Customized Gifts</li>
              <li>Planned Dates</li>
              <li>Dinner Reservations</li>
              <li>Love Note Assistant</li>
            </ul>

            <p>Starting at $99/month</p>

            <a className="buy" href="/auth">
              Buy Plan
            </a>
          </div>
        </div>
        <div className="plan-container">
          <div className="fact-title">Gold Plan</div>
          <div className="fact-info">
            <ul>
              <li>Flower Delivery</li>
              <li>Planned Dates</li>
              <li>Dinner Reservations</li>
              <li>Love Note Assistant</li>
            </ul>
            <p>Starting at $69/month</p>

            <a className="buy" href="/auth">
              Buy Plan
            </a>
          </div>
        </div>
        <div className="plan-container">
          <div className="fact-title">Silver Plan</div>
          <div className="fact-info">
            <ul>
              <li>Flower Delivery</li>
              <li>Planned Dates</li>
            </ul>
            <p>Starting at $29/month</p>

            <a className="buy" href="/auth">
              Buy Plan
            </a>
          </div>
        </div>
      </div>

      <img className="couple" src={couple} alt="" />
      <div className="two-img">
        <img className="img-90" src={cafe} alt="" />
        <img className="img-90 beach" src={beach} alt="" />
      </div>
    </div>
  );
};

export default Home
