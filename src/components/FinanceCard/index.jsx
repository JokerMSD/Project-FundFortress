import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import Style from "./style.module.scss"

export const Total = ({ totalValue, darkMode }) => {
  
  const formatCurrency = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  
  const formattedTotal = typeof totalValue === 'number' ? formatCurrency(totalValue) : '0.00';

  return (
    <>
      <section className={`${Style.totalSection} ${darkMode ? 'dark-mode' : ''}`}>
        <h2 className={Style.totaltext}>Valor total:</h2>
        <p className={Style.ptext}>O valor se refere ao saldo</p>
        <p className={Style.totalvalue}>{formattedTotal}</p>
      </section>
    </>
  );
};

export const FinanceCard = ({ description, value, type, date, onDelete, darkMode }) => {
  const cardClass = type === "Entrada" ? "positive" : "negative";
  
  const handleDeleteClick = () => {
    onDelete(description, value, type, date);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  

  return (
    <>
    <section className={`${darkMode ? Style["dark-mode"] : ''}`}>

      <div className={`${Style.card} ${cardClass}`}>
        <h2 className={Style.titleCard}>{description}</h2>
        <p className={`${Style.pCard} ${type}`}>{type}</p>
        <span className={Style.pCardValue}>{formatCurrency(value)}</span>
        <p className={Style.pCardDate}>{date}</p>
        <button 
           className={Style.btnCard} 
           onClick={handleDeleteClick}
           >
           <BsFillTrashFill className={Style.trashIcon}/>
        </button>
      </div>
          </section>
    </>
  );
};
