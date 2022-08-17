import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";
import style from "../rigester/rigs.module.css"

const Login = () => {
    let navigate = useNavigate()
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  async function userReg() {
    if (!email) {
      console.log("your email not found");
    } else if (!password) {
      console.log("your password is invalid");
    } else {
      try {
        let response = await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
        
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className={style.container}>
    <h2>Login with us</h2>

    <div className={style.form_control}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <small>Error message</small>
    </div>
    <div className={style.form_control}>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <small>Error message</small>
    </div>
    <button onClick={userReg}>login</button>
  </div>
  );
};
export default Login;
