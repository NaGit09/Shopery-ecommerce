import "./App.css";
import Header from "./components/MultiComponent/Web/Header.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Shop from "./pages/Shopping/Shop.jsx";
import SignIn from "./pages/Auth/SignIn.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import Footer from "./components/MultiComponent/Web/Footer.jsx";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="h-dvh">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
