import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Add = () => {

  const [factoryName, setFactoryName] = useState(""); 
  const [factoryEmail, setfactoryEmail] = useState(""); 

  const [NGOName, setNGOName] = useState(""); 
  const [NGOEmail, setNGOEmail] = useState(""); 
 

  const onCreateFactory = () => {
    const data = {
        name: factoryName,
        email: factoryEmail,
      };
  
      console.log(data);
  
      axios
        .post("https://whistler-backend.herokuapp.com/factory/register", data)
        .then((res) => {
         console.log(res);
        //  setRedirect(true);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const onCreateNGO = () => {
    const data = {
        name: NGOName,
        email: NGOEmail,
      };
  
      console.log(data);
  
      axios
        .post("https://whistler-backend.herokuapp.com/ngo/register", data)
        .then((res) => {
         console.log(res);
        //  setRedirect(true);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (

    <div>

        <div>
            <div>Add Factory</div>
            <input type="text" placeholder="Factory Name"
             onChange={(event) => setFactoryName(event.target.value)}/>

            <input type="text" placeholder="Factory Email"
             onChange={(event) => setfactoryEmail(event.target.value)}/>

            <button onClick={onCreateFactory}>Add Fatory</button>
        </div>

        <div>
            <div>Add N.G.O.</div>
            <input type="text" placeholder="N.G.O. Name"
             onChange={(event) => setNGOName(event.target.value)}/>

            <input type="text" placeholder="N.G.O. Email"
             onChange={(event) => setNGOEmail(event.target.value)}/>

            <button onClick={onCreateFactory}>Add N.G.O.</button>
        </div>
       
    </div>
  );
};

export default Add;