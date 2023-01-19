import React, { useState, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const AuthScreen = () => {
  const [register, setRegister] = useState(false);
  const [radioValue, setRadioValue] = useState()
  const emailRef = useRef();
  const passRef = useRef();
  const planIdRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const snameRef = useRef();
  const anniversaryRef = useRef();
  const sbdayRef = useRef();
  const streetRef = useRef();  
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
 
  

  const dispatch = useDispatch();

  const toggle = () => setRegister(!register)
console.log(radioValue)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(radioValue)
    const body = register? {
      email: emailRef.current.value,
      password: passRef.current.value,
      f_name: fnameRef.current.value,
      l_name: lnameRef.current.value,
      spouse_name: snameRef.current.value,
      spouse_bday: sbdayRef.current.value,
      anniversary: anniversaryRef.current.value,
      address: streetRef.current.value+' '+cityRef.current.value+' '+stateRef.current.value +' '+zipRef.current.value ,
      planId: radioValue

    } : {
        email:emailRef.current.value,
        password: passRef.current.value
    };

    axios
      .post(register ? "/api/register" : "/api/login", body)
      .then((res) => {
        dispatch({type: 'LOGIN', payload: res.data})
        console.log(res.data)})
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="main-page">
      <h1 className="auth-title">{register ? "Register" : "Login"}</h1>
      <br />
      <br />
      <br />
      <br />
      <button onClick={toggle}> {!register ? "Need to Sign Up" : "Already have an account"}?</button>

      <br /><br /><br />
      
      <form  className="register-container" onSubmit={handleSubmit}>
        <div>
        <label for="Email">Email: </label><input type="text" placeholder="Email" name="Email" ref={emailRef} />
        <div>
        <label for="Email">Password: </label><input type="password" placeholder="Password" ref={passRef} />
        </div>
        
        
        </div>
      
      <div>
        {register ? <div className="choose"><h4>Choose Plan:</h4>
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
      
                <p>$99/month</p>
              <input type="radio" name="plan" value="1" ref={planIdRef} checked={radioValue==="1"} onChange={(e) => {setRadioValue("1")}}/>

              </div>
            </div>
            
            <div className="plan-container">
              <div className="fact-title">Gold Plan</div>
              <div className="fact-info">
                <ul>
                  <li>Flower Delivery</li>
                  <li>Planned Dates</li>
                  <li>Dinner Reservations</li>
                  <li>Letter Assistant</li>
                </ul>
                <p>$69/month</p>
                <input type="radio" name="plan" value="2" ref={planIdRef} checked={radioValue==="2"} onChange={(e) => {setRadioValue("2")}}/>
      
                
              </div>
            </div>

            <div className="plan-container">
              <div className="fact-title">Silver Plan</div>
              <div className="fact-info">
                <ul>
                  <li>Flower Delivery</li>
                  <li>Planned Dates</li>
                </ul>
                <p>$29/month</p>
                <input type="radio" name="plan" value="3" ref={planIdRef} checked={radioValue==="3"} onChange={(e) => {setRadioValue("3")}} />

              </div>
            </div>
          </div>

     {/* **** */}
     <div>
    <div>
            <label for="fname">First Name: </label>
            <input type="text" name="fname" id="fname" ref={fnameRef} />
          </div>
    <div>
            <label for="lname">Last Name: </label>
            <input type="text" name="lname" id="lname" ref={lnameRef} />
          </div>
    <div>
            <label for="spouse_name">Spouse's Name: </label>
            <input type="text" name="spouse_name" id="sname" ref={snameRef}/>
          </div>
          <div>
            <label for="anniversary">Anniversary: </label>
            <input type="date" name="anniversary" id="anniversary" ref={anniversaryRef} />
          </div>
          <div>
            <label for="bday">Spouse's Birthday: </label>
            <input type="date" name="bday" id="bday" ref={sbdayRef} />
          </div>
          <br />
          <div className="delivery"> Delivery Address:
            <div>
            <label for="street">Street: </label>
            <input type="text" name="street" id="street" ref={streetRef} />
          </div>
            <div>
            <label for="city">City: </label>
            <input type="text" name="city" id="city" ref={cityRef} />
          </div>
            <div>
            <label for="state">State: </label>
            <input type="text" name="city" id="city" ref={stateRef} />
          </div>
            <div>
            <label for="zip ">Zipcode: </label>
            <input type="text" name="zip" id="zip" ref={zipRef} />
          </div>
          </div>
        </div>
     {/* ****** */}

        </div> : null}
      </div>

      
     
        
        

        <div>
          <br />
        <button>{register ? "Register" : "Login"}</button></div>
        </form>
        
      </div>
    

      
  );
};

export default AuthScreen;
