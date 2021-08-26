import { Button } from '@material-ui/core'
import HighlightOff from '@material-ui/icons/HighlightOff';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'
import "../TodoListItem.css"
import { AddTaskForm } from './AddTaskForm'


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    removeProject(projectId: string): void;
    removeTask(taskId: string): void;
    addTask: AddTask;
}



export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, removeProject, removeTask, addTask }) => {
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
                    <Button
                        onClick={() => {
                            removeProject(todo.id)
                        }}
                    > <HighlightOff />
                    </Button>
                </div>
                <div>
                    <React.Fragment>
                        <AddTaskForm addTask={addTask} todoId={todo.id} />
                    </React.Fragment>

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

                                <Button
                                    type="button"
                                    onClick={() => {
                                        removeTask(task.id)
                                    }} ><DeleteIcon /></Button>
                            </div>


                        )
                    })}
                    {/* ---------------------------smol task render ----------------------------------------!!!! */}
                </div>

            </label>
        </li >

    )
}