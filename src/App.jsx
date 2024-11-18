import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/core/Core.css'
//import Header from './components/header/Header.jsx'
//import Core from './components/core/Core.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <nav className="navbar m-0 p-0">
          <div className="container-fluid bg-black py-2 px-2 m-0">
            <button className="btn btn-secondary">EXIT</button>
            <div className="">
              <div className="text-blue-400 text-center">
                9999
              </div>
              <div className="text-blue-400 text-center">
                99 per/s
              </div>
            </div>
            <div className="border rounded-2xl p-2 bg-blue-400">
              <div className="text-4xl">👤</div>
            </div>
          </div>
        </nav>
        <div className="flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="w-max-80 p-4">
            <img src="src\assets\hardware.png" />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
