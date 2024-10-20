import React, { useState } from 'react'
import OtpInput from "./Otp-input";

const PhoneOtpForm = () => {
    const [phonNumber, setPhoneNumber] = useState();
    const [showOtpField, setShowOtpField] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //phone number validation
        const regex = /[^0-9]/g

        if (phonNumber.length < 10 || regex.test(phonNumber)) {
            alert("Invalid Phone number!");
            return;
        }

        //call backend API 

        //show OTP field

        setShowOtpField(true)
    }

    const onOtpSubmit = (otp) => {
        console.log("login successfull!",otp);
    }

    return (
        <div>
            {!showOtpField ? <form onSubmit={() => { }}>
                <input
                    type='text'
                    value={phonNumber}
                    onChange={handlePhoneNumber}
                    placeholder='Enter you Phone number'
                />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form> : <div>
                <p>Enter otp sent to {phonNumber}</p>

                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            </div>}
        </div>
    )
}

export default PhoneOtpForm