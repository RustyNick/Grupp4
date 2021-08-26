import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { TodoListItem } from "./TodoListItem";

interface TodolistProps {
    todos: Todo[],
    toggleTodo: ToggleTodo;
    removeProject: RemoveProject;
    removeTask: RemoveTask;
    addTask: AddTask;
}

export const TodoList: React.FC<TodolistProps> = ({ todos, toggleTodo, removeProject, removeTask, addTask }) => {
    return (

        <ul>
            
            {todos.map(todo => {
                return <ErrorBoundary><TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeProject={removeProject} removeTask={removeTask} addTask={addTask} /></ErrorBoundary>
            })}
        </ul>

    )

}


