import React, { useState } from "react";
import { assets } from "../assets/assets";

const RecruiterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);

  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);
  return (
    <div>
      <form action="">
        <h1>Recruiter {state}</h1>
        <p>Welcome back! Please sign in to continue</p>
        <>
          <div>
            <img src={assets.person_icon} alt="" />
            <input onChange={e => setName(e.target.value)} type="text" placeholder=" Company  name here" required />
          </div>
          <div>
            <img src={assets.email_icon} alt="" />
            <input  type="text" placeholder="Email address here" required />
          </div>
          <div>
            <img src={assets.pas} alt="" />
          </div>
        </>
      </form>
    </div>
  );
};

export default RecruiterLogin;
