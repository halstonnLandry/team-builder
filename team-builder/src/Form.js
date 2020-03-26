import React,{useState} from "react";
import "./App.css";


function Form(props) {

    const [memberList, setMemberList]=useState({
        name:'',
        email:'',
        role:''
    });
    const handleChanges= event=>{
      setMemberList({...memberList,[event.target.name]: event.target.value})
    }

      const submitForm = event => {
        event.preventDefault();
        props.addNewMember(memberList);
        setMemberList({ 
          name: '', 
          email: '', 
          role:'' });
      };


  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor='name'>
          Name:
          <input 
            name='name'
            id="name"
            type="text"
            onChange={handleChanges}
            value={memberList.name}
            />
        </label>
        <label htmlFor='email'>
          Email:
          <input 
          name='email'
            id='email'
            type="email"
            onChange={handleChanges}
            value={memberList.email}
          />
        </label>
        <label htmlFor='role'>
          Role:
          <input 
          name='role'
          id='role'
          type="text"
          onChange={handleChanges}
          value={memberList.role}
          />

        </label>
        <button type='submit'>
        Add Member
      </button>
      </form>

    </>
  );
}

export default Form;