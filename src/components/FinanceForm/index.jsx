import Style from "./style.module.css";
import { useState } from "react";

export const FinanceForm = () => {
  return (
    <>
      <section className={Style.container}>
        <form>
          <label htmlFor="description">Descrição</label>
          <input type="text" name="description" id="description" placeholder="Digite aqui sua descrição"/>

          <label htmlFor="value">Valor(R$)</label>
          <input type="text" name="value" id="value" placeholder="1" />

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
