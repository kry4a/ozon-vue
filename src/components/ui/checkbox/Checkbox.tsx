import { Component, Vue } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';

//import './Checkbox.scss';

export interface ICheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  value?: any;
  onChange?: Function;
}


export default class Checkbox extends VueComponent<ICheckboxProps> {
  render() {
    const { id, label, value, checked, onChange } = this.$props;

    return(
      <div className="checkbox">
        <input
          id={`checkbox-${id}`}
          type={"checkbox"}
          value={value}
          className="checkbox__input"
          checked={checked}
          onChange={(e) => {
            onChange(e)
          }}
        />
        <label htmlFor={`checkbox-${id}`} className="checkbox__label">
          {label}
        </label>
      </div>
    );
  }
}
