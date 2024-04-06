
import Phaser from 'phaser';
import { GridEngine } from 'grid-engine';
import { Player } from './../entities/Player';

export class CharacterTestScene extends Phaser.Scene {
    private player: Player
    constructor() {
      super('CharacterTestScene');
    }

    preload() {
      this.load.image('grass', 'assets/tiles/grass.png');
      this.load.image('cat', 'assets/tiles/grass.png');
      this.load.spritesheet('runSprite', 'assets/sprites/7 walk.png', { frameWidth: 16, frameHeight: 16 });
      this.load.audio('bananljud', 'assets/audio/bananljud.mp3');  
    }

    create() {
        this.add.image(100, 100, 'grass');
        this.player = new Player(this, 100, 200);
    }

    update(): void {
        this.player.update();
    }
}