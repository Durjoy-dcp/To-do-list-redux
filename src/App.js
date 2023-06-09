import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import TodoLists from "./Components/TodoLists";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar></Navbar>

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr className="mt-4" />

        <TodoLists />

        <hr className="mt-4" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
