import React, { useState } from 'react';
import './login.css'; 

function Login({setUser}) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password)
    fetch("/login",{
      method: "POST" , 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username,password}),
    }).then((response)=>{
      return response.json() 

    }).then((data)=>{
      localStorage.setItem("user",JSON.stringify(data))
      setUser(data)
    })
     .catch((error)=>{
      console.log(error)
    })
  };

  return (
    <div className="theaterLogin"> 
      <h1 className='log'>Login</h1>
      <form className='formcss' onSubmit={handleSubmit}>
        <label className='labelcss' htmlFor="username">User Name:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label className='labelcss' htmlFor="password">Password:</label>
        <input className='inputcss'
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className='buttoncss' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
