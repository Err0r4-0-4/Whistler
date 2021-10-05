import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Factories = () => {

  const [factories, setFactories] = useState([]); 
  const [redirect, setRedirect] = useState(""); 

  useEffect(async () => {
    try {
      axios
        .post("http://localhost:9000/factory/getfactory")
        .then((res) => {
         console.log(res.data.message);
         setFactories(res.data.message);
         setRedirect(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const factoriesList = (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {addresses.map((address) => (
        <FIR_detail darkTheme={darkTheme} address={address} />
      ))}
    </div>
  );

  return (

    <div>

        FACTORIES
       
    </div>
  );
};

export default Factories;