import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Complain = (props) => {

  return (

    <div>

      <div>{props.desc}</div>
      <div>{props.date}</div>
      <div>{props.phone}</div>
      <div>{props.hash}</div>

    </div>
  );
};

export default Complain;