import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import { Routes, Route } from "react-router-dom";
import Favorite from "./Component/Favorite/Favorite.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </>
  );
}

export default App;
