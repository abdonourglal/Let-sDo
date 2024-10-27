export interface Task {
  id: number;
  name: string;
  description?: string;
  completed: boolean;
  important: boolean;
  due: Date;
  priority: 'High' | 'Medium' | 'Low';
}
