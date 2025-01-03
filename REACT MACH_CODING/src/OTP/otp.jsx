import "./otp.css";
import { useRef, useState } from "react";

const Otp = ({ num }) => {
  const [otp, setOtp] = useState(new Array(num).fill(""));
  //   const [err, setErr] = useState(null);
  const otpReference = useRef([]);

  function handleChange(val, i) {
    const newOtp = [...otp];
    newOtp[i] = val;
    setOtp(newOtp);
  }

  function handleFocus(e, i) {
    if (e.key == "Backspace" && e.target.value >= 0 && i > 0) {
      otpReference.current[i - 1].focus();
    } else if (e.key == "Enter" && e.target.value >= 0 && i < num - 1) {
      otpReference.current[i + 1].focus();
    }
  }

  return (
    <div>
      {otp.map((ele, ind) => (
        <input
          key={ind}
          className="otpbox"
          type="number"
          maxLength={1}
          onChange={(e) => {
            handleChange(e.target.value, ind);
          }}
          onKeyUp={(e) => {
            handleFocus(e, ind);
          }}
          value={ele}
          ref={(reference) => {
            otpReference.current[ind] = reference;
          }}
        />
      ))}
    </div>
  );
};

export default Otp;
