export default function Filters({ filters, removeFilter }) {
  const filtersList = filters.map((filter) => {
    return (
      <div className="flex bg-lightGrayishCyan my-4 mr-3 rounded">
        <div className="px-2 text-darkCyan">{filter}</div>
        <button
          onClick={() => {
            removeFilter(filter);
          }}
          className="bg-darkCyan bg-remove-icon bg-no-repeat w-6 h-6 bg-center"
        ></button>
      </div>
    );
  });
  return (
    <div className="bg-white flex flex-wrap h-full px-5 mb-5">
      {filtersList}
    </div>
  );
}
