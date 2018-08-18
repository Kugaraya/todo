export class TodoItem {
    todoText: string;
    isDone: boolean;
    isArchived: boolean;
    createdAt: Date;
    finishedAt: Date;

    constructor(todoText: string) {
        this.todoText = todoText;
        this.isDone = false;
        this.isArchived = false;
    }
}