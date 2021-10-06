import React, { useState, useEffect } from "react";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import Whistler from "../../../ethereum/whistler";
import { Redirect } from "react-router-dom";

const File = (props) => {
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);

  const onComplainHandler = async () => {
    console.log("aaa");
  };

  useEffect(async () => {
    try {
      let factories = await axios.post(
        "https://whistler-backend.herokuapp.com/factory/getFactory"
      );
      console.log(factories);
      let renderList = factories.data.message.map((factory) => (
        <option key={factory.id} value={factory.factoryId}>
          {factory.name}
        </option>
      ));
      setList(renderList);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const dropdownHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <select onChange={dropdownHandler}>
        <option disabled>-- select Factory --</option>
        {list}
      </select>
      <input
        type="text"
        placeholder="id"
        onChange={(event) => setId(event.target.value)}
      />

      <input
        type="text"
        placeholder="date"
        onChange={(event) => setDesc(event.target.value)}
      />

      <button onClick={onComplainHandler}>SUBMIT</button>
    </div>
  );
};

export default File;
