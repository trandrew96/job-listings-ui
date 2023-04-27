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
//   console.log(`looking inside ${listings[i].languages} for ${filters}`);
//   let jobContainsLanguage = listings[i].languages.includes(filter);

//   console.log(jobContainsLanguage);

//   if (jobContainsLanguage) {
//     newListings.push(listings[i]);
//   }

//   console.log(newListings);
// }

export default function Listings({ listings, filters, addFilter }) {
  // if there are filters then render only the listings that are applicable
  if (filters.length > 0) {
    let filteredListings = [];

    // if the job contains ALL filters, push it to filteredListings
    for (let i = 0; i < listings.length; i++) {
      let jobApplicable = true;

      // don't push the job posting if there is a selected language that is not included in the description
      for (let j = 0; j < filters.length; j++) {
        if (!listings[i].languages.includes(filters[j])) {
          jobApplicable = false;
          break;
        }
      }

      if (jobApplicable) {
        filteredListings.push(listings[i]);
      }
    }

    listings = filteredListings;
  }

  let listingComponents = listings.map((listing) => (
    <div className="flex p-5 bg-white rounded drop-shadow-lg mb-5">
      <div>
        <img src={images[listing.logo]} />
      </div>
      <div className="ml-5 grid grid-rows-3 content-between">
        <span className="text-darkCyan">{listing.company}</span>
        <span>{listing.position}</span>
        <span className="text-darkGrayishCyan">
          {listing.postedAt} • {listing.contract} • {listing.location}
        </span>
      </div>
      <div className="ml-auto flex items-center">
        <button
          onClick={() => addFilter(listing.role)}
          className="bg-lightGrayishCyan p-2 mx-2 text-darkCyan rounded hover:bg-darkCyan hover:text-white"
        >
          {listing.role}
        </button>
        <button
          onClick={() => addFilter(listing.level)}
          className="bg-lightGrayishCyan p-2 mx-2 text-darkCyan rounded hover:bg-darkCyan hover:text-white"
        >
          {listing.level}
        </button>
        {listing.languages.map((language) => {
          return (
            <button
              onClick={() => addFilter(language)}
              className="bg-lightGrayishCyan p-2 mx-2 text-darkCyan rounded hover:bg-darkCyan hover:text-white"
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
