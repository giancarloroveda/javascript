export function Task(title, completed, createdAt, updatedAt, id) {
    if (!title) {
        throw new Error("Task need a required parameter: title");
    }
    this.title = title;
    this.id = id || null;
    this.completed = completed || false;
    this.createdAt = createdAt || Date.now();
    this.updatedAt = updatedAt || null;
    this.toggleDone = function () {
        this.completed = !this.completed;
    };
}
