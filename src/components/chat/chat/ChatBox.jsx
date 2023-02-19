
import {Box } from '@mui/material';


import ChatHeader from './ChatHeader';
import Messages from './Messages';
// import Footer from './Footer';
import { useEffect, useState } from 'react';
import {useContext} from 'react';
import { AccountContext } from '../../../context/AccountProvider';

import { getConversation } from '../../../service/api';

const ChatBox=()=>{

   const {account,person}  =  useContext(AccountContext);

   const [conversation,setConversation] = useState({})

   useEffect(()=>{
          const getConversationDetails= async()=>{
          let data=  await getConversation({senderId:account.sub, receiverId:person.sub})
        //   console.log(data)
          setConversation(data);
          }

          getConversationDetails();
   },[person.sub])

      
    return (
        <Box >
            <ChatHeader person ={person}/>
            <Messages person={person} conversation={conversation} />   
            
        </Box >
    )

};


export default ChatBox;