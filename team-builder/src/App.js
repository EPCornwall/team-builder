import React, {useState, useEffect} from 'react';
import uuid from 'uuid';
import './App.css';
import MemberList from './components/MemberList'
import Form from './components/Form'


const initalTeam = [
  {
    key: uuid(),
    name: 'Liz',
    email: 'liz@liz.com',
    role: 'Front End',
  },
  {
    key: uuid(),
    name: 'John',
    email: 'john@john.com',
    role: 'Back End',
  },
  {
    key: uuid(),
    name: 'Michael',
    email: 'Michael@lambda.com',
    role: 'Project Manager',
  }
]

const initialFormValue = {
  name:'',
  favFood: '',
  favLang: ''
}


function App() {
  const [members, setMembers] = useState([{
    name:'Liz',
    favFood: 'Steak',
    favLang: 'JS',
  }]);
  const [form, setForm] = useState(initialFormValue)
  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) =>{
    setMembers([...members, form])
  }

  return (
    <div className="App">
      <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <MemberList members={members}/>
    </div>
  );
}

export default App;
