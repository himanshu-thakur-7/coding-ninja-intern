import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [filters, updateFilters] = useState({
    event: "",
    timeLine: "",
    tagsList: [],
  });
  return (
    <FilterContext.Provider value={[filters, updateFilters]}>
      {props.children}
    </FilterContext.Provider>
  );
};
