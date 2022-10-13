import { useState } from "react";
import "../form/form.css";
import {useNavigate} from "react-router-dom";
import { Header } from "../header/header.jsx";
import {createPost} from "../../services/httpService";
export const Form = () => {
     const navigate = useNavigate();
       
    function getData(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const fdata = data.get('profile');
        const author = data.get('author');
        const location = data.get('location');
        const description = data.get('description');
        const date = new Date();
        createPost({createdAt:date,profile:fdata,author:author,location:location,description:description}).then((res)=>{
        // createPost(obj).then((res)=>{ 
        console.log(res);
        })
        navigate('/posts');
    
    }


    return (
        <>
            <Header />
            <form className="form-outline" onSubmit={(event)=>getData(event)}>
                <input type={"file"} name="profile" id="profile" />
                <input type={"text"} name="author" placeholder="Author" />
                <input type={"text"} name="location" placeholder="Location" id="location" />
                <input type={"text"} name="description" id="desc" placeholder="Description" />
                <div id="btn-div">
                    <input type={"submit"} value="Post" id="btn-submit"  />
                </div>
            </form>
        </>
    )
}