import './Nav.css';
import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
            <a href='#' id='logo'>Dance School</a>
            <div className='navigation'>
                <div className='navigation-link' onClick={handleClick}>Link1</div>
                <div className='navigation-link' onClick={handleClick}>Link2</div>
                <div className='navigation-link' onClick={handleClick}>Link3</div>
                <div className='navigation-link' onClick={handleClick}>Link4</div>
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
        </nav>
    );
}

export default Nav;