import React,{FC} from 'react';
import './App.css';
import { Person,HairColor } from './components/Person';

const App:FC = () => {

  // const name:string = "Enrico"
  // const age:number = 19
  // const isMarried:boolean = false

  // const getName = (name:string):void =>{
  //   // if (name === "Enrico"){
  //   //   return 19
  //   // } else{
  //   //   return 0
  //   // }
    
  // }

  return (
    <div className="App">
     <Person name='Enrico' age={19} email='123@gmail.com' />
    </div>
  );
}

export default App;
