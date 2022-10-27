import React,{ Component } from "react";

function Value2 (event){
    console.log(event)

}

class Life extends Component{
    constructor(){
        super()
        this.state = {
            name:"mugesh",
            age:22
        }

    }
  value=()=>{
   this.setState({
    name:"sakthi",
    age:21
   })
  } 

  componentDidMount(){
   // setTimeout(() =>{
        this.setState({name:"simeon"
        })
   // },1000)

  }

 render(){
    
    return(
     <div>{this.state.name}
     {this.state.age}
    <button onClick={()=>this.value()}>click</button>
    <Value2 event = {this.state}/>
     </div>
    )
 }

}

export default Life




//   componentDidUpdate(){
//     console.log("component did update")
//   }
  
//   componentDidUnMount(){
//     console.log("componentdidmount")
   
//   }