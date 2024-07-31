import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class OnClickButton extends Component {
  @tracked isMenuVisible = false;
  @action
  handleClick() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
