import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {

  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs  =useRef([]);
 
  useEffect(()=>{
    if(inputRefs.current[0]){
      inputRefs.current[0].focus();
    }
  },[])

  //handle change function 
  const handleChange = (index,e) => {
    const value = e.target.value;

    if(isNaN(value))return;

    const newOtp  = [...otp];
    newOtp[index] = value.substring(value.length-1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if(combinedOtp.length== length) onOtpSubmit(combinedOtp);
    
    if(value && index <length-1 && inputRefs.current[index+1]){
      inputRefs.current[index+1].focus();
    }

  }

  //handle click function
  const handleClick = (index) => {
    inputRefs.current[index].seteSelectionRange(1,1);
  }

  //handle key down function 
  const handleKeyDown = (index,e) => {
    //move focus to previous input fields
    if(e.key ==="Backspace" && !otp[index] && index >0 && inputRefs.current[index-1]){
      inputRefs.current[index-1].focus();
    }
  }

  return (
    <div>

      {
        otp.map((value, index) => (
          <input
            value={value}
            type='text'
            key={index}
            ref={(input) =>(inputRefs.current[index]= input)}
            onClick={()=>handleClick(index)}
            onKeyDown={(e)=>handleKeyDown(index,e)}
            onChange={(e) =>handleChange(index,e)}
            className='otp-input' 
            />
        ))
      }
    </div>
  )
}

export default OtpInput