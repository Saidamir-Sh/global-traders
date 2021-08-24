import React from 'react';
import './LineChar.css';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'

function LineChar() {

    const [chartXValues, setChartXValues] = useState([]);
    const [chartYValues, setChartYValues] = useState([]);

    useEffect(function effectFunction() {
        async function fetchStocks() {
    
           //-- ApiKey, ApiLink, stockTricker
          const API_KEY = 'WE0RQ1YO4KXQG6QM';
          let timeInterval = "30min";
          let STOCK_SYMBOL = 'AMZN';
          let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${STOCK_SYMBOL}&outputsize=compact&apikey=${API_KEY}`
          let chartXValuesArr =  [];
          let chartYValuesArr =   [];
    
          //--fetching data
          const response = await fetch(API_CALL);
          const data = await response.json();
          console.log(data);
    
          //--taking X and Y values
          for (var key in data['Time Series (Daily)']) {
            chartXValuesArr.push(key);
            chartYValuesArr.push(data['Time Series (Daily)'][key]['1. open']);
          };
          setChartXValues(chartXValuesArr);
          setChartYValues(chartYValuesArr);
    
        }
    
        fetchStocks();
      }, [setChartXValues, setChartYValues])

    return (
        <div className="LineChar">
            <Line
              data = {{
                labels : chartXValues,
                datasets: [{
                  label: 'Amazon stocks (Daily)',
                  data: chartYValues,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
              }}
              height={400}
              width={400}
              options={{ maintainAspectRatio: false }}
              
            />
        </div>
    )
}

export default LineChar
