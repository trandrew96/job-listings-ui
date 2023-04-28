// Import all the company logo images
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(require.context("./img", false, /\.(png|jpe?g|svg)$/));

/***
 * Displays all the listings and handles filtering them
 * @param filters the languages, role, and level of jobs to display
 * @param listings array of listings objects
 * @param addFilter hook for updating the filters state inside the parent component
 */
export default function Listings({ filters, listings, addFilter }) {
  let visibleListings = [];

  // 1. filter jobs that contains every language
  // 2. filter jobs that match role
  // 3. filter jobs that match level
  visibleListings = listings
    .filter((listing) =>
      filters.languages.every((language) =>
        listing.languages.includes(language)
      )
    )
    .filter((listing) => filters.role == "" || listing.role === filters.role)
    .filter(
      (listing) => filters.level == "" || listing.level === filters.level
    );

  let listingComponents = visibleListings.map((listing) => (
    <div
      className={
        "md:flex px-5 pb-5 pt-10 md:pt-5 bg-white rounded drop-shadow-lg mb-14 md:mb-8 " +
        (listing.featured ? "border-l-8 border-darkCyan" : "")
      }
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
      <div className="flex flex-col justify-between">
        <div>
          <span className="text-darkCyan font-bold mr-4 md:mr-3">
            {listing.company}
          </span>

          {listing.new && (
            <span className="bg-darkCyan text-white rounded-3xl px-2 mr-3 py-1">
              NEW!
            </span>
          )}
          {listing.featured && (
            <span className="bg-black text-white rounded-3xl px-2 mr-3 py-1">
              FEATURED
            </span>
          )}
        </div>

        <a
          href="#"
          className="hover:text-darkCyan font-bold text-lg mb-3 md:mb-0"
        >
          {listing.position}
        </a>
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
