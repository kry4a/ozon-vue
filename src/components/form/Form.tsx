import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  render() {
    return (
      <div class="form">
        <div class="form__title"></div>
        <div class="form__tasks"></div>
      </div>
    )
  }
}
