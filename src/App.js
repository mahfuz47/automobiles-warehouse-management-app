import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./components/pages/AddItems/AddItems";
import Home from "./components/pages/Home/Home";
import Inventory from "./components/pages/Inventory/Inventory";
import Manage from "./components/pages/Manage/Manage";
import MyItems from "./components/pages/MyItems/MyItems";
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
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
