import { Component, Vue } from 'vue-property-decorator';
import Calendar from '@/components/calendar/Calendar';
import Form from '@/components/form/Form';

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
