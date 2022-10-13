import "../landing/landing.css";
import landImage from "../img/lens-1418954.png"
import {useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();
    return(
        <div className="landing">
            <div className="land-left">
                <img src={landImage} alt="landimage" className="land-image"/>
            </div>
            <div className="land-right">
                <h1 id="land-header-text">10x Team 04</h1>
                <button id="land-btn" onClick={()=>{navigate('/posts')}}>Enter</button>
            </div>
            
        </div>
    )
}