import { Header } from './components/Header'
import { FinanceForm } from './components/FinanceForm'
import { FinanceList } from './components/FinanceList'
import { FinanceCard } from './components/FinanceCard'
import { Total } from './components/Total'
import './styles/App.css'



function App() {


  return (
    <>
     <Header/>
     <FinanceForm/>
     <FinanceList/>
     <FinanceCard/>
     <Total/>
    </>
  )
}

export default App
