import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Factory = (props) => {

    const onScheduleHandler = () => {
        console.log(props.id);
    }

  return (

    <div>

        <div>{props.name}</div>
        <div>{props.email}</div>
        <div>{props.id}</div>

        <div onClick={onScheduleHandler}>
          SCHEDULE
        </div>

    </div>
  );
};

export default Factory;