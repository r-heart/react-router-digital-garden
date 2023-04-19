import NavBar from "./nav-bar";

export default function Header({ setCurrentPage }) {
  return (
    <header className="items-center justify-between sm:flex sm:flex-row sm:pl-8">
      <h1 className="py-4 text-2xl font-bold">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("/");
          }}
        >
          Router Demo
        </a>
      </h1>
      <NavBar setCurrentPage={setCurrentPage} />
    </header>
  );
}
