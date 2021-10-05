import React, { useEffect } from 'react'
import SawoLogin from 'sawo-react'

const LoginPage = () => {

    function sawoLoginCallback(payload) {
        console.log(payload)
    }
    
    const sawoConfig = {
        onSuccess: sawoLoginCallback ,//required,
        identifierType: 'phone_number_sms' ,//required, must be one of: 'email', 'phone_number_sms',
        apiKey: '7e825ffb-065c-48c0-ac08-0a9cd9644154' ,// required, get it from sawo dev.sawolabs.com,
        containerHeight: '230px', // the login container height, default is 230px
    }

    return (
        <div>
            <SawoLogin config={sawoConfig}/>
        </div>
    )
}

export default LoginPage;