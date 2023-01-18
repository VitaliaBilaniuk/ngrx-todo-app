export interface TodoModel {
    id: number
    title: string;
    completed: boolean
}

export let todos: TodoModel[] = [
    {
        id: 0,
        completed: false,
        title: "hello"
    },
    {
        id: 1,
        completed: true,
        title: "hi"
    }
]