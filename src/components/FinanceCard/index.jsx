import React, { useState } from "react"

export const Total = ({ totalValue }) => {
  
  const formatCurrency = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  
  const formattedTotal = typeof totalValue === 'number' ? formatCurrency(totalValue) : '0.00';

  return (
    <>
      <section className="Totalsection">
        <h2 className="title three totaltext">Valor total:</h2>
        <p className="title Headline ptext">O valor se refere ao saldo</p>
        <p className="title three totalvalue">{formattedTotal}</p>
      </section>
    </>
  );
};






export const FinanceCard = ({ description, value, type, date, onDelete }) => {
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
      <div className={`card ${cardClass}`}>
        <h2 className="title three titleCard">{description}</h2>
        <p className="title Headline pCard">{type}</p>
        <p className="title four pCard pCardValue">{formatCurrency(value)}</p>
        <p>data:{date}</p>
        <button className="button delete btnCard" onClick={handleDeleteClick}>Excluir</button>
      </div>
    </>
  );
};
