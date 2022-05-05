import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./components/pages/AddItems/AddItems";
import Home from "./components/pages/Home/Home";
import Inventory from "./components/pages/Inventory/Inventory";
import Manage from "./components/pages/Manage/Manage";
import MyItems from "./components/pages/MyItems/MyItems";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/manage" element={<Manage></Manage>}></Route>
        <Route path="/addItems" element={<AddItems></AddItems>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
