import React, { useEffect } from "react";

// api
import { fetchGlobalHistoricalData } from "../components/api/index";

// redux
import { historicalDataActions } from "../store/historicalDataSlice";
import { useDispatch, useSelector } from "react-redux";

// chart.js
import { Line } from "react-chartjs-2";

function Chart() {
  const dispatch = useDispatch();
  const fetchedHistoricalData = useSelector(
    (state) => state.historicalData.global
  );

  useEffect(() => {
    const fetchHistoricalDataFromAPI = async () => {
      const data = await fetchGlobalHistoricalData();
      dispatch(historicalDataActions.setHistoricalGlobalData(data));
    };

    fetchHistoricalDataFromAPI();
  }, []);

  console.log(fetchedHistoricalData.cases);

  return (
    <div className="border border-black p-2 mt-4">
      <h2>Global new cases</h2>
      {fetchedHistoricalData.cases && (
        <Line
          data={{
            labels: Object.keys(fetchedHistoricalData.cases),
            datasets: [
              {
                data: Object.values(fetchedHistoricalData.cases),
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default Chart;
