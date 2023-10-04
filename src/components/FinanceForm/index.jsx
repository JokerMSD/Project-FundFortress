import Style from "./style.module.scss"
import { useState } from "react"

export const FinanceForm = ({ finances, setFinances, total, setTotal }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("");

  const handleAddFinance = (e) => {
    e.preventDefault();

    if (description.trim() === "" || value.trim() === "" || valueType === "") {
      return;
    }

    const newFinance = {
      description,
      value: parseFloat(value),
      valueType,
      id: Date.now(),
    };

    setFinances([...finances, newFinance]);

    if (valueType === "Entrada") {
      setTotal(total + newFinance.value);
    } else {
      setTotal(total - newFinance.value);
    }

    setDescription("");
    setValue("");
    setValueType("");
  };

  return (
    <>
      <section className={Style.container}>
        <form onSubmit={handleAddFinance}>
          <div className="formDiv">
            <label className="title three" htmlFor="description">
              Descrição
            </label>
            <input
              className="input"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="description"
              id="description"
              value={description}
              placeholder="Digite aqui sua descrição"
              required
            />
            <small className="title Headline formSmall">
              Ex: Compra de roupas
            </small>
          </div>
          <label className="title three" htmlFor="value">
            Valor(R$)
          </label>
          <input
            className="input"
            onChange={(e) => setValue(e.target.value)}
            type="text"
            name="value"
            id="value"
            value={value}
            placeholder="R$: 0,00"
            required
          />

          <label className="title three" htmlFor="valueType">
            Tipo de Valor
          </label>
          <select
            className="input select"
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

          <button className="button btnForm">Inserir valor</button>
        </form>
      </section>
    </>
  );
};
