import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import "./Header.module.css";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();
  const [selectedCountry, setSelectedCountry] = useState("global");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <Box
      display="flex"
      flexDirection="row"
      p={1}
      m={1}
      bgcolor="background.paper"
    >
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
          <MenuItem value="global">global</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Header;
