import React, { useState } from "react";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import Whistler from "../../../ethereum/whistler";
import { Redirect } from "react-router-dom";
import Headerngo from "../../../Header/Headerngo";
import img from "../../Images/user2.png";
import styles from "./Inspect.module.css";
import Spinner from "../../../Ui/Spinner/Spinner";

const Inspect = (props) => {
  const [chemical, setChemical] = useState("");
  const [quantity, setQuantity] = useState("");
  const [remarks, setRemarks] = useState([]);
  const [Inspector, setInspector] = useState([]);
  const [loading, setLoading] = useState(false);

  const onInspectHandler = async () => {

    setLoading(true);

    const accounts = await web3.eth.getAccounts();

    console.log(accounts[0]);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    try{
      await Whistler.methods
      .inspect(
        localStorage.getItem("assigned"),
        chemical,
        quantity,
        today,
        localStorage.getItem("name"),
        true,
        remarks,
        Inspector
      )
      .send({
        from: accounts[0],
      });
    }catch(e) {
      window.alert(e);
      setLoading(false);
    }
   
  };

  let form = (
    <div className={styles.box}>
      <div className={styles.tileup}>
        <div className={styles.bar}>{localStorage.getItem("name")}</div>

        <div className={styles.tile}>
          <img src={img} alt="user" className={styles.user} />

          <div className={styles.inner}>
            <div className={styles.one}>
              <p>Assigned Factory ID:</p>
              <div className={styles.date}>
                <div>{localStorage.getItem("Assigned Factory Id")}</div>
              </div>
            </div>
            <div className={styles.one}>
              <p>Assigned Factory Name:</p>
              <div className={styles.aadhar}>
                <div>TISCO</div>
              </div>
            </div>
            <div className={styles.one}>
              <p>Assigned On: </p>
              <div className={styles.group}>
                {localStorage.getItem("dateON")}
              </div>
            </div>
            <div className={styles.one}>
              <p>Inspection Date: </p>
              <div className={styles.group}>{localStorage.getItem("date")}</div>
            </div>
            <div onClick={props.assign} className={styles.btn}>
              SCHEDULE
            </div>
          </div>
        </div>
      </div>
      <div>{localStorage.getItem("name")}</div>

      <div>
        Assigned Factory ID: {localStorage.getItem("Assigned Factory Id")}
      </div>

      <div>Assigned Factory Name: TISCO</div>

      <div>Assigned On: {localStorage.getItem("dateON")}</div>

      <div>Inspection Date: {localStorage.getItem("date")}</div>

      <input
        type="text"
        placeholder="chemical name"
        onChange={(event) => setChemical(event.target.value)}
      />

      <input
        type="text"
        placeholder="quantity"
        onChange={(event) => setQuantity(event.target.value)}
      />

      <textarea
        placeholder="remarks"
        onChange={(event) => setRemarks(event.target.value)}
      ></textarea>

      <input
        type="text"
        placeholder="Inspector Name"
        onChange={(event) => setInspector(event.target.value)}
      />

      <button onClick={onInspectHandler}>SUBMIT</button>
    </div>
  );

  return (
    <div className={styles.page}>
      <Headerngo />

      {loading ? <Spinner/> : null}

      {console.log(localStorage.getItem("isAssigned"))}

      {localStorage.getItem("isAssigned") == "true" ? (
        form
      ) : (
        <div> NO Assignment </div>
      )}
    </div>
  );
};

export default Inspect;
