import React from "react";
import CountUp from "react-countup";

import { useSelector } from "react-redux";

function Cards() {
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );

  const fetchedSummaryData = useSelector(
    (state) => state.summaryData.summaryData
  );

  const fetchedCountries = useSelector((state) => state.countries.countries);

  const todayCases =
    selectedCountry === "global"
      ? fetchedSummaryData.todayCases
      : fetchedCountries.find(
          (country) => selectedCountry === country.country
        ).todayCases;
  const todayRecovered =
    selectedCountry === "global"
      ? fetchedSummaryData.todayRecovered
      : fetchedCountries.find(
          (country) => selectedCountry === country.country
        ).todayRecovered;
  const todayDeaths =
    selectedCountry === "global"
      ? fetchedSummaryData.todayDeaths
      : fetchedCountries.find(
          (country) => selectedCountry === country.country
        ).todayDeaths;

  const cases =
    selectedCountry === "global"
      ? fetchedSummaryData.cases
      : fetchedCountries.find(
          (country) => selectedCountry === country.country
        ).cases;
  const recovered =
    selectedCountry === "global"
      ? fetchedSummaryData.recovered
      : fetchedCountries.find(
          (country) => selectedCountry === country.country
        ).recovered;
  const deaths =
    selectedCountry === "global"
      ? fetchedSummaryData.deaths
      : fetchedCountries.find(
          (country) => selectedCountry === country.country
        ).deaths;

  return (
    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4 mb-3 p-2">
      <div className="flex flex-col bg-white sm:w-1/3 py-3 px-4 font-noto rounded-md shadow-lg border-b-12 border-yellow-500">
        <h3 className="text-md text-gray-500 mb-1">Coronavirus Cases</h3>
        <h1 className="text-4xl font-semibold text-yellow-500 mb-1">
          <CountUp
            start={0}
            end={todayCases}
            duration={2}
            separator=","
            prefix="+"
          />
        </h1>
        <h4 className="text-gray-800">
          <CountUp start={0} end={cases} duration={2} separator="," /> Total
        </h4>
      </div>
      <div className="flex flex-col bg-white sm:w-1/3 py-3 px-4 font-noto rounded-md shadow-lg border-b-12 border-green-500">
        <h3 className="text-md text-gray-500 mb-1">Recovered</h3>
        <h1 className="text-4xl font-semibold text-green-500 mb-1">
          <CountUp
            start={0}
            end={todayRecovered}
            duration={2}
            separator=","
            prefix="+"
          />
        </h1>
        <h4 className="text-gray-800">
          <CountUp start={0} end={recovered} duration={2} separator="," /> Total
        </h4>
      </div>
      <div className="flex flex-col bg-white sm:w-1/3 py-3 px-4 font-noto rounded-md shadow-lg border-b-12 border-red-500">
        <h3 className="text-md text-gray-500 mb-1">Deaths</h3>
        <h1 className="text-4xl font-semibold text-red-500 mb-1">
          <CountUp
            start={0}
            end={todayDeaths}
            duration={2}
            separator=","
            prefix="+"
          />
        </h1>
        <h4 className="text-gray-800">
          <CountUp start={0} end={deaths} duration={2} separator="," /> Total
        </h4>
      </div>
    </div>
  );
}

export default Cards;
