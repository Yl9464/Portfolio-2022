import './App.css';
import Mainpage from "./components/mainpage"
import Contact from "./components/contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Mainpage />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;