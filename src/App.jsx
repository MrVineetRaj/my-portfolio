import { useContext } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import { Mode } from './Store/mode-store'
import FooterDiv from './components/FooterDiv'

function App() {
  const {mode }  = useContext(Mode)
  return (
    <div className={`mainContainer ${mode}`}>
      <Header />
      <Body/>
      <FooterDiv/>
    </div>
  )
}

export default App
