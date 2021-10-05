import React, { useEffect } from 'react'
import SawoLogin from 'sawo-react'

const LoginPage = () => {

    function sawoLoginCallback(payload) {
        console.log(payload)
        //backend register ngo api calling!!
    }
    
    const sawoConfig = {
        onSuccess: sawoLoginCallback ,//required,
        identifierType: 'email' ,//required, must be one of: 'email', 'phone_number_sms',
        apiKey: 'e41a2543-13c9-44c9-af13-80d31d46f2c7' ,// required, get it from sawo dev.sawolabs.com,
        containerHeight: '230px', // the login container height, default is 230px
    }

    return (
        <div>
            <SawoLogin config={sawoConfig}/>
        </div>
    )
}

export default LoginPage;