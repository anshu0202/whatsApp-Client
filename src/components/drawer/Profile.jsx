
import { Box,styled,Typography } from "@mui/material";
import { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";

const ImageContainer=styled(Box)`

display:flex;
justify-content:center;

`;

const DescriptionContainer=styled(Box)`
    padding:15px 20px 28px 30px;
    & >p{
        font-size:13px;
        color:#8696a0;
    }



`

const Image= styled('img')({
     width:200,
     borderRadius:"50%",
     height:200,
     margin:"25px 0",
     border:"4px solid black"

})

const BoxWrapper=styled(Box)`
    background:#FFFFFF;
    // display: flex;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgbs(0,0,0,0.8);
    & : first-child{
        font-size: 13px;
        color: #009688;
        font-weight:200;
    }
    & : last-child{
        margin: 14px 0;
         color: #4A4A4A;
        
    }
`

const Profile=()=>{

    const {account} =useContext(AccountContext)

    return ( <>
             <ImageContainer>
                <Image src={account.picture} alt="DP" /> 
             </ImageContainer>
             <BoxWrapper> 

                <Typography>
                    Your name 
                </Typography>
                    
                <Typography>
                {account.name}
                </Typography>


             </BoxWrapper>
             <DescriptionContainer> 
                <Typography>
                    This is not your username or pin. This name will be visible to your WhatsApp contact.
                </Typography>
             </DescriptionContainer>
             <BoxWrapper> 

         <Typography>
            About 
         </Typography>
         <Typography>
            Eat! Sleep! Code! Repeat!
         </Typography>

             </BoxWrapper>
        
        </>
      
    )



}

export default Profile;