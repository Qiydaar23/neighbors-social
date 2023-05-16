import React from 'react'
import { useParams } from 'react-router-dom';
import  Button  from '@mui/material/Button';

export default function EventDetail() {

  let { id } = useParams();
  function handleDelete(){
    fetch("/events/"+ id, {
      method: "DELETE",

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
    <div>
      
      <Button onClick={handleDelete} variant="contained">Purchase event</Button>
    </div>
  )
}
