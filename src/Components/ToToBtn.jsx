import { BsChevronDoubleUp } from 'react-icons/bs';
import "../Styles/ToTopBtn.css";
import { Link } from "react-scroll";

function ToTopBtn() {
    return (
        <div className="ToTopBtn">
            <div className="to-top-btn_Container">
                <Link to='home' spy={true} smooth={true} duration={500} className='internal-link button'><BsChevronDoubleUp className='icon to-top_Icon' /></Link>
            </div>
        </div>
    );
}

export default ToTopBtn;