export interface Task {
  taskId: number;
  description: string;
  dueDate: Date;
  assignee: string;
  createdBy: string;
  currentStatus: string;
}
