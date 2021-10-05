import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const NGO_Auth = () => {

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [redirect, setRedirect] = useState(""); 

  const onLoginHandler = () => {
    const data = {
        email: email,
        password: password,
      };
  
      console.log(data);
  
      axios
        .post("https://whistler-backend.herokuapp.com/admin/login", data)
        .then((res) => {
         console.log(res);
         setRedirect(true);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (

    <div>

        {redirect ? <Redirect to="/admin" /> : null}

        <div>ADMIN</div>
        <input type="text" placeholder="N.G.O. Email"
            onChange={(event) => setEmail(event.target.value)}/>

        <input type="text" placeholder="N.G.O. Password"
            onChange={(event) => setPassword(event.target.value)}/>

        <button onClick={onLoginHandler}>Login</button>
    </div>
  );
};

export default Admin_Auth;