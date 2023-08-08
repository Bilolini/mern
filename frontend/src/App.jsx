import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [mode, setMode] = useState(false)
    return (
        <section style={{ colorScheme: mode ? 'dark' : 'light' }}>
                <button  onClick={() => setMode(prev => !prev)}>Switch to dark</button>
        </section>
    )
}

export default App
