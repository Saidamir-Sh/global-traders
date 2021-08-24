import React from 'react';
import './Overview.css';
import { useEffect, useState } from 'react';


function Overview() {
    // values of card
    const [exchange, updateExchange] = useState(0);
    const [revenue, updateRevenue] = useState(0);
    const [revenuePerShare, updateRevenuePerShare] = useState(0);
    const [eps, updateEPS] = useState(0);
    useEffect(function gettOverview() {
        async function fetchOverview() {

            
            
        //-- ApiKey, ApiLink, stockTricker
          const API_KEY = 'WE0RQ1YO4KXQG6QM';
          let STOCK_SYMBOL = 'AMZN';
          let API_CALL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${STOCK_SYMBOL}&apikey=${API_KEY}`;

          //-- fetching Data 
          const responsePol = await fetch(API_CALL);
          const dataPol = await responsePol.json();

          // updating states from fetched data
          updateExchange(dataPol.Exchange);
          updateRevenue(dataPol.RevenueTTM.slice(0, 3))
          updateRevenuePerShare(dataPol.RevenuePerShareTTM)
          updateEPS(dataPol.EPS)
          console.log(dataPol);

            
        };
        fetchOverview();
    }, [updateExchange, updateRevenue, updateRevenuePerShare, updateEPS])


    return (
        <div className="Overview">
            <div className="overview__card">
                <p>Exchange :</p>
                <h6>{exchange}</h6>
            </div>
            <div className="overview__card">
                <p>Revenue (TTM) :</p>
                <h6>${revenue} B</h6>
            </div>
            <div className="overview__card">
                <p>Revenue per share (TTM) :</p>
                <h6>{revenuePerShare}</h6>
            </div>
            <div className="overview__card">
                <p>EPS :</p>
                <h6>{eps}</h6>
            </div>
        </div>
    )
}

export default Overview
