import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Optimizer from "./pages/Optimizer";

function App() {
  return (
    <div className="App h-screen w-full bg-primarydark">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/optimizer" element={<Optimizer />} />
    </Routes>
    </div>
  )
}

export default App;
