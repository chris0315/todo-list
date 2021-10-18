import React from "react";
import Styled from "styled-components";

const TodoUl = Styled.ul`
	 margin: 0;
  	padding: 0 0 56px 0;
  	list-style: none;
`;

const Todolist = ({ children }) => {
	return (
		<section>
			<TodoUl>{children}</TodoUl>
		</section>
	);
};

export default Todolist;
