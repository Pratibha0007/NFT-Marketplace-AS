import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const appVerifier = window.recaptchaVerifier;

  useEffect(() => {
    // Ensure this runs only once
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            handleNumberSubmit();
          },
        },
        auth
      );
    }
  }, []);

  const handlePhoneInput = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleNumberSubmit = () => {
    if (phoneNumber.length === 10) {
      signInWithPhoneNumber(auth, `+91${phoneNumber}`, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          console.log(confirmationResult);
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.error("Error during sign-in with phone number", error);
        });
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <div>
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneInput}
        placeholder="Phone Number"
      />
      <button id="sign-in-button" onClick={handleNumberSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
