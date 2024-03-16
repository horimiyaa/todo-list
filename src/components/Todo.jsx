import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleComplete } from "../slices/TodoSlice";
import styled from "styled-components";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <StyledDiv>
      <input type="text" value={text} onChange={handleInputChange} />{" "}
      <button onClick={handleAddTodo}> Add Todo </button>{" "}
      <StyledUl>
        {" "}
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}{" "}
            <StyledButton onClick={() => handleToggleComplete(todo.id)}>
              {" "}
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
            </StyledButton>{" "}
            <StyledButton onClick={() => handleDeleteTodo(todo.id)}>
              {" "}
              Delete{" "}
            </StyledButton>{" "}
          </li>
        ))}{" "}
      </StyledUl>{" "}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #5488a2;
  border-radius: 5px;
  width: 800px;
  margin: 20px auto;

  & > input {
    padding: 5px 10px;
    border: 1px solid #5488a2;
    border-radius: 5px;
    width: 100%;
  }
  & > button {
    padding: 5px 10px;
    border: 1px solid #5488a2;
    border-radius: 5px;
    background-color: #5488a2;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      color: #5488a2;
    }
  }
`;

const StyledUl = styled.ul`
  li {
    list-style-type: none;
    font-size: 18px;
    padding: 10px;
  }
`;

const StyledButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #c34848;
  border-radius: 5px;
  background-color: #c34848;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #c34848;
  }
`;
export default Todo;
