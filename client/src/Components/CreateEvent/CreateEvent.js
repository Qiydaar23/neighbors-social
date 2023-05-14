import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import "./createEvent.css"
import  Button  from '@mui/material/Button';


export default function CreateEvent() {

    const [info, setInfo] = useState({
        name: "",
        description: "",
        address: "",
        image: "",
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setInfo({
          ...info,
          [evt.target.name]: value
        });
      }
      function handleClick(){
        console.log(info)
        const date = new Date(2023, 5, 15, 20, 0, 0, 0).toString();
        console.log(date)
        fetch("/events",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({...info,date})
        }).then((response)=>{
            return response.json() 
      
          }).then((data)=>{
            console.log(data)
          })
           .catch((error)=>{
            console.log(error)
          })
      }

  return (
    <div className = "formWrapper">

        <TextField onChange={handleChange} fullWidth name = "name" label="Name" variant="filled" />
        <TextField onChange={handleChange} fullWidth name = "description" label="Description" variant="filled" />
        <TextField onChange={handleChange} fullWidth name = "address" label="Address" variant="filled" />
        <TextField onChange={handleChange} fullWidth name = "image" label="Image" variant="filled" />
        <Button onClick ={handleClick} variant="contained">Create New Event</Button>

    </div>
  )
}
