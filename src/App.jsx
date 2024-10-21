import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import config from "./config";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logOut } from "./store/authSlice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login({ userData })) : dispatch(logOut());
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
