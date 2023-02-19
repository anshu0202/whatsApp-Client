import { Dialog,Box,styled } from "@mui/material";

import {useContext}  from 'react'

import { AccountContext } from "../../context/AccountProvider";

//components
import Menu from '../chat/menu/Menu'
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
const dialogStyle={
    height:'96%',
    width:'100% ',
    maxWidth:'100%',
    margin:'20px',
    maxHeight:"100%",
    boxShadow:"none",   
    overflow:"hidden",
    borderRadius:"0"
}

const Component=styled(Box)`
  display: flex;
`;

const LeftComponent=styled(Box)`
min-width:450px;
`
const RightComponent=styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left: 1px solid rgba(0,0,0.14);
`

const ChatDialog=()=>{

     const {person} =useContext(AccountContext);
    return (
        <Dialog open={true} PaperProps={{sx:dialogStyle}} hideBackdrop={true} maxWidth={'md'}>

            <Component >
                <LeftComponent>
                <Menu/>

                </LeftComponent>
                <RightComponent>
                    {/* <EmptyChat/> */}
                    {/* <ChatBox/> */}
                    {
                        // object would contain array of objects 
                        Object.keys(person).length? <ChatBox/>:<EmptyChat/>
                    }
                </RightComponent>
            </Component>


        </Dialog>
    );
}

export default ChatDialog;