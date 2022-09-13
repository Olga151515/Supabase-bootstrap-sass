import React from 'react'
import {  ListGroup } from 'react-bootstrap';
import TodoListItem from './TodoListItem';


const TodoList = ({list}) => {
  return (
  <ListGroup > 
    {list.map((item) => (
       <TodoListItem key={item.id} item={item} />
      ))}
    </ListGroup>
  );
};

export default TodoList;