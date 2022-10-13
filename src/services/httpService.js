import axios from "axios";

const apiURL = "https://instaclone-mongo-api.herokuapp.com";

export async function getPost(){
    return await axios.get(apiURL);
}

export async function createPost(posts){
    return await axios.post(apiURL+"/createpost",posts,{headers: {
        "Content-Type": "multipart/form-data"}
    });
}