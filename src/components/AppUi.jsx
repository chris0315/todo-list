import React, { useContext } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import CreateTodoButton from "./CreateTodoButton";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context/TodosContext";
import Modal from "./Modal";
import Todoform from "./TodoForm";
import Filtros from "./Filtros";
import Styled from "styled-components";

const TodoContainer = Styled.main`
	min-width: 320px;
	max-width:700px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	height: auto;
	/* display: flex;
	flex-direction: column;
	align-items: center; */
	/* justify-content: center; */
`;

const AppUi = () => {
	const {
		searchTodos,
		taggletCompletedTodos,
		taggletDeleteTodos,
		openModal,
		/* todoFilter, */
	} = useContext(TodosContext);
	return (
		<TodoContainer>
			<TodoCounter />
			<TodoSearch />
			<Filtros />
			<TodoList>
				{/* {todoFilter.length &&
					todoFilter.map((item, i) => (
						<TodoItem
							key={i}
							text={item.text}
							id={item.id}
							completed={item.completed}
							onCompletedTodos={() =>
								taggletCompletedTodos(item.id)
							}
							onDeleteTodos={() =>
								taggletDeleteTodos(item.id)
							}
						/>
					))} */}
				{searchTodos.length ? (
					searchTodos.map((item, i) => (
						<TodoItem
							key={i}
							text={item.text}
							id={item.id}
							completed={item.completed}
							onCompletedTodos={() =>
								taggletCompletedTodos(item.id)
							}
							onDeleteTodos={() =>
								taggletDeleteTodos(item.id)
							}
						/>
					))
				) : (
					<p className="searchError">
						no hay resultados
					</p>
				)}
			</TodoList>
			{openModal && (
				<Modal>
					<Todoform />
				</Modal>
			)}
			<CreateTodoButton />
		</TodoContainer>
	);
};

export default AppUi;
