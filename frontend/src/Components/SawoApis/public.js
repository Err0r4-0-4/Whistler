import React, { useState } from "react";
import SawoLogin from 'sawo-react'
import { Redirect } from "react-router-dom";

const LoginPage = () => {

    const [redirect, setRedirect] = useState("");

    function sawoLoginCallback(payload) {
        console.log(payload.identifier);
        localStorage.setItem("phone", payload.identifier);
        localStorage.setItem("permissions", "public");
        window.location.reload();
        setRedirect(true);
        console.log("....");
    }
    
    const sawoConfig = {
        onSuccess: sawoLoginCallback ,//required,
        identifierType: 'phone_number_sms' ,//required, must be one of: 'email', 'phone_number_sms',
        apiKey: '7e825ffb-065c-48c0-ac08-0a9cd9644154' ,// required, get it from sawo dev.sawolabs.com,
        containerHeight: '230px', // the login container height, default is 230px
    }

    return (
        <div>
            {redirect ? <Redirect to="/user/home" /> : null}
            <SawoLogin config={sawoConfig}/>
        </div>
    )
}

export default LoginPage;