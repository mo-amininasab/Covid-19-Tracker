import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";


// api
import {
  fetchCountries,
  fetchSummaryData,
  fetchGlobalHistoricalData,
} from "./components/api/index";

// redux
import { countriesActions } from "./store/countriesSlice";
import { summaryDataActions } from "./store/summarySlice";
import { historicalDataActions } from "./store/historicalDataSlice";
import { useDispatch, useSelector } from "react-redux";

// components
import Header from "./components/Header";
import Cards from "./components/Cards";
import Table from "./components/Table";
import Map from "./components/Map";
import Chart from "./components/Chart";

function App() {
  const [tooltipContent, setTooltipContent] = useState("");
  
  const dispatch = useDispatch();
  const fetchedCountries = useSelector((state) => state.countries.countries);
  const fetchedSummaryData = useSelector(
    (state) => state.summaryData.summaryData
  );
  const fetchedHistoricalData = useSelector(
    (state) => state.historicalData.global
  );

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      const data = await fetchCountries();
      dispatch(countriesActions.setCountries(data));
    };

    const fetchSummaryDataFromAPI = async () => {
      const data = await fetchSummaryData();
      dispatch(summaryDataActions.setSummaryData(data));
    };

    // const fetchHistoricalDataFromAPI = async () => {
    //   const data = await fetchGlobalHistoricalData();
    //   dispatch(historicalDataActions.setHistoricalGlobalData(data));
    // };

    fetchCountriesFromAPI();
    fetchSummaryDataFromAPI();
    // fetchHistoricalDataFromAPI();
  }, []);

  
  // console.log(fetchedCountries);
  // console.log(fetchedSummaryData);
  
  // console.log(fetchedHistoricalData);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left */}
      <div className="lg:w-3/4 border border-black p-2 m-3">
        <Header />
        <Cards />
        <Map setTooltipContent={setTooltipContent}/>
        <ReactTooltip>{tooltipContent}</ReactTooltip>
      </div>

      {/* Right */}
      <div className="min-w-min lg:w-1/4 border border-black p-2 m-3 ml-0">
        <Table />
        <Chart />
      </div>
    </div>
  );
}

export default App;
