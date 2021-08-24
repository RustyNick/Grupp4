import { setMaxListeners } from "process";
import react, { ChangeEvent, FormEvent } from "react"
import { useState } from "react"

interface addTodoFromProps {
    addTodo: AddTodo;
    addDeadline: AddDeadline;
}

export const AddTodoform: React.FC<addTodoFromProps> = ({ addTodo, addDeadline }) => {
    const [newTodo, setNewTodo] = useState("");
    const [deadline, setDeadline] = useState("")



    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "task") {
            setNewTodo(e.target.value)
        } else {
            setDeadline(e.target.value)
        }
        console.log(deadline)
    }


    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        addDeadline(deadline);
        setNewTodo("");
        setDeadline("")
        console.log(addDeadline)
    }


    return <form>
        <input type="text" name="task" value={newTodo} onChange={handleChange} placeholder="Namn på task..." />
        <input type="date" name="deadline" value={deadline} onChange={handleChange} placeholder="timer..." />
        <button type="submit" onClick={handleSubmit}>
            Add todo</button>

    </form>
}