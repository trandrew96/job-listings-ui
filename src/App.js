import { useState } from "react";

import Listings from "./Listings";
import Filters from "./Filters";
import Data from "./data.json";
import "./App.css";

const initialFilters = {
  languages: [],
  role: "",
  position: "",
};

function App() {
  // filters state
  const [filters, setLanguageFilters] = useState([]);

  // Add a language filter (activated when a filter button is clicked inside of a job posting)
  const addFilter = (filter) => {
    if (filters.includes(filter)) {
      return;
    }

    const newFilters = [...filters];
    newFilters.push(filter);
    setLanguageFilters(newFilters);
  };

  // Remove a filter (activated when an X button at the top of the page is clicked)
  const removeFilter = (language) => {
    const filteredArray = filters.filter((lang) => lang !== language);
    setLanguageFilters(filteredArray);
  };

  return (
    <div className="App">
      <div className="header bg-header-pattern bg-no-repeat h-32 bg-darkCyan bg-cover"></div>

      <div className="bg-lightGrayishCyan py-10">
        <div className="max-w-3xl mx-auto">
          <Filters filters={filters} removeFilter={removeFilter}></Filters>
          <Listings
            listings={Data}
            filters={filters}
            addFilter={addFilter}
          ></Listings>
        </div>
      </div>
    </div>
  );
}

export default App;
