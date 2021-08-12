import React, { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const [selectedCountry, setSelectedCountry] = useState("global");

  const fetchedCountries = useSelector((state) => state.countries.countries);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="flex font-noto p-2 m-4 border border-black justify-between items-center">
      <h1 className="text-xl sm:text-3xl font-semibold ">Covid-19 Tracker</h1>
      <select
        className="px-3 py-1 w-20 sm:w-28 rounded-md"
        value={selectedCountry}
        onChange={handleChange}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country.countryInfo.iso3}>
            {country.country}
          </option>
        ))}
        <option value="">Helo</option>
        <option value="">Helo</option>
      </select>
    </div>
  );
}

export default Header;
