
import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../../config/Firebase";
const Rigester = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function userReg() {
    if (!email) {
      console.log("your email not found");
    } else if (!password) {
      console.log("your password is invalid");
    } else {
      try {
       let response =  await createUserWithEmailAndPassword(auth, email, password);
       console.log(response)
           
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
      <button onClick={userReg}>Rigester</button>
    </div>
  );
};

export default Rigester;
