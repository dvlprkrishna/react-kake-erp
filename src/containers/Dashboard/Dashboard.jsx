import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function Dashboard() {
  /** @type {import('@mui/material').SxProps} */
  const styles = {
    pageTitle: {
        mb: 2
    },
    columnContainer: {
      columns: '280px 3',
      maxWidth: 1400
    }
  }


  return (
    <Box>
      <Typography sx={styles.pageTitle} variant='h5'>Dashboard</Typography>
      <Box sx={styles.columnContainer}>
        <Card>

        </Card>
      </Box>
    </Box>
  )
}
