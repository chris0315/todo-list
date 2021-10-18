import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { v4 as uuidv4 } from "uuid";

const TodosContext = createContext();

const TodoProvider = ({ children }) => {
	const [todos, saveTodos] = useLocalStorage(
		"TODOS_V1",
		[]
	);
	const [searchValue, setSearchValue] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const [filtros, setFiltros] = useState("");

	const completedTodos = todos.filter(
		(todo) => !!todo.completed
	).length;

	const totalTodos = todos.length;

	const searchTodos = todos
		.filter((todo) =>
			todo.text
				.toLowerCase()
				.includes(
					searchValue.trimEnd().toLocaleLowerCase()
				)
		)
		.filter((todo) => {
			if (filtros === "completados") {
				return todo.completed === true;
			} else if (filtros === "inCompletos") {
				return todo.completed === false;
			} else {
				return todos;
			}
		});
	/* const todoFilter = todos.filter((todo) => {
		if (filtros === "completados") {
			return todo.completed === true;
		} else if (filtros === "inCompletos") {
			return todo.completed === false;
		} else {
			return todos;
		}
	}); */

	const taggletCompletedTodos = (id) => {
		const todosIndex = todos.findIndex(
			(todo) => todo.id === id
		);
		const newTodos = [...todos];
		/* 	todos[todosIndex] = {
				id:todos[todosIndex].id,
				text: todos[todosIndex].text,
				completed:true
			} */

		newTodos[todosIndex].completed =
			!newTodos[todosIndex].completed;
		saveTodos(newTodos);
	};

	const addTodos = (text) => {
		const newTodos = [...todos];
		newTodos.push({
			id: uuidv4(),
			text,
			completed: false,
		});
		saveTodos(newTodos);
	};

	const taggletDeleteTodos = (id) => {
		const newTodos = todos.filter(
			(todo) => todo.id !== id
		);
		saveTodos(newTodos);
	};
	return (
		<TodosContext.Provider
			value={{
				totalTodos,
				completedTodos,
				searchValue,
				setSearchValue,
				searchTodos,
				taggletCompletedTodos,
				taggletDeleteTodos,
				openModal,
				setOpenModal,
				addTodos,
				filtros,
				setFiltros,
				/* todoFilter, */
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};

export { TodosContext, TodoProvider };
