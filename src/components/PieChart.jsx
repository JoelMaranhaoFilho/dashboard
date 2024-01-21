import React from "react";
import Chart from "react-apexcharts";

const CustomBarChart = (props) => {
  const state = {
    series: [
      {
        data: props.data
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 250,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  return (
   
        <Chart
          options={state.options}
          series={state.series}
          type="candlestick"
          height={250}
          width={450}
        />
      
  );
};

export default CustomBarChart;
