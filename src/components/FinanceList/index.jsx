import { FinanceCard } from "../FinanceCard";

export const FinanceList = () => {
  return (
    <>
      <section className="financeList">
        <h2 className="title two financeListTitle">Resumo Financeiro</h2>
        <ul className="financeUl">
          <li>
            <FinanceCard />
          </li>
          <li>
            <FinanceCard />
          </li>
          <li>
            <FinanceCard />
          </li>
          <li>
            <FinanceCard  />
          </li>
        </ul>
      </section>
    </>
  );
};
