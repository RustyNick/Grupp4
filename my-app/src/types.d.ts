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

type AddTodo = (newTodo: string, newDeadline: string) => void;

type AddTask = (newTask: string, todoId: string) => void;

type RemoveProject = (projectId: string) => void;

type RemoveTask = (taskId: string) => void;