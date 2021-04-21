import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import { Task } from '@/components/taskList/TaskList';

//import './Checkbox.scss';

export interface CheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  value?: any;
  onChange?: Function;
}

@Component
export default class Checkbox extends VueComponent<CheckboxProps> {
  @Prop()
  private id: Task[];
  @Prop()
  private label: Task[];
  @Prop()
  private checked: Task[];
  @Prop()
  private value: Task[];
    @Prop()
  private onChange: Function;

  render() {
    return(
      <div className="checkbox">
        <input
          id={`checkbox-${this.id}`}
          type={"checkbox"}
          value={this.value}
          className="checkbox__input"
          checked={this.checked}
          onChange={(e) => {
            this.onChange(e)
          }}
        />
        <label htmlFor={`checkbox-${this.id}`} className="checkbox__label">
          {this.label}
        </label>
      </div>
    );
  }
}
