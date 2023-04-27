// Import all the company logo images
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(require.context("./img", false, /\.(png|jpe?g|svg)$/));

export default function JobListings({ listings }) {
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
        {listing.languages.map((language) => {
          return (
            <button className="bg-lightGrayishCyan p-2 mx-2 text-darkCyan rounded hover:bg-darkCyan hover:text-white">
              {language}
            </button>
          );
        })}
      </div>
    </div>
  ));

  return <div>{listingComponents}</div>;
}
