import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Report = (props) => {

    // const onScheduleHandler = () => {
    //     console.log(props.id);
    // }

  return (

    <div>

        <div>{props.chemical}</div>
        <div>{props.date}</div>
        <div>{props.inspector}</div>
        <div>{props.ngo}</div>
        <div>{props.quantity}</div>
        <div>{props.remarks}</div>
        <div>{props.treated}</div>
        <br/>

    </div>
  );
};

export default Report;