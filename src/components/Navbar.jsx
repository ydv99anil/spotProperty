import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="bg-blue-800 shadow px-8 py-1 flex justify-between items-center">
      <div className="flex gap-2 items-center">
      <div>
        <img src={"https://cdn-icons-png.flaticon.com/512/18322/18322858.png"} alt="logo-image" className="w-10 h-10 object-fit" />
      </div>
      <div className="text-white pb-2.5 text-3xl font-bold text">spotProperty</div>
      </div>
      <div className="flex gap-8 font-medium text-white">
        <Link to="/">Home</Link>
        <Link to="/properties">Buy</Link>
        <Link to="/add-property">Post Property</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}