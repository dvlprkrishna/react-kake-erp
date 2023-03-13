import { AppBar, Box, IconButton, Toolbar, Typography, Badge } from '@mui/material'
import React from 'react'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import {useProSidebar } from 'react-pro-sidebar'

export default function AppHeader() {

/** @type {import('@mui/material').SxProps} */
  const styles = {
    appBar: {
      bgcolor: 'neutral.main'
    },
    appLogo: {
      width: 150,
      marginLeft: 2,
      cursor: 'pointer'
    }
  }


  const {collapseSidebar, toggleSidebar, broken} = useProSidebar();

  return (
    <AppBar sx={styles.appBar} position='sticky'>
      <Toolbar>
        <IconButton onClick={()=> broken? toggleSidebar(): collapseSidebar()} color="secondary">
          <MenuTwoToneIcon/>
        </IconButton>
        <Box component='img' sx={styles.appLogo} src="/src/assets/sample-logo.png" />
        <Box sx={{flexGrow: 1}}/>
        <IconButton title='Notifications' color='secondary'>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon/>
          </Badge>
        </IconButton>
        <IconButton title="Settings" color="secondary">
          <SettingsIcon />
        </IconButton>
        <IconButton title="Sign Out" color="secondary">
            <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
