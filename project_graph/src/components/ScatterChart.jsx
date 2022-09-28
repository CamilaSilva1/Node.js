// Created By Camila Silva
// Since 13/06/2022
// Using ApexCharts.js with React.js
// This script is responsable for creating the scatter graph

// imports
import React from 'react';
import Chart from 'react-apexcharts';

// importing styles
import styles from '../modules/ScatterChart.module.css'

class ScatterChart extends React.Component{
    constructor(props){
        super(props);

        // creating a state that will store all the data that graph
        // will need
        this.state = {

            //Setting the name, color and data that will be on the chart
            series: [
                {
                name: "Empresa A",
                color: '#f77825',
                data: [
                    [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]],
                
              },{
                name: "Empresa B",
                color: '#9e0004',
                data: [
                    [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]],
              },{
                name: "Empresa C",
                color: '#8fbe00',
                data: [
                    [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
              }],
            
            // inside options you will have all the styling options you will have 
            // graph
            options: {
                // setting the chart type, height and color
                chart:{
                    height: 350,
                    width: 550,
                    type: 'scatter',
                    zoom:{
                        enabled: false          
                    }            
                },
                // adjusting and setting title that will show on the chart
                title:{
                    text: 'Scatter',
                    style: {
                        fontSize: '24px',
                        fontFamily: 'Roboto',
                        color: '#332747'
                    }
                },
                // inserting the data that will be the x axis of the graph
                // setting the number distance and labels
                xaxis:{
                    tickAmount: 7,
                    labels:{
                        formatter: function(val){
                            return parseFloat(val).toFixed(1)
                        }
                    }
                },
                //adjusting the information that will be on the y axis 
                //setting the number distance
                yaxis:{
                    tickAmount: 7
                }
            },
        }
    }
    // rendering the graph with the dimensions and adding
    // css styling
    render(){
        return(
            <div className={styles.scatter}>
            <Chart  
                   options={this.state.options}
                   series={this.state.series}
                   type="scatter"
                   width={550}
                   height={350}
            />
            </div>
        )
    }
}

export default ScatterChart;