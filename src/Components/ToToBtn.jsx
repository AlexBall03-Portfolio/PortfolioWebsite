import { BsChevronDoubleUp } from 'react-icons/bs';
import "../Styles/ToTopBtn.css";

function ToTopBtn() {
    return (
        <div className="ToTopBtn">
            <div className="to-top-btn_Container">
                <a className='internal-link button' href="/"><BsChevronDoubleUp className='icon to-top_Icon' /></a>
            </div>
        </div>
    );
}

export default ToTopBtn;