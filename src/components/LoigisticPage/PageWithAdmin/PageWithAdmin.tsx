import React, { useMemo, useState } from "react";

import optionsInitial from "../../../helpers/optionInitial";
import { IRequests } from "../../../helpers/interfaces";

import Table from "./Table/Table";
import AddForm from "./Form/AddForm";
import FilterSelect from "./Filters/FilterSelect";
import FilterSearch from "./Filters/FilterSearch";

interface PageWithAdminProps {
  requests: IRequests[];
  deleteRequestHandler(id: string): void;
  addRequestHandler(request: IRequests): void;
  changeRequestHandler(id: string, key: string, value: string): void;
}

const PageWithAdmin: React.FC<PageWithAdminProps> = ({
  requests,
  deleteRequestHandler,
  addRequestHandler,
  changeRequestHandler,
}) => {
  const [optionFilters, setOptionFilters] = useState<any[]>(optionsInitial);
  const [searchValue, setSearchValue] = useState<string>("");

  const requestsWithFilters = useMemo<any>(() => {
    let newRequests: IRequests[];
    const activeFilters = optionFilters.filter((filter) => filter.selected)[0];

    if (activeFilters.title !== "Все заявки") {
      newRequests = activeFilters.sortedFunc(requests);
    } else {
      newRequests = requests;
    }

    if (searchValue.length) {
      newRequests = newRequests.filter((request) => {
        const requestToString = Object.values(request)
          .slice(1)
          .join("")
          .toLowerCase();

        return requestToString.includes(searchValue.toLowerCase());
      });
    }

    return newRequests;
  }, [requests, optionFilters, searchValue]);

  const changeFiltersHandler = (title: string) => {
    setOptionFilters((prev) =>
      prev.map((option) => ({
        ...option,
        selected: option.title === title,
      }))
    );
  };

  return (
    <div className="with-admin">
      <div className="filters-container">
        <h2>Фильтры</h2>
        <div>
          <FilterSelect
            optionFilters={optionFilters}
            changeFiltersHandler={changeFiltersHandler}
          />

          <FilterSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>

      <AddForm addRequestHandler={addRequestHandler} />

      <Table
        requests={requestsWithFilters}
        deleteRequestHandler={deleteRequestHandler}
        changeRequestHandler={changeRequestHandler}
      />
    </div>
  );
};

export default PageWithAdmin;
