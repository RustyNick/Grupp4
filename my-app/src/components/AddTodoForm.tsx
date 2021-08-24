import { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import { initialTodos } from "./ViewPage";

interface addTodoFromProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<addTodoFromProps> = ({ addTodo, }) => {
    const [newTodo, setNewTodo] = useState("");
    const [deadline, setDeadline] = useState("")



    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewTodo(e.target.value)

    }


    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
        setDeadline("")
        console.log(initialTodos)
    }



    return (
        <div>

            <form>
                <input type="text" name="task" value={newTodo} onChange={handleChange} placeholder="Namn på task..." />
                <input type="date" name="deadline" value={deadline} onChange={handleChange} placeholder="timer..." />
                <button type="submit" onClick={handleSubmit}>
                    Add todo</button>

            </form>
        </div>

    )
}