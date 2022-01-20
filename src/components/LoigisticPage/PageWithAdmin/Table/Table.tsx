import React, { useState } from "react";

import { IRequests } from "../../../../helpers/interfaces";

import TableTd from "./TableTd";

interface TableProps {
  requests: IRequests[];
  deleteRequestHandler(id: string): void;
  changeRequestHandler(id: string, key: string, value: string): void;
}

const Table: React.FC<TableProps> = ({
  requests,
  deleteRequestHandler,
  changeRequestHandler,
}) => {
  const [disabledInput, setDisabledInput] = useState<boolean>(true);

  const deleteHandler = (id: string) => {
    deleteRequestHandler(id);
  };

  const inputHandler = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const [key, value] = [event.target.name, event.target.value];
    changeRequestHandler(id, key, value);
  };

  const changeDisabledHandler = () => {
    setDisabledInput((prev) => !prev);
  };

  if (!requests.length) {
    return <h2 className="title-non-requests">Заявок нет</h2>;
  }

  return (
    <div className="table-container">
      <h2>Заявки</h2>
      <button
        type="button"
        onClick={changeDisabledHandler}
        className="table-container__change-btn"
      >
        {disabledInput ? "Измененить" : "Просмотр"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Номер заявки</th>
            <th>Время получения заявки</th>
            <th>Компания</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>Комментарий</th>
            <th>ATI код</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request, index) => (
            <tr key={request.id}>
              <td>{index + 1}</td>
              <TableTd
                disabledInput={disabledInput}
                value={request.date}
                type="datetime-local"
                name="date"
                handler={(event: React.ChangeEvent<HTMLInputElement>) =>
                  inputHandler(request.id, event)
                }
              />
              <TableTd
                disabledInput={disabledInput}
                value={request.companyTitle}
                type="text"
                name="companyTitle"
                handler={(event: React.ChangeEvent<HTMLInputElement>) =>
                  inputHandler(request.id, event)
                }
              />
              <TableTd
                disabledInput={disabledInput}
                value={request.name}
                type="text"
                name="name"
                handler={(event: React.ChangeEvent<HTMLInputElement>) =>
                  inputHandler(request.id, event)
                }
              />
              <TableTd
                disabledInput={disabledInput}
                value={request.tel}
                type="tel"
                name="tel"
                handler={(event: React.ChangeEvent<HTMLInputElement>) =>
                  inputHandler(request.id, event)
                }
              />
              <TableTd
                disabledInput={disabledInput}
                value={request.comment}
                type="text"
                name="comment"
                handler={(event: React.ChangeEvent<HTMLInputElement>) =>
                  inputHandler(request.id, event)
                }
              />

              <td>
                {disabledInput ? (
                  <a
                    href={`https://ati.su/firms/${request.code}/info`}
                    target="_blank"
                  >
                    {request.code}
                  </a>
                ) : (
                  <input
                    type="text"
                    value={request.code}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      inputHandler(request.id, event)
                    }
                    name="code"
                    disabled={disabledInput}
                  />
                )}
              </td>
              <td className="delete">
                <button onClick={() => deleteHandler(request.id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
