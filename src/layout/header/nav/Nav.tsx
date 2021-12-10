import './Nav.css';
import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Nav = ({ displayNav }: { displayNav: boolean }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = !!anchorEl;

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav style={{ display: displayNav ? 'flex' : 'none' }}>
            <Link id='logo' to={'/'}>Dance School</Link>
            <div className='navigation'>
                <Link className='navigation-link' to={'/groups'}>Groups</Link>
                <Link className='navigation-link' to={'/'}>Schedule</Link>
                <Link className='navigation-link' to={'/'}>Coaches</Link>
                <Link className='navigation-link' to={'/'}>About</Link>
                <div>
                    <IconButton size={"large"} onClick={handleClick}>
                        <AccountCircleIcon/>
                    </IconButton>
                </div>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>My profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
        </nav>
    );
}

export default Nav;