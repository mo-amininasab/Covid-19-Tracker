import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

// redux
import { useSelector } from "react-redux";
import numeral from "numeral";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function Map({setTooltipContent}) {
  const fetchedCountries = useSelector((state) => state.countries.countries);
  console.log(fetchedCountries);

  const colorScale = scaleQuantile()
    .domain(fetchedCountries.map((country) => country.deathsPerOneMillion))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618",
    ]);

  return (
    <div className="border border-black">
      <ComposableMap
        data-tip=""
        projectionConfig={
          {
            // rotate: [33, 65, 0],
            // scale: 700,
            // center: [0, 0]
          }
        }
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = fetchedCountries.find(
                  (country) => country.countryInfo.iso3 === geo.properties.ISO_A3
                );
                // console.log(d);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      const { deaths } = d || 0;
                      setTooltipContent(
                        deaths !== 0
                          ? `${NAME} - ${numeral(deaths).format('0,0a')} deaths`
                          : `no data`
                      );
                    }}
                    onMouseLeave={() => setTooltipContent("")}
                    fill={d ? colorScale(d["deathsPerOneMillion"]) : "#A5F4F6"}
                    stroke="#EAEAEC"
                    style={{
                      default: {
                        // fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        // fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        // fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default Map;
