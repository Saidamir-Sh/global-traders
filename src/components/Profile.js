import React from 'react';
import './Profile.css';
import DoughnutChar from './DoughnutChar';
import profile from '../img/profile.jpg';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import PaymentIcon from '@material-ui/icons/Payment';
import { purple } from '@material-ui/core/colors';

function Profile() {
    return (
        <div className="Profile">
            <div className="profile__card">
                <img src={profile}/>
                <p>Phillips</p>
                <small>Investor</small>
                <div className="profile__icons">
                    <i><NotificationsRoundedIcon fontSize="small" style={{ color: purple[200] }}/></i>
                    <i><EventNoteRoundedIcon fontSize="small" style={{ color: purple[200] }} /></i>
                    <i><PaymentIcon fontSize="small" style={{ color: purple[200] }} /></i>
                </div>
            </div>
            <div className="doughnutchar">
                <p>Expanses</p>
                <DoughnutChar />
            </div>
        </div>
    )
}

export default Profile
