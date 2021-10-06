import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Assign = (props) => {

    const [date, setDate] = useState([]); 

    const onAssignHandler = () => {
        const data = {
            date: date,
            random: 1,
            factoryId: 1
          };
      
          console.log(data);
      
          axios
            .post("https://whistler-backend.herokuapp.com/admin/assignNgo", data)
            .then((res) => {
              console.log(res);
            //   setRedirect(true);
            })
            .catch((err) => {
              console.log(err);
            });
    }

  return (

    <div>

       <input type="text" placeholder="date"
            onChange={(event) => setDate(event.target.value)}/>

        <button onClick={onAssignHandler}>Assign</button>

    </div>
  );
};

export default Assign;