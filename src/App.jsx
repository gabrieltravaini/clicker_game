
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/header/Header.jsx'
import Core from './components/core/Core.jsx'

import './components/core/Core.css'

import MenuBar from './components/menu-bar/MenuBar.jsx'
import { Button } from 'react-bootstrap';

function App() {

  const [score, setScore] = useState(0);
  const [alt, setAlt] = useState(0);
  const [mult, setMult] = useState(1);

  const [achievea,setAchievea] = useState(false)
  let [countachievea,setCountAchievea] = useState(0)

  const [achieveb,setAchieveb] = useState(false)
  

  const raiseScore = () => {
    setScore(score + ((1 + alt) * mult));

    if (score > 9){
      setAchieveb (true)
      console.log(achieveb)
    }
  }



  const buyUpgrade = (id, cost) => { 
    if (score >=cost){
      if (id == 1){
        console.log('entrou')
        setScore(score-cost)
        setAlt (alt+1)
        console.log(countachievea)
        let aux = countachievea +1
        console.log(aux)
        setCountAchievea(aux)
        alert('Click ++ Purchased');
      }
      if (id== 2){
        setScore(score-cost)
        setMult (mult+1)
        setCountAchievea(countachievea+1)
        alert('Click X2 Purchased');
      }
      if (countachievea === 9){
        
        setAchievea(true);
        console.log(achievea)
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
      <MenuBar achievea = {achievea} achieveb = {achieveb} onButtonClick={buyUpgrade}/>


    </div>
  )
}

export default App
