import React, { useContext } from "react";
import Styled from "styled-components";
import { TodosContext } from "../context/TodosContext";

const TodoButton = Styled.button`
	background-color: #61DAFA;
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 50px;
  position: fixed;
  ${({ stateModal }) =>
		stateModal &&
		`
     z-index: 999;
  
  `}
  bottom: 24px;
  right: 24px;
  font-weight: bold;
  color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  

  transform: rotate(0);
  transition: .3s ease;
  &:hover{
	  transform: rotate(224deg);
    background-color: #75ff75;
  }
`;

const CreateTodoButton = () => {
	const { setOpenModal, openModal } =
		useContext(TodosContext);
	const onClickButton = () => {
		setOpenModal(!openModal);
	};

	return (
		<TodoButton
			onClick={onClickButton}
			stateModal={openModal}
		>
			+
		</TodoButton>
	);
};

export default CreateTodoButton;
