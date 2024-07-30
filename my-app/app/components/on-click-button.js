import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class OnClickButton extends Component {
  @action
  handleClick() {
    console.log('hello');
  }
}
