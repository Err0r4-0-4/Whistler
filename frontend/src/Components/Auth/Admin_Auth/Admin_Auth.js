import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Admin_Auth = () => {

  const [userName, setUserName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [redirect, setRedirect] = useState(""); 

  const onLoginHandler = () => {
    const data = {
        userName: userName,
        password: password,
      };
  
      console.log(data);
  
      axios
        .post("http://localhost:9000/admin/login", data)
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
        <input type="text" placeholder="User Name"
            onChange={(event) => setUserName(event.target.value)}/>

        <input type="text" placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}/>

        <button onClick={onLoginHandler}>Login</button>
    </div>
  );
};

export default Admin_Auth;