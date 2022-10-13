import "../header/header.css";
import {AiOutlineCamera} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    // const {state,setState} = useState(false);
    const navigate = useNavigate();

    return(
        <>
        <div className="header">
            <div id="left-header">
                <h2 id="text-left-header">Instaclone</h2>
            </div>
            <div id="right-header">
                <AiOutlineCamera id="camera-icon" onClick={()=>{navigate("/inputform")}}/>
            </div>
        </div>
        <hr />
        </>
    )
}