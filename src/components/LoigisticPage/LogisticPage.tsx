import React, { useState } from "react";

import { IRequests } from "../../helpers/interfaces";
import requestsInitial from "../../helpers/requestsInitial";

import Header from "./Header/Header";
import PageWithAdmin from "./PageWithAdmin/PageWithAdmin";
import PageWithoutAdmin from "./PageWithoutAdmin/PageWithoutAdmin";

const LogisticPage: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [requests, setRequests] = useState<IRequests[]>(requestsInitial);
  const requestCount: number = requests.length;

  const changeAdminHandler = () => {
    setIsAdmin((prev) => !prev);
  };

  const deleteRequestHandler = (id: string) => {
    setRequests((prev) => prev.filter((request) => request.id !== id));
  };

  const addRequestHandler = (request: IRequests) => {
    setRequests((prev) => [...prev, request]);
  };

  const changeRequestHandler = (id: string, key: string, value: string) => {
    setRequests((prev) =>
      prev.map((request) => {
        if (request.id === id) {
          return {
            ...request,
            [key]: value,
          };
        }

        return request;
      })
    );
  };

  return (
    <>
      <Header
        changeAdminHandler={changeAdminHandler}
        isAdmin={isAdmin}
        counter={requestCount}
      />

      {isAdmin ? (
        <PageWithAdmin
          requests={requests}
          deleteRequestHandler={deleteRequestHandler}
          addRequestHandler={addRequestHandler}
          changeRequestHandler={changeRequestHandler}
        />
      ) : (
        <PageWithoutAdmin requests={requests} />
      )}
    </>
  );
};

export default LogisticPage;
