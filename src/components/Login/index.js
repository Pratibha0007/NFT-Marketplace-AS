import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../utils/firebase";
import { BG } from "../../utils/srcLinks";
import { checkValid } from "./login.validation";
import { setuser } from "./user.slice";

const Login = () => {
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [loginState, setLoginState] = useState(true);
  const [errormsg, setErrorMsg] = useState("");

  const toggleForm = () => {
    setErrorMsg(null);
    email.current.value = "";
    password.current.value = "";
    setLoginState(!loginState);
  };

  const handlelogin = () => {
    setErrorMsg(checkValid(email.current.value, password.current.value));
    if (errormsg) return;
    if (!loginState) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = userCredential.user;
            dispatch(
              setuser({ uid: uid, email: email, displayName: displayName })
            );
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrorMsg("Invalid user details");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrorMsg("Invalid user details");
        });
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ background: `url(${BG})` }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col bg-gray-700 bg-opacity-45 p-10 rounded-lg"
        style={{ width: "400px", height: "487px" }}
      >
        <h2 className="text-4xl font-bold text-white mb-5">Login</h2>
        {errormsg && (
          <p className=" text-sm text-red-500 font-semibold">{errormsg}</p>
        )}
        {!loginState && (
          <div className="mb-5 font-semibold text-left flex flex-col">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border-2 rounded-md px-3 py-2"
              ref={name}
              placeholder="Name"
            />
          </div>
        )}
        <div className="mb-5 font-semibold text-left flex flex-col">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border-2 rounded-md px-3 py-2"
            ref={email}
            placeholder="Email"
          />
        </div>
        <div className="mb-5 font-semibold text-left flex flex-col">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border-2 rounded-md px-3 py-2"
            ref={password}
            placeholder="Password"
          />
        </div>
        <div>
          <button
            id="sign-in-button"
            className="w-full text-white bg-black rounded-md py-2"
            onClick={handlelogin}
          >
            {loginState ? "Login" : "Sign Up"}
          </button>
        </div>
        <div className="mt-3">
          <span
            onClick={toggleForm}
            className="cursor-pointer text-white font-light text-sm text-left"
          >
            {loginState ? "New user? Sign Up" : "Already a user? Sign In"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
