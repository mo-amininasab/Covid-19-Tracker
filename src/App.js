import React, { useEffect } from "react";

// api
import { fetchCountries } from "./components/api/index";

// redux
import { countriesActions } from "./store/countriesSlice";
import { useDispatch, useSelector } from "react-redux";

// components
import Header from "./components/Header";
import Cards from "./components/Cards";

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
    <div>
      <Header />
      <Cards />
    </div>
  );
}

export default App;
