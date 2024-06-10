import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />
      <main className="main">
        <h1>Conteudo</h1>
      </main>
      <Footer />

      </div>    
    </>
  )
}

export default App
