import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

function SidebarFooter() {
    return (
        <footer className="SidebarFooter">
            <div className="sidebar-footer_Container">
                <ul className="social-links_List">
                    <li><a href="https://www.linkedin.com/in/alexball03/" rel="noreferrer" target="_blank"><AiOutlineLinkedin /></a></li>
                    <li><a href="https://github.com/AlexBall03" rel='noreferrer' target="_blank"><AiOutlineGithub /></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default SidebarFooter;