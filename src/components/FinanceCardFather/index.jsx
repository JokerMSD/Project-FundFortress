import React, { useState, useEffect } from "react";
import { Total } from "../FinanceCard";
import { FinanceCard } from "../FinanceCard";
import { FinanceForm } from "../FinanceForm";

export const FinanceApp = () => {
  const [finances, setFinances] = useState(() => {
    const storedFinances = JSON.parse(localStorage.getItem("finances"));
    return storedFinances || [];
    
  });

  const [total, setTotal] = useState(() => {
    const storedTotal = localStorage.getItem("financesTotal");
    return storedTotal || []
  });

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
      localStorage.setItem("finances", JSON.stringify(finances));
      localStorage.setItem("financesTotal", JSON.stringify(total));
    };
    
    calculateTotal();
  }, [finances]);
  
  
  const handleDelete = (id) => {
    const updatedFinances = finances.filter(
      (finance) => finance.id !== id
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
          {(finances.map((finance, index) => (
            <FinanceCard
              key={index}
              description={finance.description}
              value={finance.value}
              type={finance.valueType}
              date={finance.date}
              onDelete={() => handleDelete(finance.id)}
            />
          ))
        )}
        </section>
      </section>
    </>
  );
};
