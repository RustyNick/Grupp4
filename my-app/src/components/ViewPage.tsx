import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';


export const initialTodos: Array<Todo> = [
    {
        text: "Rubrik 1", deadline: "Deadline", task: [{ textName: "en text", }],
    },
    {
        text: "Städa", deadline: "08/08/2021", task: [{ textName: "Damsuga", }, { textName: "Moppa golvet", }, { textName: "Torka ytor", }],
    },
    {
        text: "Handla", deadline: "10/10/2021", task: [{ textName: "Äpplen", }, { textName: "Vaniljsås", }],
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


    const removeProject: RemoveProject = projectToDelete => {
        setTodos(todos.filter((todo) => {
            return todo.text !== projectToDelete

        }))
    }

    const removeTask: RemoveTask = taskToDelete => {
        for (let i = 0; i < todos.length; i++) {
            const todoTask = todos[i].task;

            todoTask.filter((task) => {
                return task.textName !== taskToDelete
            })

        }
    }

    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== "" &&
            setTodos([...todos, { text: newTodo, deadline: deadline, task: [] }])
    }


    const showArray = () => {
        for (let i = 0; i < todos.length; i++) {
            const todoTask = todos[i];
            console.log(todoTask, todoTask.task)

        }
    }

    return (
        <div>
            <div className="centered" >
                <div id="listBoard" className="listBoard">
                    <React.Fragment>
                        <TodoList todos={todos} toggleTodo={toggleTodo} removeProject={removeProject} removeTask={removeTask} />
                        <AddTodoForm addTodo={addTodo} />
                    </React.Fragment>
                </div>
            </div>
            <button onClick={showArray}>Show array</button>
        </div>

    );
}

export default ViewPage;
