import React, { useEffect } from "react";

// api
import { fetchCountries, fetchSummaryData } from "./components/api/index";

// redux
import { countriesActions } from "./store/countriesSlice";
import { summaryDataActions } from "./store/summarySlice";
import { useDispatch } from "react-redux";

// components
import Header from "./components/Header";
import Cards from "./components/Cards";
import Table from "./components/Table";
import Map from "./components/Map";
import Chart from "./components/Chart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      const data = await fetchCountries();
      dispatch(countriesActions.setCountries(data));
    };

    const fetchSummaryDataFromAPI = async () => {
      const data = await fetchSummaryData();
      dispatch(summaryDataActions.setSummaryData(data));
    };

    fetchCountriesFromAPI();
    fetchSummaryDataFromAPI();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left */}
      <div className="lg:w-3/4 lg:h-screen m-3">
        <Header />
        <Cards />
        <Map />
      </div>

      {/* Right */}
      <div className="lg:min-w-min lg:h-screen lg:w-1/4 m-3 mt-0 lg:m-3 lg:ml-0">
        <Table />
        <Chart />
      </div>
    </div>
  );
}

export default App;
