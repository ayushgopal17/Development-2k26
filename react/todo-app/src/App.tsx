
// function App() {
//  const posts=[{
//   name:"Ayush",
//   content:"HI i am developer"
//  },{
//   name:"Ayush",
//   content:"HI i am developer"
//  },{
//   name:"Ayush",
//   content:"HI i am developer"
//  },{
//   name:"Ayush",
//   content:"HI i am developer"
//  },{
//   name:"Ayush",
//   content:"HI i am developer"
//  },{
//   name:"Ayush",
//   content:"HI i am developer"
//  }]

// // let postComponents=[
// //    <Post name={posts[0].name}  content={posts[0].content}/>,
// //     <Post name={posts[0].name}  content={posts[0].content}/>,
// //      <Post name={posts[0].name}  content={posts[0].content}/>
// // ]

//   return (
//     <>
//       <div>
//         <p>LINKEDIN!!!</p>
//         {posts.map(p=> <Post name={p.name} content={p.content}/>)}
// {/*         
//          <Post name="Ayush" content="Hi i am a developer"/>
//          <Post name="Shivam" content="Hi i am an Engineer"/>
//           <Post name="Aman" content="Hi i am a doctor"/>  */}
        
      
//       </div>
//     </>
//   )
// }

// function Post(props:any){
//   return <div style={{margin:10 ,borderRadius:20,padding:20,border: "solid 2px"}}>
//     <div>
//     <b>{props.name}</b>
//     </div>
//     <div>
//       {props.content}
//     </div>
//   </div>
// }

// export default App


// function App(){
// const  post=[{
//   name:"Ayush",
//   content:"Hi i am a developer"
// }]
// let postContents=[
//   <Post name={post[0].name} content={post[0].content} />
// ]
// return(
//   <div>
//     <div>LinkedIN...</div>
//     <div>{post.map(p=> <Post name= {p.name} content={p.content}/>)}</div>
//   </div>
// )
// }

// function Post(props:any){
//   return (
//     <div style={{border:"solid black 2px", margin:20, padding:20,borderRadius:10}}>
//       <div>
// {props.name}
//       </div>
//       <div>
// {props.content}
//       </div>
//     </div>
//   )
// }


// export default App





// function App(){
// const username=[{name:"Ayush", content:"hi i am Ayush"}]

// ]
// return(
//   <div>
//   <div>LINKEDIN!!!</div>
//   <div>{username.map(p=> <Post name={p.name} content={p.content}/>)}</div>
//   </div>
// )
// }
// function Post(props:any){
//   return(
//   <div>
//    {props.name}
//    {props.content}
// </div>

// )
// }

// export default App




function App(){

  const arr1=[{name:"Ayush",content:"Ayush is a developer"},
    {name:"Shivam",content:"Ayush is an Engineer"},
    {name:"Aman",content:"Ayush is a doctor"}
  ]

return(
  <div>
    <div>
      Linkedin!!!!!
    </div>
    <div>
      {arr1.map(p=> <Post name={p.name} constent={p.content}></Post>)}
    </div>
  </div>
)
}
function Post(props:any){
  return(
    <div style={{border:"black solid 2px",borderRadius:10, margin:20,padding:20 }}>
<div>
  {props.name}
</div><div>
  {props.constent}
</div>
    </div>
  )
}

export default App