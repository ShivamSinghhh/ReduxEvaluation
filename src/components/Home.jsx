import { useState } from "react";

export const Home = () => {
  
  const [name, setName] = useState("");
  
  const [title, setTitle] = useState("");
  
  const [type, setType] = useState("");
  
  const [ctc, setRange] = useState("");
  
  const [city, setLocation] = useState("");
 
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    let data = { name, title, ctc, city, type, description };
    e.preventDefault();
    
    };
  return (
    <div>
      <h4> Profile Details </h4>
      <form onSubmit={handleSubmit}>
        <label> Company Name </label>
        <input
          type="text"
          placeholder="Employer Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
         <label>Designation</label>
        <input
          type="text"
          placeholder="Designation"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label> Type </label>
        <input
          type="text"
          placeholder="Job type(remote)"
          onChange={(e) => setType(e.target.value)}
        />
        <br />
        <label> Location </label>
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <label> Description </label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        
        <label> Salary </label>
        <input
          type="text"
          placeholder="Cost to company"
          onChange={(e) => setRange(e.target.value)}
        />
        <br />          
        <input type="submit" />
      </form>
    </div>
  );
};
