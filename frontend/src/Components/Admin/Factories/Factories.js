import React, { useState, useEffect } from "react";
import Factory from "../../Cards/Factory/Factory";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "./Factories.module.css";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
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
    <div className={styles.flex}>
      {factories.map((factory) => (
        <Factory
          name={factory.name}
          email={factory.email}
          id={factory.factoryId}
        />
      ))}
    </div>
  );

  return (
    <div className={styles.pages}>
      <Header />
      <div className={styles.box}>
        <div className={styles.bar}>
          <p>FACTORIES</p>
        </div>
        {factoriesList}
      </div>
      <Footer />
    </div>
  );
};

export default Factories;