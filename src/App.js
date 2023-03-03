import "./App.css";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import Orders from "./components/Orders";
import Shop from "./components/Shop";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  const [orderItems, setOrderItems] = useState([]);
  
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/shop"
            element={
              <Shop orderItems={orderItems} setOrderItems={setOrderItems} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/orders"
            element={
              <Orders orderItems={orderItems} setOrderItems={setOrderItems}/>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
