import React from 'react'
import { Typography, useTheme, Box,MenuItem ,TextField, IconButton } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FindInPageIcon from '@mui/icons-material/FindInPage';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CustomerSupport() {
  /** @type {import('@mui/material').SxProps} */
  const styles = {
    pageTitle: {
        mb: 2
    },
    pageTitleIcon: {
      fontSize: 'inherit'
    },
    h5Wrap: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    select: {
      mb: 6
    }
  }
  const theme = useTheme();

  const currencies = [
    {
      value: 'Dashboard',
      label: 'Dashboard'
    },
    {
      value: 'Sales',
      label: 'Sales'
    },
    {
      value: 'Inventory',
      label: 'Inventory'
    },
    {
      value: 'Customers',
      label: 'Customers'
    },
    {
      value: 'Profile',
      label: 'Profile'
    }
  ];




  return (
    <Box >
      <Grid container spacing={2}>
        <Grid item xs={12} sx={styles.h5Wrap}>
          <Typography sx={styles.pageTitle} variant='h5'>Customer Support <SupportAgentIcon sx={styles.pageTitleIcon}/></Typography>
        </Grid>

        <Grid item xs={8}>
          <Box>
            <TextField
              sx={styles.select}
              id="outlined-select-issue"
              select fullWidth
              label="Select Issue Page"
              defaultValue="Dashboard"
              helperText="Please select a Feature Page where you are facing issue"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="outlined-textarea"
              label="Issue Message"
              multiline
              fullWidth
              rows={4}
              helperText="Please write in brief regarding issue that you are facing"
              placeholder="Please write in brief regarding issue that you are facing"
              defaultValue="Hi, I'm facing issue in the following feature page - "
            />
          </Box>

        </Grid>
        <Grid item xs={4}>
          <Item>
            <Box component='div'>
                <Box component='div'>
                <FindInPageIcon/>
                <h3>Unrivaled documentation</h3>
                </Box>
                <p>The answer to your problem can be found in our documentation. How can we be so sure? Because our docs boast over 2,000 lines.</p>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
