import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="border-b-2">
      <ul className="divide-y bg-slate-700 px-4 sm:flex sm:gap-x-16 sm:divide-y-0 [&>*]:py-4">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login/Register</Link>
        </li>
      </ul>
    </nav>
  );
}
