import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
