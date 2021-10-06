import React, { useState } from "react";
import axios from "axios";
import web3 from '../../../ethereum/web3';
import Whistler from '../../../ethereum/whistler'
import { Redirect } from "react-router-dom";

const Inspect = (props) => {

    const [chemical, setChemical] = useState(""); 
    const [quantity, setQuantity] = useState(""); 
    const [remarks, setRemarks] = useState([]); 
    const [Inspector, setInspector] = useState([]); 

    const onInspectHandler = async () => {

        const accounts = await web3.eth.getAccounts();

        console.log(accounts[0]);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

      await Whistler.methods
      .inspect(localStorage.getItem("assigned"), chemical, quantity,
                    today, localStorage.getItem("name"), true, remarks, Inspector)
      .send({
        from: accounts[0],
      });

    }

  return (

    <div>

        <input type="text" placeholder="chemical name"
         onChange={(event) => setChemical(event.target.value)}/>

        <input type="text" placeholder="quantity" 
        onChange={(event) => setQuantity(event.target.value)}/>

        <textarea placeholder="remarks"
        onChange={(event) => setRemarks(event.target.value)}></textarea>

        <input type="text" placeholder="Inspector Name" 
        onChange={(event) => setInspector(event.target.value)}/>

        <button onClick={onInspectHandler}>SUBMIT</button>

    </div>
  );
};

export default Inspect;