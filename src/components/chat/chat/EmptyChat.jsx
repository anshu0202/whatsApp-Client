 import {Box,Typography, styled,Divider} from "@mui/material";
import {emptyChatImage} from "../../../constants/data"


const Component= styled(Box)`
padding: 30px 0;
background: #f8f9fa;
text-align: center;
height:100vh;


`;

const Container= styled(Box)`

 padding: 0 200px;
//  border:2px solid red;
  
 `;


 const Image= styled('img')({
    width:400,
    marginTop:100
   

 });


 const Title= styled(Typography)`
    font-size:32px;

    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight:300;
    color:#41525d
 `

 const SubTitle=styled(Typography)`
 font-size:14px;
 color:#667781;
 font-weight:400;
 font-family:inherit
 `;

 const StyleDivider= styled(Divider)`
 margin:40px 200px;
 opacity:0.4;

 `

const EmptyChat=()=>{
    return (
   
            <Component>
                <Container>
                    <Image src={emptyChatImage} alt="chat image" />
                        <Title>
                            WhatsApp Web                            
                        </Title>
                        <SubTitle>
                            Now send and reveive messages without keeping your phone online.
                        </SubTitle>
                        <SubTitle>
                            Use WhatsApp on up to 4 linked devices and 1 phone at thr same time.
                        </SubTitle>
                        <StyleDivider/>

                </Container>
            </Component>
        
    )
}

export default EmptyChat;