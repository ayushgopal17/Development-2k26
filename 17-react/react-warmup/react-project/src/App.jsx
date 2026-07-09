
import { useEffect, useState } from "react";



// const Toggle= ()=>{
//  let [notificationCount,setNotificationCount]= useState(0)

//   function increment() {
//     setNotificationCount(notificationCount+1)
//   }

// return(
//   <div>
//     <button onClick={increment}>
//       Increse
//       </button>
//     {notificationCount}
//   </div>
// );

// };

// function App(){
// const [count,setCount]=useState(1);

// function increse(){
//   // setCount(function (currvalue){
//   //   return currvalue+1
//   // })
//   setCount(currvalue=>currvalue+1)
// }

// useEffect(function(){
//   console.log("Above statement")
// setInterval(increse,1000)
// },[])






//   return <div >
   
//       {count}

//     </div>
// }

// function App(){
//   const [count,setCount]=useState(1);
//   const [count2,setCount2]=useState(1);

//   function increse(){
//     setCount(newfun=> newfun+1)
//   }

//   function decrese(){
//     setCount2(newfun2=>newfun2-1)
//   }

//   useEffect(()=>{
// setInterval(increse,1000);
// setInterval(decrese,1000)
//   },[])

//   useEffect(()=>{
// console.log("count is changed to "+ count)
//   },[count])


//   return (
//     <div>
//       {count},{count2}
//     </div>
//   )
// }


function App(){

  const [currTab,setCurrTab]= useState("feed");

  return  <div>
    <button onClick={function(){
      setCurrTab("feed")
    }} style={{color: currTab =="feed" ? "red" : "black"}}> Feed</button>
     <button onClick={()=>{
    
      setCurrTab("notification")
     }} style={{color: currTab=="notification" ? "red" : "black"}}>Notification</button>
      <button onClick={()=>{
        setCurrTab("message")
      }} style={{color: currTab=="message" ? "red" : "black"}}>Message</button>
       <button onClick={()=>{
        setCurrTab("jobs")
       }}  style={{color: currTab=="jobs" ? "red" : "black"}}>Jobs</button>
  </div>


}

 export default App


// import { useState } from "react"

// function App() {
//   return (
//      <div style={{background:"#dfe6e9",height:"100vh"}}>
//       <Toggle/>
//      </div>
//   )
// }

// const Toggle= ()=>{
//   const [isVisible,setIsvisible]= useState(false);

// return(
//   <div>
//     <button onClick={() => 
//       setIsvisible(!isVisible)}>
//       Toggle message
//       </button>
//     {isVisible && <p> this is conditionally rendered</p>}
//   </div>
// );

// };






//   <div style={ {background:"#dfe6e9",height:"100vh"}}>
//       <div style={ {display: "flex", justifyContent: "center"}}>
//         <div>
//         <div><PostComponent/> <br/></div> 
//         <div><PostComponent/> <br/></div>
//         <div><PostComponent/><br/></div>
//         <div><PostComponent/><br/></div>
//        </div>
//        </div>
//         </div>
// const style={ width: 200, backgroundColor: "white", borderRadius: 10, borderColor:"gray", borderWidth: 1 , padding:20}

// function PostComponent(){

//   return <div style={style} >
//     <div style={{display: "flex"}}>
//   <img src={"/src/assets/images.jpeg"}
//   style={{
//     width: 30,
//     height: 30,
//     borderRadius:20,
  
//   }}
//   />
//   <div style={{fontsize: 10 ,marginLeft: 10}}>
//     <b>
//       100xdevs
//     </b>
//     <div> 23,888</div>
//     <div> 10m</div>
//   </div>
  

//   </div>
//   <div style={{fontsize: 12}}>
//     Want to know how to win big? Checkout how this fols won $6000 in bounties.
//   </div>
//   </div>
// }


