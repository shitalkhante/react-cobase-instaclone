import "../posts/post.css";
import {useState, useEffect} from "react";
import {BsThreeDots, BsHeart} from "react-icons/bs";
import {FiSend} from "react-icons/fi";
import profile from "../img/profile.png";
import { getPost } from "../../services/httpService";

export const Post = () => {

    const [states, setStates] = useState([{_createdAt:'',updatedAt:'',_v:null,_id:null,image:null,auther:"siva",location:"hydrabad",description:'hello'}]);

    useEffect(()=>{
       getPost().then((res)=>{
        setStates(res.data.data);
       })
    },[])
    // console.log(new Date(states[0].createdAt).getDate());
    // const prof = btoa(String.fromCharCode.apply(null,arr[1].image.data.data))//arr[0].image.data.data.toString('base64');
    // console.log(arr[0].image.data.data.toString('base64'));
    return(
     <div>
        {states.map((element,idx)=>{
             if(states.length>1){
                // console.log("img");
                var prof = 'data:image/png;base64,'+ btoa(String.fromCharCode.apply(null,element.image.data.data));
            }
            return (
           
        <div className="card-outline">
            <div className="card-header">
                <div id="card-header-left">
                    <p id="name">{element.auther}</p>
                    <p id="loc">{element.location}</p>
                </div>
                <BsThreeDots className="dots"/>
            </div>
            <div id="photo">
                {states.length>1 &&
                <img  src={prof} alt="post" id="post-img"/>}
                {states.length===1 &&
                <img  src={profile} alt="profile" id="post-img"/>}
            </div>
            <div id="card-footer">
                <div>
                <div className="footer-left">
                <BsHeart className="heart"/>
                <FiSend className="send"/>
                <div className="footer-right">
                    {states.length>1 && 
                      new Date(element.createdAt).toDateString()}
                    {states.length===1 &&
                        new Date().toDateString()}
                </div>
                <span id="likes">
                    {"64"} likes
                </span>
                </div>
                </div>
                <div className="footer-bottom">
                    {element.description}
                </div>
            </div>
        </div>)
        })
        }
        </div>
  
    )
}