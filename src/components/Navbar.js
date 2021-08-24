import React from 'react';
import './Navbar.css'; 
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import rocket from '../img/rocket.png';
import { purple } from '@material-ui/core/colors';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbar__title">
                <h1>Global Traders</h1>
            </div>
            <div className="navbar__list">
                <ul>
                    <li><DashboardRoundedIcon style={{ color: purple[200] }} /> <p>Dashboard</p></li>
                    <li><CreditCardRoundedIcon style={{ color: purple[200] }} /> <p>Cards</p></li>
                    <li><BarChartRoundedIcon style={{ color: purple[200] }}/> <p>Statistics</p></li>
                    <li><PersonRoundedIcon style={{ color: purple[200] }}/> <p>Profile</p></li>
                    <li><TuneRoundedIcon style={{ color: purple[200] }}/> <p>Settings</p></li>
                </ul>
            </div>
            <div className="navbar__card">
                <div className="card__title">
                    <p>Use our Premium feature now</p>
                </div>
                <div className="card__img">
                    <img src={ rocket } alt="Premium image"/>
                </div>
                <div className="card__button">
                    <button>Get Premium</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

/* <DashboardRoundedIcon style={{ color: purple[200] }} />  */