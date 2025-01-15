import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Form/Header/Dashboard";
import Test from "./test";
import ProductList from "./Form/Pages/ProductList";
import CreateUser from "./Form/Pages/CreateUser";
import UserList from "./Form/Pages/UserList";
import Login from "./Form/Pages/Login";
function App() {
  return (
    <>
      {/* <Test /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
