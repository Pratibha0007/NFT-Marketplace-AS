import { Route, Routes } from 'react-router-dom';
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Login from "./components/Login";
import Home from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
