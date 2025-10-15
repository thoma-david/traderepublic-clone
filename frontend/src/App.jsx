import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className=" max-w-[95%] lg:max-w-[75%] 2xl:max-w-[55%] mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/instrument/:name" element={<SinglePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
