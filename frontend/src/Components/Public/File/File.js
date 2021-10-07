import React, { useState, useEffect } from "react";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import Whistler from "../../../ethereum/whistler";
import { Redirect } from "react-router-dom";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import styles from "./File.module.css";
import img from "../../Images/user.png";

const File = (props) => {
  const [ran, setran] = useState(false);
  const func1 = () => {
    setran(!ran);
  };
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);
  const [date, setDate] = useState([]);

  const onComplainHandler = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log(id);
    console.log(desc);
    console.log(localStorage.getItem("phone"));

    await Whistler.methods
      .file_complain(
        id,
        desc,
        date,
        "aaaaaaaaaaaaaaaa",
        localStorage.getItem("phone")
      )
      .send({
        from: accounts[0],
      });
  };

  useEffect(async () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

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
    <div className={styles.file}>
      <Header />

      <div className={styles.box}>
        <div className={styles.imgback}>
          <img src={img} className={styles.img} />
        </div>
        <div className={styles.tag}>Add new Complaint</div>
        {ran ? (
          <select onChange={dropdownHandler} className={styles.sel} disabled>
            <option>SELECT FACTORY</option>
          </select>
        ) : (
          <select onChange={dropdownHandler} className={styles.sel}>
            <option disabled selected value>
              SELECT FACTORY
            </option>
            {list}
          </select>
        )}

        <div className={styles.flex}>
          <input type="checkbox" onClick={func1} />
          <p>Factory not in list</p>
        </div>
        <input
          type="text"
          placeholder="Factory Name"
          className={ran ? styles.inp : styles.dis}
        />

        <input
          type="text"
          placeholder="Factory Email"
          className={ran ? styles.inp : styles.dis}
        />
        <textarea
          placeholder="Description"
          onChange={(event) => setDesc(event.target.value)}
          className={styles.txt}
        ></textarea>

        <button className={styles.btn2}>UPLOAD</button>
        <button onClick={onComplainHandler} className={styles.btn}>
          SUBMIT
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default File;
