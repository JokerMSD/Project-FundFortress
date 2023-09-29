import Style from "./style.module.css";

export const FinanceForm = () => {
  return (
    <>
      <section className={Style.container}>
        <form action="">
          <label htmlFor="description">Descrição</label>
          <input
            name="description"
            id="description"
            placeholder="Digite aqui sua descrição"
          />

          <label htmlFor="value">Valor(R$)</label>

          <input name="value" id="value" placeholder="1" />

          <label htmlFor="valueType">Tipo de Valor</label>

          <select name="valueType" id="valueType">
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>

          <button type="submit">Inserir valor</button>
        </form>
      </section>
    </>
  );
};
