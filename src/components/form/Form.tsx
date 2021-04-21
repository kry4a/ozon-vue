import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  render() {
    return (
      <>
        <div className="layout">
          <div className="layout__part">
            <Calendar/>
          </div>
          <div className="layout__part">
            <Form/>
          </div>
        </div>
      </>
    )
  }
}
