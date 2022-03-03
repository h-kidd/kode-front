import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Settings from "./pages/Settings/index"
import { Questions, Waiting, Leaderboard, Score, Results, Lobby } from "./pages";
import Home from "./pages/Home";
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import { LoginPage, SetHomework, TeacherLogin, Details, AddStudents } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/results" element={<Results />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="/score" element={<Score />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path="/setHomework" element={<SetHomework />} />
        <Route path="/teacherLogin" element={<TeacherLogin />} />
        <Route path="/details" element={<Details />} />
        <Route path="/addStudents" element={<AddStudents />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
