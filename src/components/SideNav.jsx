import React from 'react'

import { Menu, MenuItem, Sidebar, SubMenu,  useProSidebar } from "react-pro-sidebar";
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import GroupsIcon from '@mui/icons-material/Groups';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WindowIcon from '@mui/icons-material/Window';
import CakeIcon from '@mui/icons-material/Cake';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

import { Typography, useTheme, Box, Avatar, Tooltip, Icon} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function SideNav() {
    const {collapsed} = useProSidebar();
    const location = useLocation();
    const theme = useTheme();

    /** @type {import('@mui/material').SxProps} */
    const styles = {
    avatarContainer: {
      display: 'flex',
      alignItems: 'center',
      my: 5,
      flexDirection: 'column'
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    avatarName: {
        mt: 1
    }
  }



  return (
    <div >
        <Sidebar breakPoint='md' backgroundColor={theme.palette.neutral.light}>
        <Box sx={styles.avatarContainer}>
            <Avatar sx={styles.avatar} alt="Profile Picutre" src="src/assets/avatars/avatar.jpg"/>
            { !collapsed ?  <Typography variant='body2' sx={styles.avatarName}>Krishna Sahu</Typography>: null}
            { !collapsed ?  <Typography variant='caption' >Access Level - <span style={{fontWeight: 'bold'}}>ADMIN</span> </Typography>: null }
        </Box>
        <Menu menuItemStyles={{
            button: ({active}) => {
                return {
                    backgroundColor: active? theme.palette.neutral.medium : undefined
                }
            }
        }}>
            <MenuItem active={location.pathname === '/'} icon={<WindowIcon sx={{ color: theme.palette.icon.secondary }}/>} component={<Link to="/" />}>
                <Typography variant='body2'>Dashboard</Typography>
            </MenuItem>
            <MenuItem active={location.pathname === '/sales'} icon={<CurrencyRupeeIcon sx={{ color: theme.palette.icon.secondary }}/>} component={<Link to="/sales" />}>
                <Typography variant='body2'>Sales</Typography>
            </MenuItem>
            <SubMenu icon={<SourceOutlinedIcon sx={{ color: theme.palette.icon.secondary }}  />} label="Inventory">
                <MenuItem active={location.pathname === '/inventory'} icon={<CakeIcon sx={{ color: theme.palette.icon.secondary }}/>} component={<Link to="/inventory" />}>
                    <Typography variant='body2'>All Cakes</Typography>
                </MenuItem>
                <MenuItem active={location.pathname === '/ingredients'} icon={<DinnerDiningIcon sx={{ color: theme.palette.icon.secondary }}/>} component={<Link to="/inventory" />}>
                    <Typography variant='body2'>Raw Ingredients</Typography>
                </MenuItem>
                <MenuItem active={location.pathname === '/partyItems'} icon={<CelebrationIcon sx={{ color: theme.palette.icon.secondary }} />} component={<Link to="/inventory" />}>
                    <Typography variant='body2'>Party Items</Typography>
                </MenuItem>
            </SubMenu>
            <MenuItem active={location.pathname === '/invoices'} icon={<ReceiptLongIcon sx={{ color: theme.palette.icon.secondary }}/>} component={<Link to="/invoices" />}>
                <Typography variant='body2'>Invoices</Typography>
            </MenuItem>
            <MenuItem active={location.pathname === '/customers'} icon={<GroupsIcon sx={{ color: theme.palette.icon.secondary }}/>} component={<Link to="/customers" />}>
                <Typography variant='body2'>Customers</Typography>
            </MenuItem>
            <MenuItem active={location.pathname === '/customerSupport'} icon={<SupportAgentIcon sx={{ color: theme.palette.icon.secondary }}/>} component={<Link to="/customerSupport" />}>
                <Typography variant='body2'>Customer Support</Typography>
            </MenuItem>
        </Menu>
    </Sidebar>
    </div>
  )
}
