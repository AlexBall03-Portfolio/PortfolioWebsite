import Header from "./Header";
import Nav from "./Nav";
import SidebarFooter from "./SidebarFooter";

function SideBar() {
    return (
        <aside className="SideBar">
            <div className="sidebar_Container">
                <section className="header_Section">
                    <Header />
                </section>
                <hr />
                <section className="nav_Section">
                    <Nav />
                </section>
                <hr />
                <section className="sidebar-footer_Section">
                    <SidebarFooter />
                </section>
            </div>
        </aside>
    );
}

export default SideBar;