export default function NavBar({ setCurrentPage }) {
  return (
    <nav className="border-b-2">
      <ul className="divide-y bg-slate-500 px-4 sm:flex sm:gap-x-16 sm:divide-y-0 [&>*]:py-4">
        <li>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("/about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("/contact");
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("/login");
            }}
          >
            Login/Register
          </a>
        </li>
      </ul>
    </nav>
  );
}
