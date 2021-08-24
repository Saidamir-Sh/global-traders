import React from 'react';
import './Dashboard.css';
import LineChar from './LineChar';
import Overview from './Overview';

function Dashboard() {
    return (
        <div className="Dashboard"> 
            <LineChar  />
            <Overview  />
        </div>
    )
}

export default Dashboard
