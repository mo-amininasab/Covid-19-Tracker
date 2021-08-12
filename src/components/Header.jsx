import React, { useState } from "react";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import "./Header.module.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    justifyContent: "space-between",
    padding: '15px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
}));

function Header() {
  const classes = useStyles();

  const [selectedCountry, setSelectedCountry] = useState("global");

  const fetchedCountries = useSelector((state) => state.countries.countries);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box className={classes.header}>
      <h1>COVID-19 TRACKER</h1>
      <FormControl variant="outlined" className={classes.formControl}>
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
