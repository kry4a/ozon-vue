import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Calendar extends Vue {
  render() {
    return (
      <>
        <div className="calendar">
          {
          /*
          <CalendarHeader/>
          <Days/>
          */
          }
        </div>
      </>
    )
  }
}
