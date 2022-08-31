import Header from "./Header";
import Nav from "./Nav";
import SidebarFooter from "./SidebarFooter";
import "../Styles/SideBar.css";

function SideBar() {
    return (
        <aside className="SideBar">
            <div className="sidebar_Container">
                <Header />
                <hr />                              
                <Nav />
                <hr />                                          
                <SidebarFooter />
            </div>
        </aside>
    );
}

export default SideBar;