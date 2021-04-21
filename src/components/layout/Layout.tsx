import {Component, Prop, Vue} from 'vue-property-decorator';
import Calendar from '@/components/calendar/Calendar';
import Form from '@/components/form/Form';
import TaskList, { Task } from '@/components/taskList/TaskList';

@Component
export default class Layout extends Vue {
  @Prop()
  private tasks!: Task[];

  getTasks(): Task[] {
    return [
      {
        title: 'Я тестовая таска 1',
        status: false,
      },
      {
        title: 'Я тестовая таска 2',
        status: false,
      },
      {
        title: 'Я тестовая таска 3',
        status: false,
      },
      {
        title: 'Я тестовая таска 4',
        status: false,
      }
    ];
  }

  render() {
    console.log('props', this.tasks);
    return (
      <div className="layout">
        <div className="layout__part">
          <Calendar/>
        </div>
        <div className="layout__part">
          <TaskList tasks={this.getTasks()}/>
          <Form/>
        </div>
      </div>
    )
  }
}
