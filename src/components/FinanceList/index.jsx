import { FinanceCard } from "../FinanceCard";

export const FinanceList = () => {
  return (
    <>
      <section className="financeList">
        <h2 className="title two">Resumo Financeiro</h2>
        <ul className="financeUl">
          <li className="financeLi">
            <FinanceCard />
          </li>
          <li className="financeLi">
            <FinanceCard />
          </li>
          <li className="financeLi">
            <FinanceCard />
          </li>
        </ul>
      </section>
    </>
  );
};
