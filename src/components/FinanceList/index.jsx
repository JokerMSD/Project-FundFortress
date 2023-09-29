import { FinanceCard } from "../FinanceCard"


export const FinanceList = () => {

    return (
       <>
       <h2 className="title two">Resumo Financeiro</h2>
       <ul>
        <li>
        <FinanceCard />
        </li>
        <li>
        <FinanceCard />
        </li>
        <li>
        <FinanceCard />
        </li>
       </ul>
      </>
  )

}