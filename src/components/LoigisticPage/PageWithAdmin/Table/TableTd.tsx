import React from "react";

interface ITableTdProps {
  disabledInput: boolean;
  value: string;
  type: string;
  name: string;
  handler(event: React.ChangeEvent<HTMLInputElement>): void;
}

const TableTd: React.FC<ITableTdProps> = ({
  disabledInput,
  value,
  type,
  name,
  handler,
}) => {
  return (
    <td>
      {disabledInput ? (
        <p>
          {type !== "datetime-local"
            ? value || "—"
            : value.split("T").join(" ") || "—"}
        </p>
      ) : (
        <input type={type} value={value} onChange={handler} name={name} />
      )}
    </td>
  );
};

export default TableTd;
