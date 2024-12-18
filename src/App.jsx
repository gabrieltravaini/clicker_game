
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/header/Header.jsx'
import Core from './components/core/Core.jsx'

import './components/core/Core.css'

import MenuBar from './components/menu-bar/MenuBar.jsx'

function App() {

  const [score, setScore] = useState(0);
  const [alt, setAlt] = useState(0);
  const [mult, setMult] = useState(1);

  const [achievea,setAchievea]=useState(false)
  let [countachievea,setCountAchievea]=useState(0)

  const [achieveb,setAchieveb]=useState(false)

  const[achievec, setAchievec]=useState(false)
  const[countachievec, setCountAchievec]=useState(0)
  

  const[upCost1, setUpCost1]=useState(10)
  const[upCost2, setUpCost2]=useState(100)



 

  const raiseScore = () => {
    setScore(score + ((1 + alt) * mult));
    let aux = countachievec +1 
    setCountAchievec(aux)

    if(countachievec >=300 && achievec ==false){
      setAchievec(true)
      alert('New achievement Unlocked!')
    }

    if(score>=1000000 && achieveb ==false){
      setAchieveb(true)
      alert('New achievement Unlocked!')
    }
  }

  const buyUpgrade = (id, cost) => { 
    if (score >=cost){
      if (id == 1){
        setScore(score-cost)
        setAlt (alt+1)
        setUpCost1(parseInt(upCost1*1.2))

        let aux=countachievea +1
        setCountAchievea(aux)
        console.log(countachievea)
       
      }
      if (id== 2){
        setScore(score-cost)
        setMult (mult+1)
        setUpCost2(parseInt(upCost2*2))
        let aux=countachievea +1
        setCountAchievea(aux)
      
      }

      if (countachievea >= 9 && achievea ==false){
        let aux =true;
        setAchievea(aux);
        alert('New achievement Unlocked!')
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
      <MenuBar upCost1={upCost1} upCost2={upCost2}achievea={achievea} achieveb={achieveb} achievec={achievec} onButtonClick={buyUpgrade}/>


    </div>
  )
}

export default App
