import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className=" max-w-[95%] lg:max-w-[75%] 2xl:max-w-[55%] mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/single" element={<SinglePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
