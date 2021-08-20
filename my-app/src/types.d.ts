interface Todo {
    id?: number;
    text: string;
    tasks: {
        text: string;
        complete: boolean;
    }[];
};


type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;