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
      <section className={`${Style.totalSection} ${darkMode ? Style["dark-mode"] : ''}`}>
        <h2 className={`${Style.totaltext} ${darkMode ? Style["dark-mode-text"] : ''}`}>Valor total:</h2>
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
    <section className={`${Style.cardMainSection}`}>

      <div className={`${Style.card} ${cardClass} ${darkMode ? Style["dark-mode"] : ''}`}>

        <div className={Style.div1}>
        <h2 className={`${Style.titleCard} ${darkMode ? Style["dark-mode-text"] : ''}`}>{description}</h2>
        <p className={`${Style.pCard} ${type} ${darkMode ? Style["dark-mode-text"] : ''}`}>{type}</p>
        </div>

        <div className={Style.div2}>
        <span className={`${Style.pCardValue} ${darkMode ? Style["dark-mode-text"] : ''}`}>{formatCurrency(value)}</span>
        <p className={`${Style.pCardDate} ${darkMode ? Style["dark-mode-date"] : ''}`}>{date}</p>
        </div>

        <div className={Style.div3}>
        <button 
           className={`${Style.btnCard}  ${darkMode ? Style["dark-mode-btn"] : ''}`}
           onClick={handleDeleteClick}>
           <BsFillTrashFill className={Style.trashIcon}/>
        </button>
        </div>

      </div>
          </section>
    </>
  );
};
