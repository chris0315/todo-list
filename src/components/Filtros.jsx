import React, { useContext } from "react";
import Select from "react-select";
import Styled from "styled-components";
import { TodosContext } from "../context/TodosContext";

const FormFiltro = Styled.form`
    width:50%;
    max-width:500px;
    margin-left:auto;
    margin-right:auto;
    padding: 1rem;

`;

const Filtros = () => {
	const { setFiltros } = useContext(TodosContext);

	const options = [
		{
			value: "completados",
			label: "completados",
		},
		{
			value: "inCompletos",
			label: "inCompletos",
		},
		{
			value: "todos",
			label: "todos",
		},
	];
	return (
		<FormFiltro>
			<Select
				options={options}
				onChange={(e) => setFiltros(e.value)}
			/>
		</FormFiltro>
	);
};

export default Filtros;
