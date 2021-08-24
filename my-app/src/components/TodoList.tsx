import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodolistProps {
    todos: Todo[],
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodolistProps> = ({ todos, toggleTodo, }) => {
    return (

        <ul>
            {todos.map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            })}
        </ul>

    )

}


