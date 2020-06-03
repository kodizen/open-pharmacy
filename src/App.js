import React from "react";
import "./App.css";
import Histogram from "react-chart-histogram";
import data from "./data.json";
import {
  getPostCodeArray,
  getFormattedData,
  getHistogramLabels,
  getHistogramData,
} from "./helpers.js";
function App() {

  // TODO : Abstract this into a single function call
  const list = getPostCodeArray(data.data.list);
  const formattedData = getFormattedData(list);

  const labels = getHistogramLabels(formattedData);
  const histogramData = getHistogramData(formattedData);

  const options = { fillColor: "#FFFFFF", strokeColor: "#0000FF" };
  return (
    <div>
      <Histogram
          xLabels={labels}
          yValues={histogramData}
          width='1080'
          height='680'
          options={options}
      />
    </div>
  );
}

export default App;
