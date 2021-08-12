import React from "react";

function Cards() {
  return (
    <div className="flex space-x-4 border border-black m-4 p-2">
      <div className="flex flex-col bg-white w-1/3 py-3 px-4 font-noto rounded-md shadow-md border-b-12 border-yellow-500">
        <h3 className="text-md text-gray-500 mb-1">Coronavirus Cases</h3>
        <h1 className="text-4xl text-black mb-1">+20.2 k</h1>
        <h4 className="text-gray-800">134487 Total</h4>
      </div>
      <div className="flex flex-col bg-white w-1/3 py-3 px-4 font-noto rounded-md shadow-md border-b-12 border-green-500">
        <h3 className="text-md text-gray-500 mb-1">Recovered</h3>
        <h1 className="text-4xl text-black mb-1">+20.2 k</h1>
        <h4 className="text-gray-800">134487 Total</h4>
      </div>
      <div className="flex flex-col bg-white w-1/3 py-3 px-4 font-noto rounded-md shadow-md border-b-12 border-red-500">
        <h3 className="text-md text-gray-500 mb-1">Deaths</h3>
        <h1 className="text-4xl text-black mb-1">+20.2 k</h1>
        <h4 className="text-gray-800">134487 Total</h4>
      </div>
    </div>
  );
}

export default Cards;
