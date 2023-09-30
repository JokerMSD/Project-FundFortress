import React from "react";
import { Total } from "../FinanceCard";
import { FinanceCard } from "../FinanceCard";

export const FinanceApp = () => {
  const finances = [
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Salário - Mês Dezembro", value: 6660 },
    { description: "Outra Receita", value: 1500 },
  ];

  const totalValue = finances.reduce(
    (total, finance) => total + finance.value,
    0
  );

  return (
    <>
      <Total totalValue={totalValue} />
      <div className="financeLi">
      <h2 className="title two financeListTitle">Resumo Financeiro</h2>
      {finances.map((finance, index) => (
        <FinanceCard
          key={index}
          description={finance.description}
          value={finance.value}
        />
        ))}
        </div>
    </>
  );
};
