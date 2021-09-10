import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const genreateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}


export const initialTodos: Array<Todo> = []


const ViewPage = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return todo
            }
            return todo;
        });
        setTodos(newTodos);
    }

    // Sparar och hämtar från Local storage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    //Tar bort en hel todo ur listan/array
    const removeProject: RemoveProject = projectId => {
        setTodos(todos.filter((todo) => {
            return todo.id !== projectId

        }))
    }
    // Tar bort en Task i Todo
    const removeTask: RemoveTask = taskId => {

        const updatedTodos = todos.map((todo) => {
            const tasks = todo.task.filter((task) => {
                if (task.id === taskId) {
                    return false
                }
                return true
            })
            const updatedTodos = todo
            updatedTodos.task = tasks
            return updatedTodos
        })
        setTodos(updatedTodos)
    }

    //Addera en ny Task i Todo
    const addTask: AddTask = (newTask, todoId) => {
        const updatedTasks = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.task.push({ id: genreateId(), textName: newTask, })
            }

            return todo
        })



        setTodos(updatedTasks)
    }





    /*     const tasks = todo.task.filter((task) => {
            newTask = task.textName
            console.log(newTask)
            return newTask
        }) */
    /*     const updatedTodos = todo
            updatedTodos.task = tasks
     
            console.log(updatedTodos)
            return updatedTodos */
    /* } */
    /* setTodos(updatedTasks) */




    const addTodo: AddTodo = (newTodo, newDeadline) => {
        newTodo.trim() !== "" &&
            setTodos([...todos, { id: genreateId(), text: newTodo, deadline: newDeadline, task: [] }])
    }

    return (
        <div>
            <div className="centered" >
                <div id="listBoard" className="listBoard">
                    <React.Fragment>
                        <TodoList todos={todos} toggleTodo={toggleTodo} removeProject={removeProject} removeTask={removeTask} addTask={addTask} />
                        <AddTodoForm addTodo={addTodo} />
                    </React.Fragment>
                </div>
            </div>
        </div>

    );

}

export default ViewPage;
