import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import MenuBar from "./Components/MenuBar/MenuBar";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="menubar" element={<MenuBar />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
