import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Admin = () => {

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

       
    </div>
  );
};

export default Admin;