import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { Videos, Sidebar } from '../components'

const Feed = () => {
  return (
    <Stack direction={{xs: 'column', md: 'row'}}>
      <Box sx={{height: {sx: 'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0 , md: 2}}}>
        <Sidebar />
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright © 2022 NABIL YAHYAOUI
        </Typography>
      </Box>
      <Box sx={{height: {sx: 'auto', md:'92vh'}}}>
        <Typography></Typography>
        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed