import React, { useState } from "react";

import addInputValuesInitial from "../../../../helpers/addInputValuesInitial";
import { IRequests } from "../../../../helpers/interfaces";

interface AddFormProps {
  addRequestHandler(request: IRequests): void;
}

const AddForm: React.FC<AddFormProps> = ({ addRequestHandler }) => {
  const [inputValue, setInputValue] = useState<IRequests>(
    addInputValuesInitial
  );

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [key, value] = [event.target.name, event.target.value];

    setInputValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const formHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newRequest = {
      ...inputValue,
      id: (Math.random() * Math.random()).toString(),
    };

    addRequestHandler(newRequest);
    setInputValue(addInputValuesInitial);
  };

  return (
    <div className="add-form-container">
      <h2>Добавить заявку</h2>
      <form onSubmit={formHandler} className="add-form">
        <input
          type="datetime-local"
          name="date"
          value={inputValue.date}
          onChange={inputHandler}
          placeholder="Дата"
        />
        <input
          type="text"
          name="companyTitle"
          value={inputValue.companyTitle}
          onChange={inputHandler}
          placeholder="Компания"
        />
        <input
          type="text"
          name="name"
          value={inputValue.name}
          onChange={inputHandler}
          placeholder="ФИО"
        />
        <input
          type="tel"
          name="tel"
          value={inputValue.tel}
          onChange={inputHandler}
          placeholder="Телефон"
        />
        <input
          type="text"
          name="comment"
          value={inputValue.comment}
          onChange={inputHandler}
          placeholder="Комментарий"
        />
        <input
          type="text"
          name="code"
          value={inputValue.code}
          onChange={inputHandler}
          placeholder="ATI код"
        />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default AddForm;
