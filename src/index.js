import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

let { coloursByPopularity: hcol } = honda;
let { coloursByPopularity: tcol } = tesla;
let teslaTopColour, hondaTopColour;
teslaTopColour = tcol[0];
hondaTopColour = hcol[0];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
