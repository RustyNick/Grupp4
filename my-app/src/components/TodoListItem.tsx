import { Console } from 'console'
import React from 'react'
import "../TodoListItem.css"
import { TodoList } from './TodoList'


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
                        {todo.text}
                    </h3>
                    <button
                        type="button"
                        onClick={() => console.log(todo)
                        }> X
                    </button>
                </div>
                <div className="smallListStyle">
                    {todo.tasks.map((task) => {
                        return (

                            <div>
                                <input
                                    type="checkbox"
                                >

                                </input>
                                {task.text}

                            </div>


                        )
                    })}
                </div>

            </label>
        </li >

    )
}