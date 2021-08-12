import React, { useEffect } from "react";

// api
import { fetchCountries } from "./components/api/index";
import { fetchSummaryData } from "./components/api/index";

// redux
import { countriesActions } from "./store/countriesSlice";
import { summaryDataActions } from "./store/summarySlice";
import { useDispatch, useSelector } from "react-redux";

// components
import Header from "./components/Header";
import Cards from "./components/Cards";
import Table from './components/Table'
import Map from './components/Map'

function App() {
  const dispatch = useDispatch();
  const fetchedCountries = useSelector((state) => state.countries.countries);
  const fetchedSummaryData = useSelector(
    (state) => state.summaryData.summaryData
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

    fetchCountriesFromAPI();
    fetchSummaryDataFromAPI();
  }, []);

  console.log(fetchedSummaryData);

  console.log(fetchedCountries);

  return (
    <div className="flex h-screen">

      {/* Left */}
      <div className="w-3/4 border border-black p-2 m-3">
        <Header />
        <Cards />
        <Map />
      </div>

      {/* Right */}
      <div className="w-1/4 border border-black p-2 m-3 ml-0">
        <Table />
      </div>
    </div>
  );
}

export default App;
