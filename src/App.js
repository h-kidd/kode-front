import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Settings from "./pages/Settings/index"
import { Quiz, Lobby, Leaderboard, Score } from "./pages";
import Home from "./pages/Home";
import Teacher from './pages/Teacher';
import Student from './pages/Student';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/questions" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/settings" element={<Score />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
