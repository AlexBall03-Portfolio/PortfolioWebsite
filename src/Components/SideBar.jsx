import Header from "./Header";
import Nav from "./Nav";
import SidebarFooter from "./SidebarFooter";
import "../Styles/SideBar.css";
import { FaTimes } from "react-icons/fa";

function SideBar( {setToggleClass, handleToggle} ) {
    return (
        <aside className={`SideBar ${setToggleClass}`}>
            <div className="close-sidebar-button_Container">
                <button onClick={handleToggle} className="close-sidebar_Button button">
                    <FaTimes className="close-sidebar_Icon icon" />
                </button>
            </div>

            <div className="sidebar_Container">
                <Header />
                <hr />                              
                <Nav handleToggle={handleToggle} />
                <hr />                                          
                <SidebarFooter />
            </div>
        </aside>
    );
}

export default SideBar;