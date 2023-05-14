import Home from "./pages/home/Home";
import Profile from "./pages/home/profile/Profile";
import { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import EventDetail from "./Components/Event/EventDetail";
import Navbar from "./Components/Navbar/Navbar";
import CreateEvent from "./Components/CreateEvent/CreateEvent";



function App() {

  const [user, setUser] = useState('');
  useEffect(() => {

    let savedUser= localStorage.getItem("user")
    if (savedUser){
      savedUser = JSON.parse(savedUser)
      setUser(savedUser)
    }
  }, [])
  
  return (
   <div>
    {  
      user ? 
      <Layout>
      <Routes>
        <Route path="/newEvent" element={<CreateEvent />} />
        <Route path="/event/:id" element= {<EventDetail />} />
        <Route path="*" element={<Profile />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      
    </Routes>
      </Layout>

      : <Login setUser ={setUser} />
    }
  </div> 
  )
}

export default App;
