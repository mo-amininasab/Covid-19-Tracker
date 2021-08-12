import React from "react";
import { useSelector } from "react-redux";

import CountUp from "react-countup";

function Table() {
  const fetchedCountries = useSelector((state) => state.countries.countries);
  const sortedFetchedCountries = [...fetchedCountries];
  sortedFetchedCountries.sort((a, b) => (a.cases > b.cases ? -1 : 1));

  return (
    <div className="border-gray-200 rounded-lg h-2/3 overflow-y-scroll">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Country
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cases
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedFetchedCountries.map((country, index) => (
            <tr key={index}>
              <td className="px-3 py-2">
                <div className="flex items-center">
                  <div className="text-sm font-noto text-gray-900">
                    {country.country}
                  </div>
                </div>
              </td>
              <td className="px-3 py-2">
                <div className="text-sm text-gray-900">
                  <CountUp
                    start={0}
                    end={country.cases}
                    duration={2}
                    separator=","
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
