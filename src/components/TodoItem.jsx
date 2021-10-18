import React from "react";
import {
	MdCheckCircleOutline,
	MdDeleteOutline,
} from "react-icons/md";

import Styled, { css } from "styled-components";

const TodoIcon = css`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	width: 48px;
	font-size: 24px;
	font-weight: bold;
`;
const TodoLi = Styled.li`
	background-color: #9afd81;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 0px 20px rgba(133, 252, 242, 0.589);
  border-radius: 10px;
  margin-left:15px;
  margin-right: 15px;

`;
const TodoP = Styled.p`
	margin: 24px 0 24px 24px;
  width: calc(100% - 120px);
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  text-decoration:${(props) =>
		props.completed && "line-through"};

`;

const TodoIconCheck = Styled.span`
	${TodoIcon};
	  position: absolute;
  	  left: 12px;
	color: ${(props) => props.active && "#17701a"};
`;

const TodoIconDelete = Styled.span`
	${TodoIcon};
	 position: absolute;
  	top: 13px;
  	right: 0;
	transition: color 0.5s linear;
	&:hover{
		color: #af1b1b;
	}

`;

const Todoitem = ({
	text,
	completed,
	id,
	onCompletedTodos,
	onDeleteTodos,
}) => {
	return (
		<TodoLi>
			<TodoIconCheck
				active={completed}
				onClick={onCompletedTodos}
			>
				<MdCheckCircleOutline />
			</TodoIconCheck>
			<TodoP completed={completed}>{text}</TodoP>
			<TodoIconDelete onClick={onDeleteTodos}>
				<MdDeleteOutline />
			</TodoIconDelete>
		</TodoLi>
	);
};

export default Todoitem;
