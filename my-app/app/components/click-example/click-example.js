import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ClickExampleComponent extends Component {
  @action
  handleClick() {
    console.log('Button was clicked!');
  }
}
