import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  render() {
    return (
      <>
        <div className="form">
          <div className="form__title"></div>
          <div className="form__tasks"></div>
        </div>
      </>
    )
  }
}
