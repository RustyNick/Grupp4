import { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import { initialTodos } from "./ViewPage";

interface addTaskFromProps {
    addTask: AddTask;
}

export const AddTaskForm: React.FC<addTaskFromProps> = ({ addTask, }) => {
    const [newTask, setNewTask] = useState("");



    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewTask(e.target.value)

    }


    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask("");
    }



    return (
        <div>

            <form>
                <input type="text" name="task" value={newTask} onChange={handleChange} placeholder="Namn på task..." />
                <button type="submit" onClick={handleSubmit}>
                    Add task</button>

            </form>
        </div>

    )
}