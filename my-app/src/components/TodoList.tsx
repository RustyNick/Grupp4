import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodolistProps {
    todos: Todo[],
    toggleTodo: ToggleTodo;
    removeProject: RemoveProject;
    removeTask: RemoveTask;
}

export const TodoList: React.FC<TodolistProps> = ({ todos, toggleTodo, removeProject, removeTask }) => {
    return (

        <ul>
            {todos.map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeProject={removeProject} removeTask={removeTask} />
            })}
        </ul>

    )

}


