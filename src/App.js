import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/index"
import Settings from "./pages/Settings/index"
import { Quiz, Lobby, Leaderboard, Score } from "./pages";

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

      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
