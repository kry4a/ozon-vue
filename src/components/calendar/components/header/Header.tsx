import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

  render() {
    return (
      <div className="calendar__header">
        <div className="calendar__title">Декабрь 2019</div>
        <div className="calendar__week">
          Пн Вт Ср Чт Пт Сб Вс
        </div>
      </div>
    )
  }
}
