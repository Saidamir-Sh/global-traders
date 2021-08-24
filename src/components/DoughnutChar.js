import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChar() {
    return (
        <div>
            <Doughnut
            data = {{
                labels: [
                    'Bills',
                    'House',
                    'Food',
                    'Health'
                ],
                  datasets: [{
                    data: [30, 45, 10, 5],
                    backgroundColor: [
                       'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                  }]
            }}
            height={400}
            width={400}
            options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}

export default DoughnutChar
