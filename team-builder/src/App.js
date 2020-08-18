import React, {useState} from 'react';
import Team from './Team'

import './App.css';
const initialTeam = [
  {name:'Rihana',
  email:'RihRih@gmail.com',
  role:'BadB'}
]

function App() {
  const [team, setTeam] = useState(initialTeam);

  return (
    <div className="App">
      <header className="App-header">
      {team.map(member =>{
        return(
          <Team name={member.name}
          email={member.email}
          role={member.role}
          key={member.email} /> 
        )
      })}

      </header>
    </div>
  );
}

export default App;
