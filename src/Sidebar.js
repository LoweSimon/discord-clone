import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <h3>Clever Programmer</h3>
            <ExpandMoreIcon />
        </div> 
        <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>

                <AddIcon className="sidebar_addChannel" />
            </div>
            <div className="sidebar__chanellsList">
                <SidebarChannel />
            </div>
        </div>
        <div className='sidebar__voice'>
            <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
        </div>
        <div className='sidebar__voiceInfo'>
            <h3>Voice Connected</h3>
            <p>Stream</p>
        </div>
        <div className='sidebar__voiceIcons'>
            <InfoOutlinedIcon />
            <CallIcon />
        </div>
    </div>
  )
}

export default Sidebar;
