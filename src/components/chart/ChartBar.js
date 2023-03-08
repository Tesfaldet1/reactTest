import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillheight = "0%";
  if (props.max > 0) {
    barFillheight = Math.round(props.value / props.maxValue) * 100 + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{ hight: barFillheight }}></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
