export default function Filters({ filters, removeFilter, clearFilters }) {
  // all the language filters

  for (let val of filters.languages) {
    console.log("languages", val);
  }

  return (
    <div className="flex w-full bg-white h-full px-5 mb-10 md:mb-5">
      <div className="flex flex-wrap">
        {/* Level Filter */}
        {filters.level && (
          <div className="flex bg-lightGrayishCyan my-4 mr-3 rounded-md">
            <div className="px-2 text-darkCyan">{filters.level}</div>
            <button
              onClick={() => {
                removeFilter({ type: "change_level", level: "" });
              }}
              className="bg-darkCyan hover:bg-black bg-remove-icon bg-no-repeat w-6 h-6 bg-center overflow rounded-r-md"
            ></button>
          </div>
        )}

        {/* Role Filter */}
        {filters.role && (
          <div className="flex bg-lightGrayishCyan my-4 mr-3 rounded-md">
            <div className="px-2 text-darkCyan">{filters.role}</div>
            <button
              onClick={() => {
                removeFilter({ type: "change_role", role: "" });
              }}
              className="bg-darkCyan hover:bg-black bg-remove-icon bg-no-repeat w-6 h-6 bg-center overflow rounded-r-md"
            ></button>
          </div>
        )}

        {/* Languages Filter */}
        {filters.languages.map((language) => {
          return (
            <div
              className="flex bg-lightGrayishCyan my-4 mr-3 rounded-md"
              key={language}
            >
              <div className="px-2 text-darkCyan">{language}</div>
              <button
                onClick={() => {
                  removeFilter({
                    type: "remove_language",
                    language: language,
                  });
                }}
                className="bg-darkCyan hover:bg-black bg-remove-icon bg-no-repeat w-6 h-6 bg-center overflow rounded-r-md"
              ></button>
            </div>
          );
        })}
      </div>

      <div className="flex items-center ml-auto">
        {" "}
        {/* Clear */}
        {(filters.level || filters.role || filters.languages.length > 0) && (
          <button
            className="text-darkGrayishCyan hover:text-darkCyan hover:underline"
            onClick={() => clearFilters({ type: "clear_filters" })}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
