import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import CreateGame from './pages/CreateGame';
import JoinGame from './pages/JoinGame';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createGame" element={<CreateGame />} />
        <Route path="/joinGame" element={<JoinGame />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
