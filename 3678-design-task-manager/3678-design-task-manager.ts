class TaskManager {
  private USER_ID_RANGE = [1, Math.pow(10, 5)] as const;
  private TASK_ID_RANGE = [1, Math.pow(10, 5)] as const;
  private PRIORITY_RANGE = [1, Math.pow(10, 9)] as const;

  private NOT_FOUND = -1;
  private REMOVED = -2;
  private REMOVED_TASK = new Task(this.REMOVED, this.REMOVED, this.REMOVED);

  // store Task or the REMOVED_TASK sentinel (or undefined if never assigned)
  private tasks: Array<Task | undefined> = new Array(this.TASK_ID_RANGE[1] + 1);
  private maxHeap = new PriorityQueue<Task>((a, b) => this.comparator(a, b));

  constructor(initialTasks: number[][]) {
    for (const [userId, taskId, priority] of initialTasks) {
      const t = new Task(userId, taskId, priority);
      this.tasks[taskId] = t;
      this.maxHeap.enqueue(t);
    }
  }

  private comparator(first: Task, second: Task): number {
    return first.priority === second.priority
      ? second.taskID - first.taskID
      : second.priority - first.priority; // max-heap by priority, then taskID
  }

  add(userId: number, taskId: number, priority: number): void {
    const t = new Task(userId, taskId, priority);
    this.tasks[taskId] = t;
    this.maxHeap.enqueue(t);
  }

  edit(taskId: number, newPriority: number): void {
    const existing = this.tasks[taskId];
    if (!existing || existing === this.REMOVED_TASK) return;
    const userId = existing.userID;
    const t = new Task(userId, taskId, newPriority);
    this.tasks[taskId] = t;
    this.maxHeap.enqueue(t);
  }

  rmv(taskId: number): void {
    if (this.tasks[taskId]) {
      this.tasks[taskId] = this.REMOVED_TASK;
    }
  }

  execTop(): number {
    let userId = this.NOT_FOUND;

    while (!this.maxHeap.isEmpty() && userId === this.NOT_FOUND) {
      const current = this.maxHeap.dequeue()!;
      if (this.taskMatchesCurrentState(current)) {
        userId = current.userID;
        this.tasks[current.taskID] = this.REMOVED_TASK;
      }
    }
    return userId;
  }

  private taskMatchesCurrentState(current: Task): boolean {
    const snapshot = this.tasks[current.taskID];
    // must exist, not removed, and match fields
    return !!snapshot &&
           snapshot !== this.REMOVED_TASK &&
           snapshot.userID === current.userID &&
           snapshot.priority === current.priority;
  }
}

class Task {
  constructor(
    public userID: number,
    public taskID: number,
    public priority: number
  ) {}
}


/**
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */