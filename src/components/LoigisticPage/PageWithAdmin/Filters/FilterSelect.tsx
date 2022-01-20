import React from "react";

interface IFilters {
  optionFilters: any[];
  changeFiltersHandler(title: string): void;
}

const FilterSelect: React.FC<IFilters> = ({
  optionFilters,
  changeFiltersHandler,
}) => {
  const selectedValue: string = optionFilters.filter(
    (option) => option.selected
  )[0].title;

  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) =>
    changeFiltersHandler(event.target.value);

  return (
    <select value={selectedValue} onChange={selectChangeHandler}>
      {optionFilters.map((option) => (
        <option value={option.title} key={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
