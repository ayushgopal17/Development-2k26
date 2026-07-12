// import axios from "axios"
// import {useEffect, useState} from 'react';


// function App() {
//   // let [data,setData]=useState([]);
// let [currTodo,setCurrTodo]=useState("");
// return<div>
//   <button onClick={function(){
// axios.get("https://jsonplaceholder.typicode.com/todos/1")
// .then(response=>{
//   setCurrTodo(response.data.title);
// })
//   }}>
//     1
//   </button >
//   <button onClick={function(){
// axios.get("https://jsonplaceholder.typicode.com/todos/2")
// .then(response=>{
//   setCurrTodo(response.data.title);
// })
//   }}>2</button>
//     <button onClick={function(){
// axios.get("https://jsonplaceholder.typicode.com/todos/3")
// .then(response=>{
//   setCurrTodo(response.data.title);
// })
//   }}>3</button>
//       <button onClick={function(){
// axios.get("https://jsonplaceholder.typicode.com/todos/4")
// .then(response=>{
//   setCurrTodo(response.data.title);
// })
//   }}>4</button>

// <div>{currTodo}</div>
// </div>

// }
//   useEffect(function() {
// axios.get("https://jsonplaceholder.typicode.com/todos")
// .then(response=>{
//   setData(response.data);
// })
//   },[]);

//   return (
//   <div >
//   {data.map(todo => <Todo title={todo.title}/>)}
//   </div>
//   )
// }


// function Todo(props:any){

//   return <div style={{margin:10, padding:10,border:"solid black 2px"}}>
//     <div>
//       {props.title}
//     </div>
//   </div>
// }

// export default App

// import {useEffect, useState} from "react";
// import axios from 'axios'

/////////////////////////////////////////////////////



// function App(){
// let [data,setData]= useState([]);

// useEffect(function (){
// axios.get("https://jsonplaceholder.typicode.com/todos")
// .then(response=>{
//   setData(response.data)
// })
// },[])


// return <div>
//   {data.map(todo=><Todo title={todo.title}/>)}
// </div>

// }

// function Todo(props:any){
//   return(
//     <div>
//       {props.title}
//     </div>
//   )
// }

// export default App

import axios from "axios"

import { useState } from "react";



function App(){

  const [currTodo,setCurrTodo]=useState("")


return (
  <div>
    <button onClick={function (){
      axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response=>{
        setCurrTodo(response.data.title);
      })

    }}>1</button>
     <button onClick={function (){
      axios.get("https://jsonplaceholder.typicode.com/todos/2")
      .then(response=>{
        setCurrTodo(response.data.title);
      })
     }}>2</button>
      <button onClick={function (){
        axios.get("https://jsonplaceholder.typicode.com/todos/3")
        .then(response=>{
          setCurrTodo(response.data.title);
        })
      }}>3</button>

      <div>{currTodo}</div>
  </div>
)
}

export default App