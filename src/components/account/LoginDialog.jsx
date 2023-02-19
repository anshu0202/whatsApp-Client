import {useContext} from 'react';

import { Dialog,Typography,List,ListItem,styled } from "@mui/material";
import { Box } from "@mui/system";
import { qrCodeImage } from "../../constants/data";

import {GoogleLogin} from '@react-oauth/google';
import { AccountContext } from '../../context/AccountProvider';

import { addUser } from '../../service/api';

import jwt_decode from 'jwt-decode';
const Component= styled(Box)`
     display:flex;
`;
const QRCode=styled('img')({
     height:250,
     width:250,
     margin: '50px 0 0 50px'

})

const Title=styled(Typography)`
   font-size:26px;
   color:#525252;
   font-weight:300;
   font-family:inherit;
   margin-bottom:25px
`;


const StyledList =styled(List)`
    & >li{
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height:28px;
        color: #4a4a4a;
    }
`


const Container=styled(Box)`
   padding:56px 0px 56px 56px;
`

const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width:'60% ',
    maxWidth:'100%',
    maxHeight:"100%",
    boxShadow:"none",
    // border:"2px solid red",
   
    overflow:"hidden"
}



const LoginDialog=()=>{
    const {setAccount}= useContext(AccountContext)
        const onLoginSuccess= async (res)=>{
              const decoded= jwt_decode(res.credential)
            //   console.log(decoded)
              setAccount(decoded)
             await addUser(decoded)
        }
        const onLoginError=(res)=>{
            console.log("Login failed ",res)
        }

    return (  <Dialog open={true}
            PaperProps ={{sx:dialogStyle}}
            hideBackdrop={true} >
                <Component>
                    <Container>
                        <Title>To use WhatsApp on your computer:</Title>
                        <List>
                            <ListItem>
                           1. open WhatsApp on your phone
                            </ListItem>
                            <ListItem>
                                2. Tap Menu or Settings and select and Linked Devices
                            </ListItem>
                            <ListItem>
                               3. Point your phone to this screen to capture the code
                            </ListItem>
                        </List>

                    </Container>
                    <Box style={{position:'relative'}} >
                        <QRCode src={qrCodeImage} alt="qr code" />
                        <Box style={{position:'absolute', top:'25%', transform:'translateX(35%)' }}>                            
                            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}
                            />
                        </Box>
                    </Box>
                </Component>
            </Dialog>
    );
}


export default LoginDialog