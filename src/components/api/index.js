import axios from "axios";

const url = "https://disease.sh/v3/covid-19";

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSummaryData = async () => {
  try {
    const { data } = await axios.get(`${url}/all`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGlobalHistoricalData = async (country) => {
  try {
    if (country === "global") {
      const { data } = await axios.get(`${url}/historical/all?lastdays=120`);
      return data;
    } else {
      const { data } = await axios.get(`${url}/historical?lastdays=120`);
      const selectedCountryData = data.find(
        (_country) => _country.country === country
      );
      if (!selectedCountryData) {
        return null;
      }
      return selectedCountryData.timeline;
    }
  } catch (error) {
    console.log(error);
  }
};
