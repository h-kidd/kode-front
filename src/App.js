import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Teacher from './pages/Teacher';
import Student from './pages/Student';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
