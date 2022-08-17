import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [to,setto]=useState("/")
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
    <div>
      <label htmlFor="Email">
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
      <button onClick={userReg}>Login</button>
    </div>
  );
};
export default Login;
