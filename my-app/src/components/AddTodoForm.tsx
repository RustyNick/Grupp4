import { setMaxListeners } from "process";
import react, { ChangeEvent, FormEvent } from "react"
import { useState } from "react"

interface addTodoFromProps {
    addTodo: AddTodo;
}

export const AddTodoform: React.FC<addTodoFromProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }


    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }


    return <form>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
            Add todo</button>

    </form>
}