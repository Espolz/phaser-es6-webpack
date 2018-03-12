import 'pixi';
import 'p2';
import Phaser from 'phaser';

import config from './config';
import * as states from './states';

const GAME = new Phaser.Game(config.gameWidth, config.gameHeight, Phaser.CANVAS, 'content');
Object.keys(states).forEach(state => GAME.state.add(state, states[state]));

GAME.state.start('Boot');