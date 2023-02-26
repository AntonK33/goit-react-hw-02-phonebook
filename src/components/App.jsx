import { Component } from "react";
import { InputForm } from "./InputForm/InputForm";



import { nanoid } from "nanoid";
export class App extends Component {
state = {
  
  
}
 
  render() {
    //const inputValue = this.state.name;
   return (
      <div
       style={{
         height: '100vh',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         fontSize: 40,
         color: '#010101'
       }}
      >
       <InputForm/>
       
       
       
      </div>
  );
}
  
}