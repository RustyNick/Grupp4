import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';


export const initialTodos: Array<Todo> = [
    {
        text: "Rubrik 1", deadline: "Deadline", tasks: [{ text: "en text", complete: false }],
    },
    {
        text: "Städa", deadline: "08/08/2021", tasks: [{ text: "Damsuga", complete: false }, { text: "Moppa golvet", complete: false }, { text: "Torka ytor", complete: false }],
    },
    {
        text: "Handla", deadline: "10/10/2021", tasks: [{ text: "Äpplen", complete: false }, { text: "Vaniljsås", complete: false }],
    }

]

const ViewPage = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [deadline, setDeadline] = useState("")

    const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return todo
            }
            return todo;
        });
        setTodos(newTodos);
    }

    /*     const removeTask = (taskNameToDelete: string): void => {
            setTodos(todos.filter((todo) => {
                return todo.text != taskNameToDelete
    
            }))
        } */

    const removeTask: RemoveTask = taskNameToDelete => {
        setTodos(todos.filter((todo) => {
            return todo.text != taskNameToDelete

        }))
    }

    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== "" &&
            setTodos([...todos, { text: newTodo, deadline: deadline, tasks: [] }])
    }


    const showArray = () => {
        for (let i = 0; i < todos.length; i++) {
            const todoTask = todos[i];
            console.log(todoTask.tasks)

        }
    }

    return (
        <div>
            <div className="centered" >
                <div id="listBoard" className="listBoard">
                    <React.Fragment>
                        <TodoList todos={todos} toggleTodo={toggleTodo} removeTask={removeTask} />
                        <AddTodoForm addTodo={addTodo} />
                    </React.Fragment>
                </div>
            </div>
            <button onClick={showArray}>Show array</button>
        </div>

    );
}

export default ViewPage;
