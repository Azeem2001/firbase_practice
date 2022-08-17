import React from "react";
import { auth, signOut } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  let navigate = useNavigate();
  async function userLogout() {
    try {
      await signOut(auth);
      navigate("/login");
      console.log("user have been log out");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={userLogout}>Logout</button>
    </div>
  );
};

export default Logout;
