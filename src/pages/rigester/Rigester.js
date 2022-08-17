import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";
import Logout from '../../components/Logout/Logout'
import style from"./rigs.module.css";
const Rigester = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function userReg() {
    if (!email) {
      console.log("your email not found");
    } else if (!password) {
      console.log("your password is invalid");
    } else {
      try {
        let response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className={style.container}>
      <h2>Register with us</h2>

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
      <button onClick={userReg}>Submit</button>
     
    </div>
  );
};

export default Rigester;

{
  /* <label htmlFor="Email">
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
      </label>
      <br />
      <label htmlFor="Password">
        <input
          type="password"
          id="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />
      </label>
      <br />
      <button onClick={userReg}>Rigester</button>
    </div> */
}
