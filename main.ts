scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(true)
})
tiles.setCurrentTilemap(tilemap`level1`)
let myCorg = corgio.create(SpriteKind.Player)
tiles.placeOnTile(myCorg, tiles.getTileLocation(0, 14))
scene.cameraFollowSprite(myCorg)
myCorg.horizontalMovement()
myCorg.verticalMovement()
