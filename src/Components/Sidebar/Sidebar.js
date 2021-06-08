import { ExpandMoreOutlined } from '@material-ui/icons'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import './Sidebar.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.18169-9/31131149_10156260698764501_353758902591650707_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=tAJ9V1vxoDsAX98mgoc&_nc_ht=scontent-ort2-1.xx&oh=c73dc62b14114f638d9753d2277073f5&oe=60E5D19D' title='Jorge Carranza'/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
        </div>
    )
}

export default Sidebar
