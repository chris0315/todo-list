import React, { useContext } from "react";
import Styled from "styled-components";
import { TodosContext } from "../context/TodosContext";

const TodoInputSearch = Styled.input`
display: inline-block;
	background: #F9FBFC;
  border-radius: 2px;
  border: 2px solid #202329;
  margin: 0 24px;
  height: 64px;
  width: calc(100% - 62px);
  max-width: 700px;
  font-size: 24px;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 400;
  color: #1E1E1F;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
  border-radius:10px;
  &::placeholder{
		 color: #A5A5A5;
  		font-family: 'Montserrat';
  		font-weight: 400;
	}
	&:focus{
		outline-color: #61DAFA;
	}
	
`;

const SectionSearch = Styled.section`
	width: 100%;
`;

const Todosearch = () => {
	const { searchValue, setSearchValue } =
		useContext(TodosContext);

	const onSearchValueChange = (e) => {
		setSearchValue(e.target.value);
	};
	return (
		<SectionSearch>
			<TodoInputSearch
				type="text"
				placeholder="cebolla"
				value={searchValue}
				onChange={onSearchValueChange}
			/>
		</SectionSearch>
	);
};

export default Todosearch;
