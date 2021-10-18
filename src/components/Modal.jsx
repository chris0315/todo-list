import ReactDom from "react-dom";
import Styled from "styled-components";
const DivModal = Styled.div`
        background-color:rgba(32,35,41,.8);
        position: fixed;
        top: -10px;
        right: -10px;
        left: -10px;
        bottom: -10px;
        display:flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    
    `;

const Modal = ({ children }) => {
	return ReactDom.createPortal(
		<DivModal>{children}</DivModal>,
		document.getElementById("modal")
	);
};
export default Modal;
