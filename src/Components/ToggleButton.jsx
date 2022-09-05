import { FaBars } from "react-icons/fa";
import "../Styles/ToggleButton.css";

function ToggleButton({handleToggle}) {
    

    return (
        <div className="ToggleButton">
            <div className="toggle-button_Container">
                <button onClick={handleToggle} className="toggle_Button button">
                    <FaBars className="icon" />
                </button>
            </div>
        </div>
    );
}

export default ToggleButton;