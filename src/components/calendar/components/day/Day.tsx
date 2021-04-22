import { Component, Vue } from 'vue-property-decorator';

const DayProps = Vue.extend({
  props: {
    dateDay: Number,
    isActive: Boolean,
    hasTasks: Boolean,
  }
})

@Component
export default class Day extends DayProps {
  protected generalClass = 'calendar__day';

  getClassList(modifiers: String[]): string {
    let classlist = `${this.generalClass} `;

    modifiers?.forEach((modifier) => {
      const prop = `${this.generalClass}--${modifier} `;
      classlist = classlist + prop;
    })

    return classlist;
  }

  render() {
    const { dateDay, isActive, hasTasks } = this;

    const modifiers = [];
    isActive && modifiers.push('active');
    hasTasks && modifiers.push('tasks');

    return (
      <>
        <div class={this.getClassList(modifiers)}>
          {dateDay}
        </div>
      </>
    )
  }
}
