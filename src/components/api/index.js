import axios from "axios";

const url = "https://disease.sh/v3/covid-19";

export const fetchCountries = async () => {
  try {
    const {data} = await axios.get(`${url}/countries`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSummaryData = async () => {
  try {
    const {data} = await axios.get(`${url}/all`)
    return data;
  } catch (error) {
    console.log(error);
  }
};
