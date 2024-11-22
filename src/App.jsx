import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header.jsx'
import Core from './components/core/Core.jsx'
import MenuBar from './components/menu-bar/MenuBar.jsx'

function App() {

  const [score, setScore] = useState(0);
  const [alt, setAlt] = useState(0);
  const [mult, setMult] = useState(1);

  const raiseScore = () => {
    setScore(score + ((1 + alt) * mult));
  }
  const buyUpgrade = (id, cost) => { 
    console.log(id)
    if (score >=cost){
      if (id == 1){
        console.log('entrou')
        setScore(score-cost)
        setAlt (alt+1)
        alert('Click ++ Purchased');
      }
      if (id== 2){
        setScore(score-cost)
        setMult (mult+1)
        alert('Click X2 Purchased');
      }
      
    }
    else{
      alert(`Not enough points`)
    }
    
  }

  return (

    <div className=''>
      <Header score={score} alt={alt} mult={mult}/>
      <Core onIncrement={raiseScore}/>
      <MenuBar onButtonClick={buyUpgrade}/>

    </div>
  )
}

export default App
