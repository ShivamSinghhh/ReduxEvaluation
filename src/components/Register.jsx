import { useState } from "react";

export const Register = () => {
  
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [name, setName] = useState("");  

  const [contact, setMobile] = useState("");

  const [description, setDescription] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, password, username, contact,description};
   
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("register =",res);
  
      });
  
  };
  return (
    <div>
      <h4>Registration Form</h4>
      <form onSubmit={handleSubmit}>
        <label> Name </label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label> Email </label>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label> User Name </label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Contact at</label>
        <input
          type="number"
          placeholder="Contact"
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />       
        <br />       
        <input type="submit" />
      </form>
    </div>
  );
};
