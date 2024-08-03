import React, { useState } from "react";
import OtpInput from "./OtpInput";
function Phonenumber() {
  const [phonenumber, setphonenumber] = useState("");
  const [showotpinput, setshowotpinput] = useState(false);
  const handlephonenumber = (e) => {
    setphonenumber(e.target.value);
  };
  const submitotp = () => {
    //function for submit the otp passed as props
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (phonenumber.length < 10) {
      alert("invalid number");
      return;
    }
    //show otpfied
    setshowotpinput(true);
  };
  return (
    <div>
      {!showotpinput ? (
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={phonenumber}
            onChange={handlephonenumber}
            placeholder="enter your number"
          />
          <button type="submit">submit</button>
        </form>
      ) : (
        <div>
          <p>enter otp sent on {phonenumber}</p>
          <OtpInput length={4} onotpSubmit={submitotp} />
        </div>
      )}
    </div>
  );
}

export default Phonenumber;
