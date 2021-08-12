import React, { useState } from "react";
import { useSelector } from "react-redux";


import classes from "./Header.module.css";

function Header() {
  const [selectedCountry, setSelectedCountry] = useState("global");

  const fetchedCountries = useSelector((state) => state.countries.countries);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className='text-red-500'>Hello</div>
  );
}

export default Header;
