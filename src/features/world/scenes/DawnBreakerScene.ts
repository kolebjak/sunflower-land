import { Label } from "../containers/Label";
import { RoomId } from "../roomMachine";
import { interactableModalManager } from "../ui/InteractableModals";
import { BaseScene, NPCBumpkin } from "./BaseScene";

const BUMPKINS: NPCBumpkin[] = [
  {
    npc: "bella",
    x: 370,
    y: 370,
  },
  {
    npc: "sofia",
    x: 245,
    y: 150,
  },
  {
    npc: "marcus",
    x: 450,
    y: 290,
  },
];

export class DawnBreakerScene extends BaseScene {
  roomId: RoomId = "dawn_breaker";

  constructor() {
    super("dawn_breaker");
  }

  preload() {
    super.preload();

    this.load.spritesheet("homeless_man", "world/homeless_man.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet("drummer", "world/drummer.png", {
      frameWidth: 30,
      frameHeight: 30,
    });

    this.load.spritesheet("dancing_girl", "world/dancing_girl.png", {
      frameWidth: 19,
      frameHeight: 21,
    });

    this.load.spritesheet("fogueira", "world/fogueira.png", {
      frameWidth: 27,
      frameHeight: 46,
    });

    this.load.spritesheet("turtle", "world/land_turtle.png", {
      frameWidth: 39,
      frameHeight: 23,
    });

    this.load.spritesheet("frog", "world/frog.png", {
      frameWidth: 16,
      frameHeight: 27,
    });
  }

  async create() {
    this.map = this.make.tilemap({
      key: "dawn-breaker",
    });

    super.create();

    // Homeless man
    const sprite = this.add.sprite(125, 261, "homeless_man");
    this.anims.create({
      key: "homeless_animation",
      frames: this.anims.generateFrameNumbers("homeless_man", {
        start: 0,
        end: 11,
      }),
      repeat: -1,
      frameRate: 10,
    });
    sprite.play("homeless_animation", true);
    sprite.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
      interactableModalManager.open("homeless_man");
    });

    const label = new Label(this, "DONATIONS");
    this.add.existing(label);
    label.setPosition(125, 241);
    label.setDepth(100000000);

    // Drummer
    const drummer = this.add.sprite(255, 365, "drummer");
    this.anims.create({
      key: "drummer_animation",
      frames: this.anims.generateFrameNumbers("drummer", {
        start: 0,
        end: 18,
      }),
      repeat: -1,
      frameRate: 10,
    });
    drummer.play("drummer_animation", true);

    // Dancing Girl
    const dancing = this.add.sprite(278, 365, "dancing_girl");
    this.anims.create({
      key: "dancing_girl_animation",
      frames: this.anims.generateFrameNumbers("dancing_girl", {
        start: 0,
        end: 18,
      }),
      repeat: -1,
      frameRate: 10,
    });
    dancing.play("dancing_girl_animation", true);

    // Fire
    const fire = this.add.sprite(352, 435, "fogueira");
    this.anims.create({
      key: "fire_animation",
      frames: this.anims.generateFrameNumbers("fogueira", {
        start: 0,
        end: 11,
      }),
      repeat: -1,
      frameRate: 10,
    });
    fire.play("fire_animation", true);
    fire.setDepth(100000);

    // Turtle
    const turtle = this.add.sprite(555, 117, "turtle");
    this.anims.create({
      key: "turtle_animation",
      frames: this.anims.generateFrameNumbers("turtle", {
        start: 0,
        end: 4,
      }),
      repeat: -1,
      frameRate: 2,
    });
    turtle.play("turtle_animation", true);

    // Frog
    const frog = this.add.sprite(335, 246, "frog");
    this.anims.create({
      key: "frog_animation",
      frames: this.anims.generateFrameNumbers("frog", {
        start: 0,
        end: 21,
      }),
      repeat: -1,
      frameRate: 10,
    });
    frog.play("frog_animation", true);

    this.initialiseNPCs(BUMPKINS);

    const camera = this.cameras.main;
  }
}