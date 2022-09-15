import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')

  return (
    <Stack direction="row" sx={{overflowY: 'auto', height: {sx:'auto', md: '95%'}, flexDirection:{md: 'column'}}}>
      {categories.map((item) => (
        <button 
          key={item.name} 
          className='category-btn' 
          style={{color: 'white', background: item.name===selectedCategory && '#FC1503'}}
          onClick={()=>setSelectedCategory(item.name)}
          >
          <span style={{marginRight: '15px', color: item.name===selectedCategory ? 'white' : 'red'}}>
            {item.icon}
          </span>
          <span style={{opacity: item.name===selectedCategory ? 1 : 0.8}}>
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar