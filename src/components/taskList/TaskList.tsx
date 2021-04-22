import { VueComponent } from '@/shims-vue';
import {Component, Prop} from 'vue-property-decorator';

import TaskView from '@/components/taskList/TaskView';

export interface Task {
  title: string,
  status?: boolean,
  date?: Date,
}

export interface TaskListProps {
  tasks: Task[];
}

@Component
export default class TaskList extends VueComponent<TaskListProps> {
  @Prop()
  private tasks: Task[];

  render() {
    return (
      <div class="task-list">
        {
          this.tasks?.map((task) => {
            return <TaskView
              title={task.title}
              status={task.status}
              date={task.date}
            />;
          })
        }
      </div>
    )
  }
}
