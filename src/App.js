import './App.css';
import Home from "./components/home"
import Contact from "./components/contact"
import Resume from "./components/resume/resume"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;