import React, { useState, useEffect } from "react";
import Factory from "../../Cards/Factory/Factory";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import Whistler from "../../../ethereum/whistler";
import Complain from "../../Cards/Complain/Complain";
import { Redirect } from "react-router-dom";

const Complains = () => {
  const [complains, setComplains] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(async () => {

    const accounts = await web3.eth.getAccounts();

    let complainArray = [];

    try {

        let count = await Whistler.methods.complaint_count(localStorage.getItem("ngoId")).call({
            from: accounts[0],
          });

          console.log(count);

          for(let i=0;i<count;i++){
            let complain = await Whistler.methods.complaints_map(localStorage.getItem("ngoId"), i).call({
                                from: accounts[0],
                            });

            complainArray.push(complain);
          }

          setComplains(complainArray);

          console.log(complains)

      
    } catch (e) {
      console.log(e);
    }
  }, []);

  const complainsList = (
    <div>
      {complains.map((report) => (
        <Complain
            desc={report.description}
            hash={report.hash}
            phone={report.phone}
            date={report.date}
        />
      ))}
    </div>
  );

  return (
    <div>
      COMPLAINS
      {complainsList}
    </div>
  );
};

export default Complains;
