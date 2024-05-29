import axios from "axios";

const url = "http://localhost:8000/";


export const addUser = async (data) => {
    try {
        console.log('data sdfas', data);
       await axios.post(`${url}addUser`, data);
    } catch(e){
        console.log('Error While add user', e.message);
    }
}

export const getUsers = async () => {
    try{
        const response = await axios.get(`${url}getUsers`);
        return response.data;
    } catch(e) {
        console.log('Error While fetch user', e.message);
    }
}

export const setConversation = async ({ senderId, receiverId}) => {
     try{
        const response = await axios.post(`${url}conversation/add`, { senderId, receiverId});
        console.log("response response", response);
        return response.data;
    } catch(e) {
        console.log('Error While fetch user', e.message);
    }
}