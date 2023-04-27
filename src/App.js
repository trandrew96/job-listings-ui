import JobListings from "./JobListings";

import Data from "./data.json";

import logo from "./logo.svg";
import "./App.css";

function App() {
  // filters state

  return (
    <div className="App">
      <div className="header bg-header-pattern bg-no-repeat h-32 bg-darkCyan bg-cover"></div>

      <div className="bg-lightGrayishCyan py-10">
        <div className="max-w-3xl mx-auto">
          <JobListings listings={Data} filters={[]}></JobListings>
        </div>
      </div>
    </div>
  );
}

export default App;
