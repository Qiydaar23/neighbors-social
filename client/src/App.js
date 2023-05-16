import Home from "./pages/home/Home";
import Profile from "./pages/home/profile/Profile";
import { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import EventDetail from "./Components/Event/EventDetail";
import Navbar from "./Components/Navbar/Navbar";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Tickets from "./Components/Tickets/Tickets";
import Signup from "./Components/Signup/Signup";



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
        
        <Route path="/tickets" element={<Tickets />} />
        <Route path="*" element={<Profile setUser ={setUser}/>} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      
    </Routes>
      </Layout>

      :
      
      
      <Routes> 

      
      <Route path="/signup" element={<Signup setUser ={setUser} />} />
      <Route path="*" element={<Login setUser ={setUser} />} />

      </Routes>




    }
  </div> 
  )
}

export default App;
