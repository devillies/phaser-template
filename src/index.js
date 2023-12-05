import { AUTO, Scale, Game } from 'phaser'
import AmongUsScene from './scenes/AmongUsScene'

const config = {
	type: AUTO,
	backgroundColor: '#32A5E7',
	scale: {
		width: 1920,
		height: 1080,
		mode: Scale.FIT,
		autoCenter: Scale.CENTER_BOTH,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: -1 },
			debug: false,
		},
	},
	scene: [AmongUsScene],
}

/* eslint-disable-next-line */
export default new Game(config)
