import React, { useEffect } from "react";

import numeral from "numeral";

// api
import { fetchGlobalHistoricalData } from "../components/api/index";

// redux
import { historicalDataActions } from "../store/historicalDataSlice";
import { useDispatch, useSelector } from "react-redux";

// chart.js
import { Line } from "react-chartjs-2";

const options = {
  plugins: {
    legend: false,
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += numeral(context.parsed.y).format("+0,0");
          }
          return label;
        },
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,
  scales: {
    x: [
      {
        type: "time",
        time: {
          displayFormats: {
            quarter: "MMM YYYY",
          },
        },
      },
    ],

    y: {
      grid: {
        display: false,
      },
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, values) {
          return numeral(value).format("0a");
        },
      },
    },
  },
};

const buildChartData = (data, casesType = "cases") => {
  const chartData = [];
  let lastDataPoint;

  if (data) {
    for (let date in data[casesType]) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  } else {
    return [{ x: 0, y: 0 }];
  }
};

function Chart() {
  const dispatch = useDispatch();
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );

  const fetchedHistoricalData = useSelector(
    (state) => state.historicalData.global
  );
  const b = fetchedHistoricalData;

  useEffect(() => {
    const fetchHistoricalDataFromAPI = async () => {
      const data = await fetchGlobalHistoricalData(selectedCountry);
      const chartData = buildChartData(data);
      dispatch(historicalDataActions.setHistoricalGlobalData(chartData));
    };

    fetchHistoricalDataFromAPI();
  }, [selectedCountry]);


  return (
    <div className="p-2 mt-3 bg-gray-50 rounded-md">
      <h2 className="font-noto mb-2 text-gray-600">
        {selectedCountry} new cases
      </h2>
      {fetchedHistoricalData && (
        <Line
          data={{
            datasets: [
              {
                data: b,
                backgroundColor: "rgba(245,158,11,0.5)",
                borderColor: "#F59E0B",
                fill: true,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default Chart;
