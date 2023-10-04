import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import { Routes, Route } from "react-router-dom";
import Browse from "./Component/Browse/Browse";
import Favorite from "./Favorite/Favorite";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </>
  );
}

export default App;
