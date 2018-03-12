/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../prefabs/mushroom'

export default class Play extends Phaser.State {
  create() {
    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    });

    this.game.add.existing(this.mushroom);
    
  }

  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32);
    }
  }
}
