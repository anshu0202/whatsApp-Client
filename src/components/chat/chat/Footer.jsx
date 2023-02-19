
import {Box, InputBase, styled} from '@mui/material';
import { useState , useEffect} from 'react';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { UploadFile } from '../../../service/api';

const Container=styled(Box)`
 height:55px;
 background:#ededed;
display: flex;
width:65.88vw;
align-items:center;
padding: 0px 15px;
// border: 2px solid blue;
 & > * {
      margin:5px;
      color:#919191;
 }
`;

const Search= styled(Box)`
background-color:#FFFFFF;
border-radius: 18px;
//  width:100%;
//  width: calc(94%-150px);
//   border: 2px solid red;
`

const InputField=styled(InputBase)`
 padding: 20px;
 height:20px;
 padding-left:35px;
 font-size:16px;
`;

const ClipIcon= styled(AttachFileIcon)`
  transform:rotate(40deg);
`




const Footer=({sendText,setValue, value, file,setFile, setImage})=>{

        const onFileChange=(e)=>{
            console.log(e)

            setFile(e.target.files[0]);
            setValue(e.target.files[0].name);
        }


        useEffect(()=>{
                    const getImage=async ()=>{
                        if(file){
                            const data= new FormData();
                            data.append("name", file.name);
                            data.append("file", file)
                          let response=  await UploadFile(data);
                          setImage(response.data);
                          console.log("url is ",response.data);
                        }
                    }
                    getImage();
        },[file])


    return (
        <Container>
         
            <EmojiEmotionsOutlinedIcon style={{cursor:"pointer"}} /> 
            <label htmlFor="fileInput"> 
             
            <ClipIcon  style={{cursor:"pointer"}} />
            </label> 
            <input type="file" id='fileInput' style={{display:"none"}} onChange={(e)=>onFileChange(e)} />
             
            <Search>           
                <InputField placeholder='Type message' style={{width:"58vw"}} onChange={(e)=>{setValue(e.target.value)}} onKeyPress={(e)=>sendText(e)} value={value} />
            </Search >
            <MicIcon style={{cursor:"pointer"}} />
        </Container>
    );
}

export default Footer;