import React, { useState } from "react";

export const Total = ({ totalValue }) => {
  const formattedTotal = typeof totalValue === 'number' ? totalValue.toFixed(2) : '0.00';

  return (
    <>
      <section className="Totalsection">
        <h2 className="title three totaltext">Valor total:</h2>
        <p className="title Headline ptext">O valor se refere ao saldo</p>
        <p className="title three totalvalue">R$ {formattedTotal}</p>
      </section>
    </>
  );
};

export const FinanceCard = ({ description, value, type, onDelete }) => {
  const cardClass = type === "Entrada" ? "positive" : "negative";
  
  const handleDeleteClick = () => {
    onDelete(description, value, type);
  };

  return (
    <>
      <div className={`card ${cardClass}`}>
        <h2 className="title three titleCard">{description}</h2>
        <p className="title Headline pCard">{type}</p>
        <p className="title four pCard pCardValue">R$ {value.toFixed(2)}</p>
        <button className="button delete btnCard" onClick={handleDeleteClick}>Excluir</button>
      </div>
    </>
  );
};
