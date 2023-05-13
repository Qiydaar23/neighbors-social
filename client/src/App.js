import Home from "./pages/home/Home";
import Profile from "./pages/home/profile/Profile";
import { useState } from "react";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import EventDetail from "./Components/Event/EventDetail";


function App() {

  const [user, setUser] = useState('');
  
  return (
   <div>
    {  
      user ? 
      <Layout>
      <Routes>
     
        <Route path="/event/:id" element={(id = 1)=><EventDetail id ={id}/>} />
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
