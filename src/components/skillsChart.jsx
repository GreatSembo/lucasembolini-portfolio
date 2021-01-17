import React, { Component } from "react";
import {Box} from "@chakra-ui/react";
import Chart from "chart.js";
import { flattenDiagnosticMessageText } from "typescript";

export default class SkillsChart extends Component {
  state = {
    hoveredCell: false,
  };
  componentDidMount() {
    Chart.defaults.global.defaultFontColor = '#fff';
    Chart.defaults.global.defaultFontSize=16;
    Chart.defaults.global.fontSize=16;
    var ctx = document.getElementById("myChart");
    var myRadarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Javascript","React", "Java", "C#", "AWS","CSS",],
  
        datasets: [
          {
            label: "Level of Knowledge",
            data: [70, 90,65, 70, 60,  50],
            backgroundColor:"#2E8B57",
            borderColor: "#9ef01a",
            borderWidth: 3,
            fill: true ,
            fillColor :"rgba(151,205,187,0.2)",
            pointBorderColor:"#ccff33",
            pointBackgroundColor:"#9ef01a",
            pointBorderWidth:1,
            spanGaps:true,
            
          },
        ],
      },
      options: {
        fontSize:16,
        title: {
          display: true,
          text: "My Main Skills",
        },
        fontSize:16,
        fontColor:"white",
        legend: {
          fontColor: "white",
          labels: {
            fontColor: "white",
          },
        },
        maintainAspectRatio: true,

        scale: {
          pointLabels: { fontSize:18 },
          gridLines: {
            color: "white",
            backgroundColor: "white",
            ticks: {
              fontColor: "white",
              backgroundColor: "transparent",
              fontSize:16,
            },
            size:1,
          },
          angleLines: {
            display: true,
            color: "gray",
          },
          ticks: {
            fontSize:16,

            fontColor: "white",
            backgroundColor: "transparent",
            display: false,
            suggestedMin: 50,
            suggestedMax: 100,
            step:10,
            beginAtZero: true,
            max:100
          },
        },
      },
    });
    
  }
  render() {

    return <Box height="60vh" width="60vh"><canvas id="myChart" width="500" height="500"></canvas></Box>
  }
}
