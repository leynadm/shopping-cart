import "./App.css";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import Orders from "./components/Orders";
import Shop from "./components/Shop"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return( 
  <Router>
    <div className="App">
    <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </div>
  </Router>
  )
}

export default App;
