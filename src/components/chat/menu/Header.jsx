import {useContext,useState} from 'react'
import { Box , styled} from '@mui/system';
import { AccountContext } from '../../../context/AccountProvider';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

// import {chat as MessageIcon} from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
{/* <FontAwesomeIcon icon="fa-light fa-circle-dashed" /> */}

// import Search from './Search';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display:flex;
    align-items:center;

`

const Wrapper = styled(Box)`
margin-left:auto;
& > *{
    margin-left:5px;
    padding: 8px;
    color: #000;
    cursor: pointer
};
& : first-child{
         font-size:22px;
         margin-right:8px;
         margin-top: 3px;
}

  //  border: 2px solid red;
   display:flex;
`

const Image=styled('img')({
  height:40,
  width:40,
  borderRadius:"50%",
  cursor: "pointer"
})


    

const Header=()=>{
      const {account} =useContext(AccountContext)
      const [openDrawer,setOpenDrawer]=useState(false)


    return (
        <>
        <Component>
            <Image src={account.picture} alt="DP" onClick={()=>{setOpenDrawer(true)}} />
               <Wrapper>
               {/* <FontAwesomeIcon icon="fa-solid fa-circle-dashed" /> */}
               {/* <HistoryToggleOffIcon/> */}
                <ChatIcon/>
                {/* <MoreVertIcon/> */}
                <HeaderMenu  setOpenDrawer={setOpenDrawer} />
               </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
     );


}

export default Header;