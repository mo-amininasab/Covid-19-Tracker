import React, { useState } from "react";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import "./Header.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import classes from "./Header.module.css";

function Header() {
  const [selectedCountry, setSelectedCountry] = useState("global");

  const fetchedCountries = useSelector((state) => state.countries.countries);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box className={classes.header}>
      <h1 className={classes['form-control__title']}>COVID-19 TRACKER</h1>
      <FormControl variant="outlined" className={classes["form-control"]}>
        <InputLabel id="demo-simple-select-outlined-label">Area</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedCountry}
          onChange={handleChange}
          label="Area"
        >
          <MenuItem key={0} value="global">
            global
          </MenuItem>
          {fetchedCountries.map((country, index) => (
            <MenuItem key={index} value={country.countryInfo.iso3}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Header;
