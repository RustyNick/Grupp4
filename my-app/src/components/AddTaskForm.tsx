import { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import { Button, Input } from '@material-ui/core'

interface addTaskFromProps {
    todoId: string;
    addTask: AddTask;
}

export const AddTaskForm: React.FC<addTaskFromProps> = ({ addTask, todoId }) => {
    const [newTask, setNewTask] = useState("");



    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewTask(e.target.value)

    }


    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTask(newTask, todoId);
        setNewTask("");
    }



    return (
        <div>

            <form>
                <Input type="text" name="task" value={newTask} onChange={handleChange} placeholder="Namn på task..." />
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                    Add task</Button>

            </form>
        </div>

    )
}