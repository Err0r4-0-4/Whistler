import React, { useState, useEffect } from "react";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import Whistler from "../../../ethereum/whistler";
import { Redirect } from "react-router-dom";

const File = (props) => {
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);
  const [date, setDate] = useState([]);

  const onComplainHandler = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log(id);
    console.log(desc);
    console.log( localStorage.getItem("phone"));
    
    await Whistler.methods
        .file_complain(id, desc, date, "aaaaaaaaaaaaaaaa", localStorage.getItem("phone"))
        .send({
            from: accounts[0],
        });
  };

  useEffect(async () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    setDate(today);

    try {
      let factories = await axios.post(
        "https://whistler-backend.herokuapp.com/factory/getFactory"
      );
      console.log(factories);
      let renderList = factories.data.message.map((factory) => (
        <option key={factory._id} value={factory.factoryId}>
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
    setId(e.target.value);
  };



  return (
    <div>

      <select onChange={dropdownHandler}>
        <option disabled selected value>
          -- select Factory --
        </option>
        {list}
      </select>

      <textarea placeholder="Description"
        onChange={(event) => setDesc(event.target.value)}></textarea>

      <button onClick={onComplainHandler}>SUBMIT</button>
    </div>
  );
};

export default File;
