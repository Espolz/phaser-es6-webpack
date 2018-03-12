import Phaser from 'phaser'
import config from '../config';

export default class Boot extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#EDEEC9'
  }

  preload() {
    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
  }

  render() {
    this.state.start('Splash');
  }
}
