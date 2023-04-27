import { useReducer, useState } from "react";

import Listings from "./Listings";
import Filters from "./Filters";
import Data from "./data.json";
import "./App.css";

const initialFilters = {
  languages: [],
  role: "",
  level: "",
};

const reducer = (state, action) => {
  console.log("dispatch action: ", action);
  switch (action.type) {
    case "add_language": {
      return {
        ...state,
        languages: state.languages.includes(action.language)
          ? state.languages
          : [...state.languages, action.language],
      };
    }
    case "remove_language": {
      return {
        ...state,
        languages: state.languages.filter(
          (language) => language != action.language
        ),
      };
    }
    case "change_role": {
      return {
        ...state,
        role: action.role,
      };
    }
    case "change_level": {
      return {
        ...state,
        level: action.level,
      };
    }
    case "clear_filters": {
      return {
        ...initialFilters,
      };
    }
  }
  throw Error("Unknown action.");
};

function App() {
  const [filters, dispatch] = useReducer(reducer, initialFilters);

  return (
    <div className="App">
      <div className="header bg-header-pattern bg-no-repeat h-32 bg-darkCyan bg-cover"></div>

      <div className="py-10 px-5">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute z-10 -top-16 w-full">
            <Filters
              filters={filters}
              removeFilter={dispatch}
              clearFilters={dispatch}
            ></Filters>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Listings
            listings={Data}
            filters={filters}
            addFilter={dispatch}
          ></Listings>
        </div>
      </div>
    </div>
  );
}

export default App;
