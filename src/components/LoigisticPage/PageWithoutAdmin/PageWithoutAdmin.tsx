import React from "react";

import { IRequests } from "../../../helpers/interfaces";

interface PageWithoutAdminProps {
  requests: IRequests[];
}

const PageWithoutAdmin: React.FC<PageWithoutAdminProps> = ({ requests }) => {
  if (!requests.length) {
    return <h2 className="title-non-requests">Заявок нет</h2>;
  }

  return (
    <div className="without-admin">
      <table>
        <thead>
          <tr>
            <th>Номер заявки</th>
            <th>Время получения заявки</th>
            <th>Компания</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={request.id}>
              <td>{index + 1}</td>
              <td>
                <p>{request.date.split("T").join(" ") || "—"}</p>
              </td>
              <td>
                <p>{request.companyTitle || "—"}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageWithoutAdmin;
