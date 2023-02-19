import {Box, styled} from '@mui/material'
import {useState} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const MenuOption=styled(MenuItem)`
font-size:14px;
padding: 15px 60px 5px 24px;
color:#4A4A4A
`

const HeaderMenu=({setOpenDrawer})=>{

    const [open,setOpen]=useState(null);

    const handleClose=()=>{
        setOpen(null);
    }

    const handleClick=(e)=>{
         setOpen(e.currentTarget);
    }
    const handleOut=()=>{
        setOpen(null);
    }

   return (
    <Box>
    <MoreVertIcon onClick={handleClick} style={{cursor:"pointer"}} />

    <Menu keepMounted
         open={open}
         anchorEl={open}         
         getContentAnchore1={null}
         anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
         }}
         onClose={handleClose}
         transformOrigin={{
            vertical:"top",
            horizontal:"right"
         }}

      >
        <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true)}}  >Profile</MenuOption>
        <MenuOption >My account</MenuOption>
        <MenuOption>Logout</MenuOption>
      </Menu>


    </Box>
   );   


}

export default HeaderMenu;