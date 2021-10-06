import React, { useState, useEffect } from "react";
import Factory from "../../Cards/Factory/Factory";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Factories = () => {

  const [factories, setFactories] = useState([]); 
  const [redirect, setRedirect] = useState(""); 

  useEffect(async () => {
    try {
      axios
        .post("https://whistler-backend.herokuapp.com/factory/getfactory")
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
    <div>
      {factories.map((factory) => (
        <Factory
        name={factory.name}
        email={factory.email}
        id={factory.factoryId}/>
      ))}
    </div>
  );

  return (

    <div>

        {factoriesList}
        FACTORIES
       
    </div>
  );
};

export default Factories;