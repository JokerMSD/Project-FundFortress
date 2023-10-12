import Style from "./style.module.scss";
import { useState } from "react";

export const FinanceForm = ({
  finances,
  setFinances,
  total,
  setTotal,
  darkMode,
}) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("");

  const handleAddFinance = (e) => {
    e.preventDefault();

    if (description.trim() === "" || value.trim() === "" || valueType === "") {
      return;
    }

    const now = new Date();
    const formattedDate = now.toLocaleString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const newFinance = {
      description,
      value: parseFloat(value),
      valueType,
      id: Date.now(),
      date: formattedDate,
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
        <form
          className={`${Style.formContainer} ${
            darkMode ? Style["dark-mode"] : ""
          }`}
          onSubmit={handleAddFinance}
        >
          <div className="formDiv">
            <label
              className={`title three ${
                darkMode ? Style["dark-mode-text"] : ""
              }`}
              htmlFor="description"
            >
              Descrição
            </label>
            <input
              className={`${Style.input} ${
                darkMode ? Style["dark-mode-input"] : ""
              }`}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="description"
              id="description"
              value={description}
              placeholder="Digite aqui sua descrição"
              required
            />
            <small className={Style.formSmall}>Ex: Compra de roupas</small>
          </div>
          <label
            className={`title three ${darkMode ? Style["dark-mode-text"] : ""}`}
            htmlFor="value"
          >
            Valor(R$)
          </label>
          <div>
          <input
            className={`${Style.input} ${Style.inputValueNumber} ${
              darkMode ? Style["dark-mode-input"] : ""
            }`}
            onChange={(e) => setValue(e.target.value)}
            type="number"
            name="value"
            id="value"
            value={value}
            placeholder="R$: 0,00"
            required
          />
          <small className={Style.formSmall}>Use pontos somente para adicionar centavos</small>
          </div>

          <label
            className={`title three ${darkMode ? Style["dark-mode-text"] : ""}`}
            htmlFor="valueType"
          >
            Tipo de Valor
          </label>
          <select
            className={`input select ${
              darkMode ? Style["dark-mode-input"] : ""
            }`}
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

          <button className={Style.btnForm}>Inserir valor</button>
        </form>
      </section>
    </>
  );
};
