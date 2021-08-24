import React from 'react'
import "../TodoListItem.css"
import { AddTodoForm } from './AddTodoForm'
import { TodoList } from './TodoList'
import { initialTodos } from './ViewPage'


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    removeProject(projectToDelete: string): void;
    removeTask(taskToDelete: string): void;

}



export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, removeProject, removeTask }) => {
    const completeCheck = (todo: Todo) => {
        return true
    }

    return (

        <li
            className="listStyle">
            <label className={completeCheck(todo) ? "complete" : undefined}>
                <div className="cardHead">

                    <h3>
                        {todo.text}     {/* Rubrik renders here */}
                    </h3>
                    <input
                        type="checkbox"
                        checked={completeCheck(todo)}
                        onChange={() => toggleTodo(todo)
                        }
                    />
                    {todo.deadline} {/* Deadline renders here */}
                    <button
                        type="button"
                        onClick={() => {
                            removeProject(todo.text)
                        }}
                    > X
                    </button>
                </div>
                <div>
                    <input type="text" placeholder="todos..."></input>
                    <button>Add</button>
                </div>
                <div className="smallListStyle">

                    {/* --------------------------------The small task render -------------------------------------*/}
                    {todo.task.map((task) => {
                        return (
                            <div className="smallTask">
                                <label>
                                    <p>
                                        {/* ----------Materialize styleing on this input!!-------- */}
                                        <input type="checkbox" className="filled-in" />
                                        <span></span>
                                    </p>
                                </label>

                                {task.textName}

                                <button onClick={() => {
                                    removeTask(task.textName)
                                }} >X</button>
                            </div>


                        )
                    })}
                    {/* ---------------------------smol task render ----------------------------------------!!!! */}
                </div>

            </label>
        </li >

    )
}