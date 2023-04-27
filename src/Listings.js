// Import all the company logo images
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(require.context("./img", false, /\.(png|jpe?g|svg)$/));

// let newListings = [];

// for (let i = 0; i < listings.length; i++) {
//   console.log(`looking inside ${listings[i].languages} for ${languageFilters}`);
//   let jobContainsLanguage = listings[i].languages.includes(filter);

//   console.log(jobContainsLanguage);

//   if (jobContainsLanguage) {
//     newListings.push(listings[i]);
//   }

//   console.log(newListings);
// }

export default function Listings({ filters, listings, addFilter }) {
  let visibleListings = [];

  // display every job that contains every language
  visibleListings = listings.filter((listing) =>
    filters.languages.every((language) => listing.languages.includes(language))
  );

  // filter by role
  visibleListings = visibleListings.filter(
    (listing) => filters.role == "" || listing.role === filters.role
  );

  // filter by level
  visibleListings = visibleListings.filter(
    (listing) => filters.level == "" || listing.level === filters.level
  );

  let listingComponents = visibleListings.map((listing) => (
    <div
      className="md:flex px-5 pb-5 pt-10 md:pt-5 bg-white rounded drop-shadow-lg mb-14"
      key={listing.company}
    >
      {/* Company Logo */}
      <div className="mr-4">
        <img
          className="w-12 md:w-full absolute -top-5 md:relative md:top-0"
          src={images[listing.logo]}
        />
      </div>

      {/* Job Description */}
      <div className="grid grid-rows-3 content-between">
        <span className="text-darkCyan">{listing.company}</span>
        <span>{listing.position}</span>
        <span className="text-darkGrayishCyan">
          {listing.postedAt} • {listing.contract} • {listing.location}
        </span>
      </div>

      <hr className="md:hidden h-px mb-4 mt-5 bg-darkGrayishCyan border-0" />

      {/* FILTER BUTTONS */}
      <div className="ml-auto flex flex-wrap items-center">
        {/* Level */}
        <button
          onClick={() =>
            addFilter({ type: "change_level", level: listing.level })
          }
          className="bg-lightGrayishCyan p-2 mr-2 mt-2 text-darkCyan rounded hover:bg-darkCyan hover:text-white"
        >
          {listing.level}
        </button>

        {/* Role */}
        <button
          onClick={() => addFilter({ type: "change_role", role: listing.role })}
          className="bg-lightGrayishCyan p-2 mr-2 mt-2 text-darkCyan rounded hover:bg-darkCyan hover:text-white"
        >
          {listing.role}
        </button>

        {/* Languages */}
        {listing.languages.map((language) => {
          return (
            <button
              onClick={() =>
                addFilter({ type: "add_language", language: language })
              }
              className="bg-lightGrayishCyan p-2 mr-2 mt-2 text-darkCyan rounded hover:bg-darkCyan hover:text-white"
              key={language}
            >
              {language}
            </button>
          );
        })}
      </div>
    </div>
  ));

  return <div>{listingComponents}</div>;
}
