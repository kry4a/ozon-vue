import { Component, Vue } from 'vue-property-decorator';
import { getDaysInMonth } from '@/helpers/date';

@Component
export default class Days extends Vue {
  render() {
    const date = new Date();
    const days = getDaysInMonth(date.getMonth() + 1,date.getFullYear());

    return (
      <div class="calendar__days">
        <p>Днней в месяце: {days}</p>
        {
          /*
          days.map((day) => {
            return <Day {...day}/>
          })
           */
        }
      </div>
    )
  }
}
