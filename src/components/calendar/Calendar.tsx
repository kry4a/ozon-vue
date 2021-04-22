import { Component, Vue } from 'vue-property-decorator';
import Days from '@/components/calendar/components/day/Days';
import Header from '@/components/calendar/components/header/Header';

@Component
export default class Calendar extends Vue {
  render() {
    return (
      <div class="calendar">
        <Header/>
        <Days/>
      </div>
    )
  }
}
