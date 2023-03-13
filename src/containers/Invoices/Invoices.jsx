import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Invoices() {
  /** @type {import('@mui/material').SxProps} */
  const styles = {
    pageTitle: {
        mb: 2
    }
  }

  return (
    <Box>
      <Typography sx={styles.pageTitle} variant='h5'>Invoices</Typography>
    </Box>
  )
}
