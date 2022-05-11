type Task = {
    userID: string | number;
    id: string | number;
    title: string;
    completed: boolean
};

export const tasks: Task[] = [
    {
        userID: 1,
        id: 1,
        title: "Bom dia!",
        completed: false
    },
    {
        userID: 1,
        id: 2,
        title: "Boa tarde",
        completed: false
    },
    {
        userID: 1,
        id: 3,
        title: "Boa noite",
        completed: true
    },
]