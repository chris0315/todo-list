import AppUi from "./components/AppUi";
import { TodoProvider } from "./context/TodosContext";

/* const lista = [
	{ id: 25, text: "hola", completed: false },
	{ id: 247, text: "hola", completed: true },
	{ id: 69, text: "vida", completed: true },
]; */

function App() {
	return (
		<TodoProvider>
			<AppUi />
		</TodoProvider>
	);
}

export default App;
