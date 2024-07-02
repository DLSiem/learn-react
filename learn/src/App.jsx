import { Routes, Route, BrowserRouter } from "react-router-dom";
import StateStructure from "./pages/StateStructure";
import InputState from "./pages/InputState";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state-structure" element={<StateStructure />} />
          <Route path="/input-state" element={<InputState />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
