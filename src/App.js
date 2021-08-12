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
    <div>
      <Header />
      <Cards />
    </div>
  );
}

export default App;
