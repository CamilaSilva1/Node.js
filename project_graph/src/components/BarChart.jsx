// Created By Camila Silva
// Since 13/06/2022
// Using ApexCharts.js with React.js
// This script is responsible for creating the bar graph

// imports
import React from 'react';
import Chart from 'react-apexcharts';

// importing styles
import styles from '../modules/BarChart.module.css'

class BarChart extends React.Component{
    constructor(props){
        super(props);

        // creating a state that will store all the data that graph
        // will need
        this.state = {
            // Setting the name and data that will be on the chart
            series:[
                {
                    name: 'População',
                    data: [114.352, 64.723, 52.405, 379.297, 103.102, 
                           433.656, 92.060, 15.069, 91.824, 35.558],
                }
            ],
            // inside options you will have all the styling options you will have 
            // graph
            options: {
                // setting the chart type, height and color
                chart: {
                    type: 'bar',
                    height: 350,
                    width: 550,
                    color: '#940533',
                  },
                  // adjusting bar
                  plotOptions: {
                    bar: {
                      borderRadius: 4,
                      horizontal: true,
                    }      
                  },
                  // color fill of bars
                  fill: {
                    colors: ['#551bb3']
                  },
                  // turning off bar info labels
                  dataLabels: {
                    enabled: false
                  },
                  // adding and adjusting the chart title
                  title:{
                    text: 'Barras',
                    style:{
                      fontSize: '24px',
                      fontFamily: 'Roboto',
                      color: '#332747'
                    }
                  },
                  // inserting the data that will be the x axis of the graph
                  xaxis: {
                    categories: ['Ourinhos', 'Bertioga', 'Campos do Jordão',
                     'Bauru', 'Itanhaém', 'Santos', 'São Roque',
                      'Ipaussu', 'Ubatuba', 'Bariri'
                    ],
                  },  
                  //adjusting the information that will be on the y axis
                  yaxis:{
                    labels:{
                      style:{
                        fontSize: '14px',
                        fontFamily: 'Roboto',
                        fontWeight: 400
                      }
                    }
                  },
            },
        };
    }
    // rendering the graph with the dimensions and adding
    // css styling 
    render(){
        return(
          <div className={styles.barGraph}>
            <Chart 
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width={550}
                height={350}
            />
          </div>
        )
    }
}

export default BarChart;