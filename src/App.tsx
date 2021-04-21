import { Component, Vue } from 'vue-property-decorator';
import Layout from '@/components/layout/Layout';

import './App.css'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi cupiditate earum eum fugiat iste maiores minima molestiae nesciunt pariatur quod repellat sapiente tempore ut voluptas voluptate, voluptates! Asperiores, eius.</p>
        <Layout/>
      </div>
    )
  }
}
