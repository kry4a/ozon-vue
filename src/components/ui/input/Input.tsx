import { Component, Vue } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';

//import './Input.scss';

export interface IInputProps {
  id?: string;
  label?: string;
  value?: any;
  onChange?: Function;
}


export default class Input extends VueComponent<IInputProps> {
  render() {
    const { id, label, value, onChange } = this.$props;

    return(
      <div class="input">
        <input
          id={`input-${id}`}
          type={"input"}
          value={value}
          class="checkbox__input"
          onChange={(e) => {
            onChange(e)
          }}
          placeholder={label}
        />
      </div>
    );
  }
}
