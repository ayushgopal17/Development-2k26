
import { useState,useRef } from 'react'
import './App.css'
let interval:any;

function App() {

   const [secondsPassed,setSecondsPassed]= useState(0);
   let interval=useRef(0);

function startClock()  {
  
     interval.current= setInterval(()=>{
       setSecondsPassed( s=> s+1);

       },1000)
       };

       function stopclock(){
        clearInterval(interval.current);
        interval.current=0;
       }


  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
    <div style={{fontSize:100}}>
      <div style={{display:"flex",justifyContent:'center'}}>
      <button onClick={startClock}>start clock</button>
        <button onClick={stopclock} >stop clock</button>
        </div>
        <div>
          {secondsPassed}s
        </div>
       </div>
       </div>
  )
}



export default App
