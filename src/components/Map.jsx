import React from "react";

import ReactTooltip from "react-tooltip";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

// redux
import { useSelector, useDispatch } from "react-redux";
import numeral from "numeral";
import { reactTooltipActions } from "../store/reactTooltipSlice";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function Map() {
  const fetchedCountries = useSelector((state) => state.countries.countries);

  const dispatch = useDispatch();
  const reactTooltipContent = useSelector(
    (state) => state.reactTooltip.content
  );

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
    <div className="bg-gray-100 mx-auto h-2/3 rounded-lg">
      <ComposableMap
        data-tip=""
        projectionConfig={{
          rotate: [-20, 0, 0],
          scale: 220,
        }}
        style={{ height: "100%", width: "100%" }}
        //   width={600}
        //   height={990}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = fetchedCountries.find(
                  (country) =>
                    country.countryInfo.iso3 === geo.properties.ISO_A3
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      const { deaths } = d || 0;
                      dispatch(
                        reactTooltipActions.setContent(
                          deaths !== 0
                            ? `${NAME} - ${numeral(deaths).format(
                                "0,0a"
                              )} deaths`
                            : `no data`
                        )
                      );
                    }}
                    onMouseLeave={() =>
                      dispatch(reactTooltipActions.setContent(""))
                    }
                    fill={d ? colorScale(d["deathsPerOneMillion"]) : "#A5F4F6"}
                    stroke="#EAEAEC"
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                      },
                      pressed: {
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
      <ReactTooltip>{reactTooltipContent}</ReactTooltip>
    </div>
  );
}

export default Map;
