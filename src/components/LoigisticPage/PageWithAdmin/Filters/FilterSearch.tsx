import React from "react";

interface ISearch {
  searchValue: string;
  setSearchValue(value: string): void;
}

const FilterSearch: React.FC<ISearch> = ({ searchValue, setSearchValue }) => {
  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      value={searchValue}
      onChange={searchInputHandler}
      placeholder="Поиск в заявках"
    />
  );
};

export default FilterSearch;
