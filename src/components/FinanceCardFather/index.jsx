import React, { useState, useEffect } from "react";
import { Total } from "../FinanceCard";
import { FinanceCard } from "../FinanceCard";
import { FinanceForm } from "../FinanceForm";

export const FinanceApp = () => {
  const [finances, setFinances] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let newTotal = 0;
      finances.forEach((finance) => {
        if (finance.valueType === "Entrada") {
          newTotal += finance.value;
        } else {
          newTotal -= finance.value;
        }
      });
      setTotal(newTotal);
    };

    
    calculateTotal();
  }, [finances]);
  
  const handleDelete = (description, value, type) => {
    const updatedFinances = finances.filter(
      (finance) => finance.description !== description
    );

    setFinances(updatedFinances);
  };

  return (
    <>
      <section className="financeFormSection">
        <FinanceForm
          finances={finances}
          setFinances={setFinances}
          total={total}
          setTotal={setTotal}
        />

        <Total totalValue={total} />
      </section>
      <section className="financeSection">
        <h2 className="title two financeListTitle">Resumo Financeiro</h2>
        <section className="cardSection">
          {finances.map((finance, index) => (
            <FinanceCard
              key={index}
              description={finance.description}
              value={finance.value}
              type={finance.valueType}
              onDelete={() => handleDelete(finance.description, finance.value, finance.valueType)}
            />
          ))}
        </section>
      </section>
    </>
  );
};
