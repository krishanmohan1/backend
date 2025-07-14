import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'


function App() {
 const[jokes , setJokes] = useState([]);

 // hum chahte hai jab bhi page reload ho to api call ho jaye to hum uske liye , useEffect use kareng 
 // aur api call ke liye axios library ka use karenge , ye production me use hota hai , jaise ki fetch
 // axios se data json me parse hoke he milta hai 

 // CORS policy padh lo kya hai actually CORS

 // go on proxy vite or proxy CRA documentation read that 
 // 


 useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data);

    // console.log(response.data);
    

  })
  .catch((error)=>{
    console.log("error");
    
  })
 })


  return (
    <>
      <h1>Chai aur fullstack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>

  )
}

export default App
