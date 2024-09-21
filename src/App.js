import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import {useState} from "react";

function App() {
  const {productItems} = Data;

  const [cardItem, setCardItem] = useState([])
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/pages" element={<Pages productItems={productItems} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
