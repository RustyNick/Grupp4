import { Console } from 'console'
import React from 'react'
import "../TodoListItem.css"
import { TodoList } from './TodoList'


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;

}




export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return <li>
        <label className={todo.complete ? "complete" : undefined}>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggleTodo(todo)
                }
            />
            {todo.text}
            <button
                type="button"
                onClick={() => console.log(todo)
                }>X</button>
        </label>
    </li>
}