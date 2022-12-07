import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import App from "./App";

const RouteTree = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default RouteTree;
