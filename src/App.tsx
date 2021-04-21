import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld';

import './App.css'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <img alt="Vue logo" src={require('./assets/logo.png')} />
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi cupiditate earum eum fugiat iste maiores minima molestiae nesciunt pariatur quod repellat sapiente tempore ut voluptas voluptate, voluptates! Asperiores, eius.</p>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
      </div>
    )
  }
}
