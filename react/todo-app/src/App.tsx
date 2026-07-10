
function App() {
 const posts=[{
  name:"Ayush",
  content:"HI i am developer"
 },{
  name:"Ayush",
  content:"HI i am developer"
 },{
  name:"Ayush",
  content:"HI i am developer"
 },{
  name:"Ayush",
  content:"HI i am developer"
 },{
  name:"Ayush",
  content:"HI i am developer"
 },{
  name:"Ayush",
  content:"HI i am developer"
 }]

// let postComponents=[
//    <Post name={posts[0].name}  content={posts[0].content}/>,
//     <Post name={posts[0].name}  content={posts[0].content}/>,
//      <Post name={posts[0].name}  content={posts[0].content}/>
// ]

  return (
    <>
      <div>
        <p>LINKEDIN!!!</p>
        {posts.map(p=> <Post name={p.name} content={p.content}/>)}
{/*         
         <Post name="Ayush" content="Hi i am a developer"/>
         <Post name="Shivam" content="Hi i am an Engineer"/>
          <Post name="Aman" content="Hi i am a doctor"/>  */}
        
      
      </div>
    </>
  )
}

function Post(props:any){
  return <div style={{margin:10 ,borderRadius:20,padding:20,border: "solid 2px"}}>
    <div>
    <b>{props.name}</b>
    </div>
    <div>
      {props.content}
    </div>
  </div>
}

export default App
