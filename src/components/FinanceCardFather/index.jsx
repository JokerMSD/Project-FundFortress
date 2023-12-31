import React, { useState, useEffect } from "react";
import { Total } from "../FinanceCard";
import { FinanceCard } from "../FinanceCard";
import { FinanceForm } from "../FinanceForm";
import Style from "./style.module.scss";

export const FinanceApp = ({data, darkMode}) => {
  const [finances, setFinances] = useState(() => {
    const storedFinances = JSON.parse(localStorage.getItem("finances"));
    return storedFinances || [];
  });

  const [total, setTotal] = useState(() => {
    const storedTotal = localStorage.getItem("financesTotal");
    return storedTotal || 0;
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
    const updatedFinances = finances.filter((finance) => finance.id !== id);

    setFinances(updatedFinances);
  };

  const totalClass = total <= 0 ? Style.negative : Style.positive; 

  return (
    <>
        <section className={Style.financeFormSection}>
          <FinanceForm
            finances={finances}
            setFinances={setFinances}
            total={total}
            setTotal={setTotal}
            darkMode={darkMode}
          />

          <Total 
          darkMode={darkMode} 
          totalValue={total} 
          className={totalClass}
          />
        </section>

        <section className={Style.financeSection}>
          <h2 className={`${Style.financeListTitle} ${darkMode ? Style["dark-mode-text"] : ''}`}>Resumo Financeiro</h2>
          <section className={Style.cardSection}>
            {finances.map((finance, index) => (
              <FinanceCard
                key={index}
                description={finance.description}
                value={finance.value}
                type={finance.valueType}
                date={finance.date}
                darkMode={darkMode}
                onDelete={() => handleDelete(finance.id)}
              />
            ))}
          </section>
        </section>
    </>
  );
};
