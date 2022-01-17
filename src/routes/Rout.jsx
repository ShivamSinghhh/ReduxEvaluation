import { Link, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { AdminSignup } from "../components/Admin";
import { User } from "../components/User";
import { Register } from "../components/Register";


export const Rout = () => {
  return (
    <>
      <div style={{ display:"flex"}}>
        <div style={{ marginLeft: "25px" }}> <Link to="/adminsignin">Admin_SignIn</Link></div>
        <div style={{ marginLeft: "25px" }}> <Link to="/usersignin">User_SignIn</Link></div>
        <div style={{ marginLeft: "25px" }}>  <Link to="/signup">Signup</Link></div>
    
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>;
          <Route path="/adminsignin" element={<AdminSignup />}></Route>
          <Route path="/usersignin" element={<User />}></Route>
          <Route path="/signup" element={<Register />}></Route>        
        </Routes>
      </div>
    </>
  );
};
