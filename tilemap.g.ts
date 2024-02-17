// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060603030303030606010303020303030303060606060606010106060606060606060606060606060601010101010101010606060601010606010606060606060606060606060606060106060606060606060101060606060601060101030303010106060606060606010606060606060605060606010106060101010101010101010606060606060601060606060606060601010606060606010606060606060606060606060606060106060606060606060606060606060601060606060606060401010101030303010303030303010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 . 
. . . 2 2 . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
2 2 . . . . . 2 . 2 2 . . . 2 2 
. . . . . . . 2 . . . . . . . . 
. . . 2 2 . . 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
2 2 2 2 . . . 2 . . 2 . . 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.doorOpenNorth,myTiles.tile5,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
