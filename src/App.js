import { useReducer, useState, useMemo } from "react";

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
  // console.log("dispatch action: ", action);
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

function loadingAnimation() {
  return (
    <div className="h-96 flex items-center">
      <svg
        className="mx-auto"
        version="1.1"
        id="loader-1"
        x="0px"
        y="0px"
        width="40px"
        height="40px"
        viewBox="0 0 50 50"
      >
        <path
          fill="#000"
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}

function App() {
  const [filters, dispatch] = useReducer(reducer, initialFilters);
  const [loading, setLoading] = useState(false);

  let hasFilters =
    filters.languages.length > 0 || filters.role !== "" || filters.level !== "";

  console.log("hasFilters: ", hasFilters);

  useMemo(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [filters]);

  return (
    <div className="App">
      <div className="header bg-header-pattern bg-no-repeat h-32 bg-darkCyan bg-cover"></div>

      <div className="py-10 px-5">
        <div className="max-w-4xl mx-auto relative">
          <div
            className={`absolute z-10 w-full ${
              hasFilters ? "-top-16" : "top-0"
            }`}
          >
            <Filters
              filters={filters}
              removeFilter={dispatch}
              clearFilters={dispatch}
            ></Filters>
            {loading && loadingAnimation()}

            {!loading && (
              <Listings
                listings={Data}
                filters={filters}
                addFilter={dispatch}
              ></Listings>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
