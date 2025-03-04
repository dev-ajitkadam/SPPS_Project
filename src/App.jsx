import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./Components/Home";
import StockNews from "./Components/News";
import Privacy from "./Components/Privacy";
import About from "./Components/About";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<StockNews />} />
          <Route path="/policy" element={<Privacy />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
