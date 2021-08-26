import { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import { Button, Input } from '@material-ui/core'

interface addTodoFromProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<addTodoFromProps> = ({ addTodo, }) => {
    const [newTodo, setNewTodo] = useState("");
    const [deadline, setDeadline] = useState("")



    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "task") {
            setNewTodo(e.target.value)
        } else {
            setDeadline(String(e.target.value));
        }

    }


    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo, deadline);
        setNewTodo("");
        setDeadline("")
    }


    return (
        <div>

            <form>
                <Input type="text" name="task" value={newTodo} onChange={handleChange} placeholder="Namn på task..." />
                <Input type="date" name="deadline" value={deadline} onChange={handleChange} placeholder="timer..." />
                <Button size="large" variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                    Add todo</Button>

            </form>
        </div>

    )
}