interface Todo {
    id: string;
    text: string;
    deadline: string;
    task: {
        id: string;
        textName: string;
    }[];
};


type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type AddTask = (newTask: string) => void;

type AddDeadline = (newDeadline: string) => void;

type RemoveProject = (projectId: string) => void;

type RemoveTask = (taskId: string) => void;