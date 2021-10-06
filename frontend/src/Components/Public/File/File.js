import React, { useState } from "react";
import axios from "axios";
import web3 from '../../../ethereum/web3';
import Whistler from '../../../ethereum/whistler'
import { Redirect } from "react-router-dom";

const File = (props) => {

    const [id, setId] = useState(""); 
    const [desc, setDesc] = useState(""); 

    const onComplainHandler = async () => {

      console.log("aaa");

     

    }

  return (

    <div>

        <input type="text" placeholder="id"
         onChange={(event) => setId(event.target.value)}/>

        <input type="text" placeholder="date"
         onChange={(event) => setDesc(event.target.value)}/>
       
        <button onClick={onComplainHandler}>SUBMIT</button>

    </div>
  );
};

export default File;