import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav>
        <Header />
      </nav>
      <main className="flex-grow bg-[#f5f5f5]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
