interface Todo {
    text: string;
    deadline: string;
    tasks: {
        text: string;
        complete: boolean;
    }[];
};


type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type AddDeadline = (newDeadline: string) => void;