import { useState } from 'react'
import logo from '../logo.svg'
import '../App.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="App-header ">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-yellow-200'>Hello Vite + React + TypeScript + TailwindCSS!</p>
        <p>
          <button className='border-2 bg-white text-black px-2 rounded-md' type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p className="text-sky-400">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header >

    </>
  )
}

export default Header