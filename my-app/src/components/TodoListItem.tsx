import React from 'react'
import "../TodoListItem.css"
import { TodoList } from './TodoList'
import { initialTodos } from './ViewPage'


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;

}



export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {

    const completeCheck = (todo: Todo) => {
        return true
    }

    return (

        <li
            className="listStyle">
            <label className={completeCheck(todo) ? "complete" : undefined}>
                <div className="cardHead">
                    <input
                        type="checkbox"
                        checked={completeCheck(todo)}
                        onChange={() => toggleTodo(todo)
                        }
                    />

                    <h3>
                        {todo.text}     {/* Rubrik renders here */}
                    </h3>
                    {todo.deadline} {/* Deadline renders here */}
                    <button
                        type="button"
                        onClick={() => {
                            initialTodos.splice(0, 1)
                            console.log(initialTodos)
                            return initialTodos
                        }
                        }> X
                    </button>
                </div>
                <div>
                    <input type="text" placeholder="todos..."></input>
                    <button>Add</button>
                </div>
                <div className="smallListStyle">
                    {todo.tasks.map((task) => {
                        return (

                            <div className="smallTask">
                                <input
                                    type="checkbox"
                                >

                                </input>
                                {task.text}
                                <button>X</button>
                            </div>


                        )
                    })}
                </div>

            </label>
        </li >

    )
}