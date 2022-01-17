import { useState } from "react";
import { loginSuccess } from "../redux/admin/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AdminSignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);


  const handleSubmit = (e) => {
    let data = { username, password };
    e.preventDefault();
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((f) => f.json())
      .then((res) => {
        console.log("admin =", res);
        // dispatch(loginSuccess(res));
      });
  };
  console.log(isAuth);
  if (isAuth) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <h4> Login Form</h4>
      <form onSubmit={handleSubmit}>
        <label> User Name </label>
        <input
          type="text"         
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label> Password </label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
      <div></div>
    </div>
  );
};
