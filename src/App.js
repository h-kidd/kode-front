import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Settings from "./pages/Settings/index"
import { Questions, Waiting, Leaderboard, Score, Results } from "./pages";
import Home from "./pages/Home";
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import { LoginPage, SetHomework } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/results" element={<Results />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/lobby" element={<Waiting />} />
        <Route path="/score" element={<Score />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path="/setHomework" element={<SetHomework />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
