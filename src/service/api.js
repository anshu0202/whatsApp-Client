import axios from 'axios';


const url ="http://localhost:5000";

export const addUser=async (data)=>{
    try{
        
       const result= await axios.post(`${url}/add`,data);

    }
    catch(error){
        console.log("Error while addUser API ", error.message)
    }
}

export const getUsers=async()=>{


    try{
            let response=await axios.get(`${url}/users`);            
            // console.log(response);
            return response.data;
    }
    catch(error){
            console.log("error occured ",error.message)
    }
}

export const setConversation=async(data)=>{
    try{
    const r= await axios.post(`${url}/conversation/add`,data);
    console.log("res is ",r)

    }
    catch(error){
        console.log("Error while setConveration API ", error.message)
    }
}



export const getConversation=async(data)=>{
    try{
      const res= await axios.post(`${url}/conversation/get`,data);
      return res.data;
    }
    catch(error){
        console.log("Error while geeting conversation API ", error.message)
    }
}


export const  newMessage=async(data)=>{
    try{
            await axios.post(`${url}/message/add`,data)
    }
    catch(error){
         console.log("error while calling new message API ",error.message)
    }
}

export const getMessages= async(id)=>{

    try{
            let res= await axios.get(`${url}/message/get/${id}`);
            return res.data;
    }
    catch(error){
        console.log("Error while calling getMessage api ", error.message);

    }
}


export const UploadFile= async(data)=>{
    try{
            return await axios.post(`${url}/file/upload`,data)
    }
    catch(error){
        console.log("Error while sending file", error.message);

    }
}
