import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./components/pages/AddItems/AddItems";
import Login from "./components/pages/Authentication/Login/Login";
import Registration from "./components/pages/Authentication/Registration/Registration";
import Blogs from "./components/pages/Blogs/Blogs";
import Home from "./components/pages/Home/Home";
import Inventory from "./components/pages/Inventory/Inventory";
import Manage from "./components/pages/Manage/Manage";
import MyItems from "./components/pages/MyItems/MyItems";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import UpdateItem from "./components/pages/UpdateItem/UpdateItem";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import RequireAuth from "./components/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <Manage></Manage>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addItems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/cars/:carsId"
          element={
            <RequireAuth>
              <UpdateItem></UpdateItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
