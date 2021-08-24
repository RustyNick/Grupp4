interface Todo {
    text: string;
    deadline: string;
    task: {
        textName: string;
    }[];
};


type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type AddDeadline = (newDeadline: string) => void;

type RemoveProject = (projectToDelete: string) => void;

type RemoveTask = (taskToDelete: string) => void;