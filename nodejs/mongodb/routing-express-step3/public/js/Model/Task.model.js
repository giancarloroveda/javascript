export function Task(title, userId, completed, createdAt, updatedAt, id) {
    if (!title) {
        throw new Error("Task need a required parameter: title");
    }
    this.title = title;
    if (id) {
        this._id = id
    }
    this.userId = userId
    this.completed = completed || false;
    this.createdAt = createdAt || Date.now();
    this.updatedAt = updatedAt || null;
    this.toggleDone = function () {
        this.completed = !this.completed;
    };
}
