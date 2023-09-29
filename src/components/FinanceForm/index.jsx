import Style from "./style.module.scss";
import { useState } from "react";

export const FinanceForm = () => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFinance = {
      description,
      value,
      valueType,
      date,
      date,
      id,
    };
    setFinances([...finances, newFinance]);
    setTotal(total + value);
    setDescription("");
    setValue("");
    setValueType("");
    setId(id + 1);
    setId(id + 1);
  };

  const handleDelete = (id) => {
    const newFinances = finances.filter((finance) => finance.id !== id);
    setFinances(newFinances);
    setTotal(total - value);
    setTotalOutcome(totalOutcome - value);
  };

  const submit = (event) => {
    event.preventDefault();
    console.log({ description, value, valueType });

    setDescription("");
    setValue("");
    setValueType("");
  };

  return (
    <>
      <section className={Style.container}>
        <form onSubmit={submit}>
          <label htmlFor="description">Descrição</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            id="description"
            value={description}
            placeholder="Digite aqui sua descrição"
            required
          />

          <label htmlFor="value">Valor(R$)</label>
          <input
            onChange={(e) => setValue(e.target.value)}
            type="text"
            name="value"
            id="value"
            value={value}
            placeholder="1"
            required
          />

          <label htmlFor="valueType">Tipo de Valor</label>
          <select
            onChange={(e) => setValueType(e.target.value)}
            name="valueType"
            id="valueType"
            value={valueType}
            required
          >
            <option value="Selecione" defaultValue hidden>
              Selecione
            </option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>

          <button type="submit">Inserir valor</button>
        </form>
      </section>
    </>
  );
};
