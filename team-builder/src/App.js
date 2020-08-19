import React, {useState} from 'react';
import Team from './Team'
import Form from './Form'
import {v4 as uuid} from 'uuid';

import './App.css';
const initialTeam = [
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

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [team, setTeam] = useState(initialTeam);
  const [formValues, setFormValues] = useState(initialFormValues)
  const handleChange = (e) =>{
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) =>{
    setTeam([...team, formValues])
  }

  
  return (
    <div className="App">
      <header className="App-header">

        <Form formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />

      {team.map(member =>{
        return(
          <Team name={member.name}
          email={member.email}
          role={member.role}
          key={member.id} /> 
        )
      })}
      
      </header>
    </div>
  );
}

export default App;
