class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.multiatlas(
            "coins",
            `img/confetti/confetti.json`,
            `img/confetti`
        );

        this.load.multiatlas(
            "test",
            `img/test/test.json`,
            `img/test`
        );
    }

    create ()
    {
        this.anims.create({
            key: "coins",
            frames: this.anims.generateFrameNames("coins"),
            frameRate: 40,
        });

        this.anims.create({
            key: "test",
            frames: this.anims.generateFrameNames("test"),
            frameRate: 40,
        });

        this.add
            .sprite(
                0,
                0,
                "coins",
            )
            .setOrigin(1)
            .setScale(3)
            .setDepth(500)
            .play('coins')

        this.test = this.add
        .sprite(
            0,
            0,
            "test",
        )
        .setOrigin(1)
        .setScale(3)
        .setDepth(500)
        .play('test')

        console.log('fsdfsdf')
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 2000,
    height: 2000,
    pixelArt: true,
    scene: [ Example ]
};

const game = new Phaser.Game(config);


