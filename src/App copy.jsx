import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header.jsx'
import Core from './components/core/Core.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Core />
      </div>
    </>
  )
}

export default App
