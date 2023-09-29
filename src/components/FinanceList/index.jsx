import { FinanceCard } from "../FinanceCard"


export const FinanceList = () => {

    return (
       <>
       <h2 className="title three">Resumo Financeiro</h2>
       <ul>
        <li>
        <FinanceCard />
        </li>
       </ul>
      </>
  )

}