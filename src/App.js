import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import CreateNFT from "./components/CreateNFT";
import Login from "./components/Login";
import { removeUser, setuser } from "./components/Login/user.slice";
import MyNFT from "./components/MyNFT";
import Overview from "./components/Overview";
import { auth } from "./utils/firebase";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(setuser({ uid: uid, email: email, displayName: displayName }));
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      {location.pathname !== "/login" && <Navbar />}
      <div className={location.pathname !== "/login" ? "pt-16" : ""}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Overview />} />
          <Route path="/createnft" element={<CreateNFT />} />
          <Route path="/mynft" element={<MyNFT />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
