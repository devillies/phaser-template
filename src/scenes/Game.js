import { Scene } from 'phaser'

export default class HelloWorldScene extends Scene {
	constructor() {
		super('GameScene')
	}

	init() {
		this.gameHeight = this.scale.height
		this.gameWidth = this.scale.width
	}
	preload() {}

	create() {
		this.add.text(
			this.gameWidth / 2 - 100,
			this.gameHeight / 2,
			'Hello Students!\nPlease use this template wisely',
			{
				fontSize: '30pt',
				fill: '#000',
			},
		)
	}

	update() {}
}
