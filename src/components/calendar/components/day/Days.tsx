import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Days extends Vue {
  render() {
    const days = [];

    return (
      <>
        <div className="calendarDays">
          {
            days.map((day) => {
              return <Day {...day}/>
            })
          }
        </div>
      </>
    )
  }
}
