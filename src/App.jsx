import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/core/Core.css'
import Header from './components/header/Header';
import Core from './components/core/Core.jsx';
import MenuBar from'./components/menu-bar/MenuBar.jsx'

function App() {
  const [score, setScore] = useState(0)

  return (

    <div className=''>
      <Header/>
      <Core/>
      <MenuBar/>

    </div>
  )
}

export default App
