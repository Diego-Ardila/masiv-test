import axios from 'axios';

export const GetRandomComic = async (id) =>{
    try{
        const response = await axios({
            method:'GET',
            url:`http://localhost:8000/comics/${id}`
        })
        return response.data
    }catch(err){
        throw err
    }
}