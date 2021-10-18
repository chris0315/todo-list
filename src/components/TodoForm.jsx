import React, { useContext, useState } from "react";
import Styled, { css } from "styled-components";
import { TodosContext } from "../context/TodosContext";

const TodoFormStyle = Styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 20rem;
height:13rem;
background-color: #fff;
border-radius: 10px;
box-shadow: 0px 0px 10px #cccccc;
`;
const TextAreaTodos = Styled.textarea`
	border: 2px solid #b5f7b2;
	border-radius: 10px;
	height: 3.75rem;
	width: 14.375rem;
	padding: 0.7rem;
	
	&:focus-visible{
		outline:none;
		border-color: #79ff71;
		box-shadow:0px 0px 5px 0px #93fc8e;
	}

`;

const LabelTitle = Styled.label`
	color:#000;
	padding:1rem;
	font-size:1.5rem;
	text-align:center;

`;

const ButtonContainer = Styled.div`
	padding:1rem;
	display: flex;
	justify-content: center;
	gap: 1rem;
`;
const ButtonPrimary = css`
	outline: none;
	border-radius: 28px;
	font-family: Arial;
	font-size: 20px;
	padding: 10px 20px 10px 20px;
	border: none;
`;
const ButtonAdd = Styled.button`
${ButtonPrimary};

color: #76faa0;
background-color: #6cb1fa;
&:hover{
	 background: #3cb0fd;
	 transition: background 1s ;
	 
}

`;
const ButtonCancel = Styled.button`
${ButtonPrimary};

background-color: #76faa0;
color: #6cb1fa;
&:hover{
	 background: #4eee81;
	 transition: background 1s ;
}
`;

const Todoform = () => {
	const [newTextValue, setNewTextValue] = useState("");

	const { setOpenModal, addTodos } =
		useContext(TodosContext);
	const onCancel = () => {
		setOpenModal(false);
	};

	const onAdd = (e) => {
		e.preventDefault();
		if (!newTextValue.length) return;
		addTodos(newTextValue);
		setOpenModal(false);
	};

	const onChangeText = (e) => {
		setNewTextValue(e.target.value);
	};

	return (
		<TodoFormStyle onSubmit={onAdd}>
			<LabelTitle htmlFor="">
				Escribe tu tarea
			</LabelTitle>
			<TextAreaTodos
				value={newTextValue}
				onChange={onChangeText}
				placeholder="tarea"
			></TextAreaTodos>
			<ButtonContainer>
				<ButtonCancel type="button" onClick={onCancel}>
					cancelar
				</ButtonCancel>
				<ButtonAdd>añadir</ButtonAdd>
			</ButtonContainer>
		</TodoFormStyle>
	);
};

export default Todoform;
