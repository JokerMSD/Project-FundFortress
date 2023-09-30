
export const Total = ({ totalValue }) => {
  // Verifica se totalValue é um número antes de chamar toFixed(2)
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

export const FinanceCard = ({ description, value }) => {
  // Verifica se value é um número antes de chamar toFixed(2)
  const formattedValue = typeof value === 'number' ? value.toFixed(2) : '0.00';

  return (
    <>
      <div className="card positive">
        <h2 className="title three titleCard">{description}</h2>
        <p className="title Headline pCard">Entrada</p>
        <p className="title four pCard pCardValue">R$ {formattedValue}</p>
        <button className="button delete btnCard">Excluir</button>
      </div>
    </>
  );
};
