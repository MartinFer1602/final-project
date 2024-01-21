import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ProductLista } from './components/ProductLista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ProductLista/>
      
    </>
  )
}

export default App
