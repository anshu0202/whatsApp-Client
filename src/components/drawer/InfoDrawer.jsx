import { Drawer,Typography,Box, styled } from "@mui/material";
// import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";

const drawerStyle= {
    left:20,
    top:13.5,
    height:"95%",
    width:"450px",
    boxShadow:"none"
}
 
const  Header= styled(Box)`
 background: #008069;
 height:  107px;
 color:#FFFFFF;
 display:flex;
 & > svg, & >p{
    margin-top:auto;
    padding: 15px;
    font-weight:600;
    // font-size: 20px
 }
`;

const Text= styled(Typography)`
font-size:18px;


`


const Component= styled(Box)`
 background:#ededed;
  height:85%;


`



const InfoDrawer=({open,setOpen})=>{
    return (
        <Drawer
        // anchor={anchor}
        open={open}
        onClose={()=>{setOpen(false)}}
        PaperProps={{sx:drawerStyle}}
        style={{zIndex:5000}}
      >
        {/* {list(anchor)} */}
        <Header>
        <ArrowBackIcon style={{cursor:"pointer"}} onClick={()=>{setOpen(false)}}  />
        <Text>Profile </Text>
        </Header>
        <Component>
            <Profile/>
        </Component>
      </Drawer>
    )
}

export default InfoDrawer;