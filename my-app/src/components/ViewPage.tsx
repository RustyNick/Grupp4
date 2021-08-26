import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const genreateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}


export const initialTodos: Array<Todo> = [
    {
        id: genreateId(), text: "Rubrik 1", deadline: "Deadline", task: [{ id: genreateId(), textName: "en text", }],
    },
    {
        id: genreateId(), text: "Städa", deadline: "08/08/2021", task: [{ id: genreateId(), textName: "Damsuga", }, { id: genreateId(), textName: "Moppa golvet", }, { id: genreateId(), textName: "Torka ytor", }],
    },
    {
        id: genreateId(), text: "Handla", deadline: "10/10/2021", task: [{ id: genreateId(), textName: "Äpplen", }, { id: genreateId(), textName: "Vaniljsås", }],
    }

]


const ViewPage = () => {

    const theTask = initialTodos.map((task) => {
        return task.task
    })
    const [todos, setTodos] = useState(initialTodos);
    /* const [tasks, SetTasks] = useState(theTask) */


    const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return todo
            }
            return todo;
        });
        setTodos(newTodos);
    }

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const removeProject: RemoveProject = projectId => {
        setTodos(todos.filter((todo) => {
            return todo.id !== projectId

        }))
    }

    const removeTask: RemoveTask = taskId => {

        const updatedTodos = todos.map((todo) => {
            const tasks = todo.task.filter((task) => {
                if (task.id === taskId) {
                    /* ignore */
                    return false
                    /* return true */
                }
                /* tar id */
                return true
            })
            const updatedTodos = todo
            updatedTodos.task = tasks
            return updatedTodos
        })
        setTodos(updatedTodos)
    }

    const addTask: AddTask = (newTask, todoId) => {

        const updatedTasks = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.task.push({ id: genreateId(), textName: newTask, })
            }

            return todo
        })


        console.log(updatedTasks)
        console.log("AddTask")
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
                        <TodoList todos={todos} toggleTodo={toggleTodo} removeProject={removeProject} removeTask={removeTask} addTask={addTask} />
                        <AddTodoForm addTodo={addTodo} />
                    </React.Fragment>
                </div>
            </div>
            {/* <button onClick={showArray}>Show array</button> */}
        </div>

    );

}

export default ViewPage;
