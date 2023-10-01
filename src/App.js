import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import { Routes, Route } from "react-router-dom";
import Browse from "./Component/Browse/Browse";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Routes>
    </>
  );
}

export default App;
