export default function Filters({ filters, removeFilter }) {
  // all the language filters

  for (let val of filters.languages) {
    console.log("languages", val);
  }

  return (
    <div className="bg-white flex flex-wrap h-full px-5 mb-5">
      {/* Level Filter */}
      {filters.level && (
        <div className="flex bg-lightGrayishCyan my-4 mr-3 rounded">
          <div className="px-2 text-darkCyan">{filters.level}</div>
          <button
            onClick={() => {
              removeFilter({ type: "change_level", level: "" });
            }}
            className="bg-darkCyan bg-remove-icon bg-no-repeat w-6 h-6 bg-center"
          ></button>
        </div>
      )}

      {/* Role Filter */}
      {filters.role && (
        <div className="flex bg-lightGrayishCyan my-4 mr-3 rounded">
          <div className="px-2 text-darkCyan">{filters.role}</div>
          <button
            onClick={() => {
              removeFilter({ type: "change_role", role: "" });
            }}
            className="bg-darkCyan bg-remove-icon bg-no-repeat w-6 h-6 bg-center"
          ></button>
        </div>
      )}

      {/* Languages Filter */}
      {filters.languages.map((language) => {
        return (
          <div
            className="flex bg-lightGrayishCyan my-4 mr-3 rounded"
            key={language}
          >
            <div className="px-2 text-darkCyan">{language}</div>
            <button
              onClick={() => {
                removeFilter({ type: "remove_language", language: language });
              }}
              className="bg-darkCyan bg-remove-icon bg-no-repeat w-6 h-6 bg-center"
            ></button>
          </div>
        );
      })}
    </div>
  );
}
