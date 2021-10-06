import React, { useState, useEffect } from "react";
import Factory from "../../Cards/Factory/Factory";
import axios from "axios";
import web3 from '../../../ethereum/web3';
import Whistler from '../../../ethereum/whistler'
import { Redirect } from "react-router-dom";

const Reports = () => {

  const [reports, setReports] = useState([]); 
  const [count, setCount] = useState([]); 

  useEffect(async () => {

    const accounts = await web3.eth.getAccounts();

    try {

      await axios
        .post("https://whistler-backend.herokuapp.com/factory/count")
        .then(async (res) => {

         setCount(res.data.count);
         for (let i = 1; i <= res.data.count; i++) {

            let c = await Whistler.methods
            .reports_count(i)
            .call({
              from: accounts[0],
            });

            console.log(c);

            for (let j = 0; j < c; j++){

                let report = await Whistler.methods
                .reports_map(i, j)
                .call({
                from: accounts[0],
                });

                console.log(report);
            }
        }
        })
        .catch((err) => {
          console.log(err);
        });

        // console.log(count);

        for (let i = 1; i <= count; i++) {

            let c = await Whistler.methods
            .reports_count(i)
            .call({
              from: accounts[0],
            });

            console.log(c);

            for (let j = 0; j < c; j++){

                let report = await Whistler.methods
                .reports_map(i, j)
                .call({
                from: accounts[0],
                });

                console.log(report);
            }
        }
    } catch (e) {
      console.log(e);
    }
  }, []);

 

  return (

    <div>

       
        REPORTS
       
    </div>
  );
};

export default Reports;