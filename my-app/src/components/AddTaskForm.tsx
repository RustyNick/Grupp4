import { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import { initialTodos } from "./ViewPage";

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
                <input type="text" name="task" value={newTask} onChange={handleChange} placeholder="Namn på task..." />
                <button type="submit" onClick={handleSubmit}>
                    Add task</button>

            </form>
        </div>

    )
}