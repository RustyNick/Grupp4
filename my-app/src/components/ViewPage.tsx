import React, { FC, ChangeEvent, useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoform } from './AddTodoForm';


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

const ViewPage: React.FC = () => {
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

    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== "" &&
            setTodos([...todos, { text: newTodo, deadline: deadline, tasks: [] }])
    }
    const addDeadline: AddDeadline = newDeadline => {
        return deadline
    }

    return (
        <div>
            <div className="centered" >
                <div className="listBoard">
                    <React.Fragment>
                        <TodoList todos={todos} toggleTodo={toggleTodo} />
                        <AddTodoform addTodo={addTodo} addDeadline={addDeadline} />
                    </React.Fragment>
                </div>
            </div>

        </div>

    );
}

export default ViewPage;
