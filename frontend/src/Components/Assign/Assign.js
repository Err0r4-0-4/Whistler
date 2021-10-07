import React, { useState, useEffect } from "react";
import axios from "axios";
import web3 from "../../ethereum/web3";
import { Redirect } from "react-router-dom";
import Random from "../../ethereum/random";
const Assign = (props) => {
  const [date, setDate] = useState([]);

  useEffect(async () => {
    console.log("randomNumber");
    const accounts = await web3.eth.getAccounts();
    console.log(Random.methods);
    console.log(accounts[0]);
    let randomNumber = await Random.methods.getRandomNumber().send({
      from: accounts[0],
    });
    console.log(randomNumber);
    setTimeout(async () => {
      let random = await Random.methods.randomResult().call();
      console.log(random);
    }, 60000);
  }, []);

  const onAssignHandler = () => {
    const data = {
      date: date,
      random: 1,
      factoryId: 1,
    };

    console.log(data);

    axios
      .post("https://whistler-backend.herokuapp.com/admin/assignNgo", data)
      .then((res) => {
        console.log(res);
        //   setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="date"
        onChange={(event) => setDate(event.target.value)}
      />

      <button onClick={onAssignHandler}>Assign</button>
    </div>
  );
};

export default Assign;
