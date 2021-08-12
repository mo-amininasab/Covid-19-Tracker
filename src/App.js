import React, { useEffect } from "react";

import { fetchCountries } from "./components/api/index";

import { countriesActions } from "./store/countriesSlice";
import { useDispatch, useSelector } from "react-redux";

// components
import Header from "./components/Header";

import classes from './App.css'

function App() {
  const dispatch = useDispatch();
  const fetchedCountries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      const data = await fetchCountries();
      dispatch(countriesActions.setCountries(data));
    };

    fetchCountriesFromAPI();
  }, []);

  console.log(fetchedCountries);

  return (
    <div className={classes.App}>
      <Header />
    </div>
  );
}

export default App;
