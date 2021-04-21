import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import Checkbox from '@/components/ui/checkbox/Checkbox';

export interface TaskProps {
  title: string,
  status?: boolean,
  date?: Date,
}

@Component
export default class TaskView extends VueComponent<TaskProps> {
  @Prop()
  private title: string;
  @Prop()
  private status: boolean;
  @Prop()
  private date: Date;

  render() {
    const { title, status } = this;

    return (
      <div className="task">
        <Checkbox label={title} checked={status}/>
      </div>
    )
  }
}
