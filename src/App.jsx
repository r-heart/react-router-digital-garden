import { useState } from "react";
import Header from "./components/header/header";
import { About, Contact, LoginRegister } from "./pages";

function App() {
  const [currentPage, setCurrentPage] = useState("/");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "/":
        return <h1 className="mt-24 text-center text-9xl">🏠</h1>;
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      case "/login":
        return <LoginRegister />;
    }
  };

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
    </>
  );
}

export default App;
