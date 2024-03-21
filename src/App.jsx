import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TodoList from "./pages/TodoList";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TaskPage from "./pages/TaskPage";
import ToDoListDetails from "./pages/ToDoListDetails";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="app-container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/to-do-list" element={<TodoList />} />
          <Route path="/tasks" element={<TaskPage />} />

          <Route path="/list-details/:listId" element={<ToDoListDetails />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
