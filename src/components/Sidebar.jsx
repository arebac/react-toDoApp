import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Link to='/'>
        <h3>Home</h3>
      </Link>
      <hr></hr>
      <Link to='/about'>
        <h3>About</h3>
      </Link>
      <hr></hr>
      <Link to='/to-do-list'>
        <h3>To-Do Lists</h3>
      </Link>
      <hr></hr>
      <Link to="/tasks">
        <h3>Tasks</h3>
      </Link>
    </div>
  );
};

export default Sidebar;
