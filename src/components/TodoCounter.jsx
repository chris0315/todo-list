import React, { useContext } from "react";
import Styled from "styled-components";
import { TodosContext } from "../context/TodosContext";

const TodoTitle = Styled.h2`
	font-size:1.8rem;
	text-align: center;
	margin:0;
	padding:30px;
	color:#97ec28;
	text-shadow: 0px 0px 10px #99fd9ed2;
	
`;

const Todocounter = () => {
	const { completedTodos, totalTodos } =
		useContext(TodosContext);
	return (
		<TodoTitle>
			Has completado {completedTodos} de {totalTodos}{" "}
			Tareas
		</TodoTitle>
	);
};

export default Todocounter;
