import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import { logo } from '../utils/constants'

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{position:'sticky', background: '#000', justifyContent: 'space-between', top: 0}}
      >
      <Link to='/'>
        <img src={logo} alt= "logo" height={45}/>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar