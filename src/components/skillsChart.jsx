import React, { Component } from "react";

import Chart from "chart.js";

export default class SkillsChart extends Component {
  state = {
    hoveredCell: false,
  };
  componentDidMount() {
    Chart.defaults.global.defaultFontColor = '#fff';
    var ctx = document.getElementById("myChart");
    var myRadarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Running", "Swimming", "Eating", "Cycling"],
  
        datasets: [
          {
            label: "Level of Knowledge",
            data: [20, 10, 40, 2],
            backgroundColor: ["#9ef01a", "#9ef01a", "#9ef01a", "#9ef01a"],
            borderColor: "#9ef01a",
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      defaults:{global:{defaultFontColor : '#fff'}},
      options: {
        title: {
          display: true,
          text: "Custom Chart Title",
        },
        responsive: true,
        fontColor:"white",
        legend: {
          fontColor: "white",
          labels: {
            // This more specific font property overrides the global property
            fontColor: "white",
          },
        },
        maintainAspectRatio: true,
			spanGaps: false,

        scale: {
          gridLines: {
            color: "white",
            backgroundColor: "white",
            ticks: {
              fontColor: "white",
              backgroundColor: "transparent",
            },
          },
          angleLines: {
            display: true,
            color: "white",
            ticks: {
              fontColor: "white",
              backgroundColor: "transparent",
            },
          },
          ticks: {
            fontColor: "white",
            backgroundColor: "transparent",
            step: 20,
            display: false,
            suggestedMin: 50,
            suggestedMax: 100,
          },
        },
      },
    });
    
  }
  render() {
    const { hoveredCell } = this.state;

    return <canvas id="myChart" width="400" height="400"></canvas>;
  }
}
