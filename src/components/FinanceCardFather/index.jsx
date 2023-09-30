import React, { useState } from "react";
import { Total } from "../FinanceCard";
import { FinanceCard } from "../FinanceCard";
import { FinanceForm } from "../FinanceForm";

export const FinanceApp = () => {
    const [finances, setFinances] = useState([]);
    const [total, setTotal] = useState(0);
  
    const handleDelete = (description, value, type) => {
      const updatedFinances = finances.filter((finance) => finance.description !== description);
  
      setFinances(updatedFinances);
  
      if (type === "Entrada") {
        setTotal(total - value);
      } else {
        setTotal(total + value);
      }
    };

  return (
    <div>
      <FinanceForm
        finances={finances}
        setFinances={setFinances}
        total={total}
        setTotal={setTotal}
      />
        <Total totalValue={total} />
        <h2 className="title two financeListTitle">Resumo Financeiro</h2>
      {finances.map((finance, index) => (
        <FinanceCard
          key={index}
          description={finance.description}
          value={finance.value}
          type={finance.valueType}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
