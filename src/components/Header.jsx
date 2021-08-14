import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { countriesActions } from "../store/countriesSlice";

function Header() {
  const fetchedCountries = useSelector((state) => state.countries.countries);
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(countriesActions.setSelectedCountry(event.target.value));
  };

  return (
    <div className="flex font-noto p-2 justify-between items-center">
      <h1 className="text-xl sm:text-3xl font-semibold ">Covid-19 Tracker</h1>
      <select
        className="px-3 py-1 w-20 sm:w-36 rounded-md"
        value={selectedCountry}
        onChange={handleChange}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Header;
