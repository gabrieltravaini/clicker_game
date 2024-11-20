
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/core/Core.css'
import Header from './components/header/Header';
import Core from './components/core/Core.jsx';
import MenuBar from './components/menu-bar/MenuBar.jsx'

function App() {

  const [score, setScore] = useState(0);
  const [alt, setAlt] = useState(0);
  const [mult, setMult] = useState(1);

  const raiseScore = () => {
    setScore(score + ((1 + alt) * mult));
  }

  return (

    <div className=''>
      <Header score={score}/>
      <Core onIncrement={raiseScore}/>
      <MenuBar />

    </div>
  )
}

export default App
