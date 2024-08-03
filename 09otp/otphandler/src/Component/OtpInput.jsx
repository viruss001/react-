import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onotpSubmit = () => {} }) => {
  const [otp, setotp] = useState(new Array(length).fill("")); //intial otp that ia array with null value

  //   console.log(otp);
  const inputRef = useRef([]);
  const handlechange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setotp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onotpSubmit(combinedOtp);
    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };
  //   const handleClick = (index) => {};
  const handlekey = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRef.current[index - 1].focus();
    }
  };
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            ref={(input) => (inputRef.current[index] = input)}
            value={value}
            onChange={(e) => handlechange(index, e)} //to handle change
            // onClick={() => handleClick(index)} //to handle click
            onKeyDown={(e) => handlekey(index, e)} //to handle when key is press example move to next input feild
            className="otpInput"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
