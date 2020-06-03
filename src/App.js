import React from "react";
import "./App.css";
import Histogram from "react-chart-histogram";
import data from "./data.json";
import {
  getPostCodeArray,
  getFormattedData,
  getHistogramLabels,
  getHistogramData,
  getTop5Postcodes,
} from "./helpers.js";
function App() {
  // TODO : Abstract this into a single function call
  const list = getPostCodeArray(data.data.list);
  const formattedData = getFormattedData(list);

  const labels = getHistogramLabels(formattedData);
  const histogramData = getHistogramData(formattedData);

  const top5Postcodes = getTop5Postcodes(formattedData);
  const top5Labels = getHistogramLabels(top5Postcodes);
  const top5HistogramData = getHistogramData(top5Postcodes);

  const options = { fillColor: "#0000FF", strokeColor: "#0000FF" };
  return (
    <div>
      <h1>Top 5</h1>
      <Histogram
        xLabels={top5Labels}
        yValues={top5HistogramData}
        width="1080"
        height="680"
        options={options}
      />
      <h1>Totals</h1>
      <Histogram
        xLabels={labels}
        yValues={histogramData}
        width="1080"
        height="680"
        options={options}
      />
    </div>
  );
}

export default App;
