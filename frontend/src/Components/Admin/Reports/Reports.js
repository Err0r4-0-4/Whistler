import React, { useState, useEffect } from "react";
import Factory from "../../Cards/Factory/Factory";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import Whistler from "../../../ethereum/whistler";
import Report from "../../Cards/Report/Report";
import { Redirect } from "react-router-dom";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [reports1, setReports1] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(async () => {
    const accounts = await web3.eth.getAccounts();

    try {
      let reportsArray = [];

      await axios
        .post("https://whistler-backend.herokuapp.com/factory/count")
        .then(async (res) => {
          setCount(res.data.count);
          for (let i = 1; i <= res.data.count; i++) {
            let c = await Whistler.methods.reports_count(i).call({
              from: accounts[0],
            });

            console.log(c);

            for (let j = 0; j < c; j++) {
              let report = await Whistler.methods.reports_map(i, j).call({
                from: accounts[0],
              });

              reportsArray.push(report);

              console.log(report);
            }
          }

          setReports(reportsArray);
          setReports1(reportsArray);
        })
        .catch((err) => {
          console.log(err);
        });

      for (let i = 1; i <= count; i++) {
        let c = await Whistler.methods.reports_count(i).call({
          from: accounts[0],
        });

        console.log(c);

        for (let j = 0; j < c; j++) {
          let report = await Whistler.methods.reports_map(i, j).call({
            from: accounts[0],
          });

          console.log(report);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const searchHandler = (e) => {
    let data = reports;
    console.log(data);
    let data2 = data.filter((factory) =>
      factory.chemical_name.includes(e.target.value)
    );
    console.log(e.target.value);
    setReports1(data2);
  };

  const reportsList = (
    <div>
      <input type="search" onChange={searchHandler} />
      {reports1.map((report) => (
        <Report
          chemical={report.chemical_name}
          date={report.date}
          inspector={report.inspector}
          ngo={report.ngo_name}
          quantity={report.quantity}
          remarks={report.remarks}
          treated={report.treated}
        />
      ))}
    </div>
  );

  return (
    <div>
      {reportsList}
      REPORTS
    </div>
  );
};

export default Reports;
