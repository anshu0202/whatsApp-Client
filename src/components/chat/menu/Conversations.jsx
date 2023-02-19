
import { useEffect,useState, useContext } from "react";
import { Box, styled,Divider } from "@mui/material";
import { getUsers } from "../../../service/api";
//component
import Conversation from "./Conversation";

import { AccountContext } from "../../../context/AccountProvider";



const Component = styled(Box)`

height: 81vh;
overflow:overlay
`
const StyledDivider = styled(Divider)`
margin: 0 0 0 70px;
background:  #e9edef;
opacity:0.6;

`
const Conversations=({text})=>{
    const [users,setUsers]=useState([]);
    useEffect(()=>{  
        fetchData();
    },[text]);
    const {account,socket ,setActiveUsers}=useContext(AccountContext)

    useEffect(()=>{
        socket.current.emit('addUsers',account);
        socket.current.on("getUsers", users =>{
                setActiveUsers(users);
        });
    }, [account])

    // const {account,socket}=useContext(AccountContext)
    const fetchData=async ()=>{
      let response=  await getUsers();
      // console.log("response object is ",response)
      // response= await response.json(); 
      // console.log("type of response is ",typeof(response)
      // );
      const  filteredData=response.filter(user => 
        user.name.toLowerCase().includes(text)
      )
      setUsers(filteredData);
      // console.log("user is ",users);
}  
  return (<Component>
    {       
         users.map(user =>(
            user.sub!=account.sub && 
              <>
                <Conversation user={user}  />
                <StyledDivider/>
                </>
         ))
    }
     
   </Component>
  );
}
export default Conversations;