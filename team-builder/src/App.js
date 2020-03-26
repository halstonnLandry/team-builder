import React,{useState} from 'react';
import './App.css';
import Form from './Form.js'
import AnotherOne from './AnotherOne.js';
function App() {
const [memberber, setMemberber]=useState([
  {
    name:'Name',
    email:'email@mail.com',
    role:'Role',
  },
  {
    name:'Name2',
    email:'email2@email.com',
    role:'Role2'
  }
]);
const addNewMember= (stuff)=>{
  setMemberber([...memberber, stuff])
}
  return (
    <div className="App">
      <Form addNewMember={addNewMember}/>
      <AnotherOne whatever={memberber}/>
    </div>
  );
}

export default App;
