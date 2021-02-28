scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile0`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile1`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile7`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile4`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile3`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile8`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
function tileOverlapped (tile: Image) {
    tile_index = listOfTiles.indexOf(tile)
    if (tile_index == 0) {
        for (let tile1 of tiles.getTilesByType(listOfTiles[1])) {
            tiles.setWallAt(tile1, false)
        }
        for (let tile1 of tiles.getTilesByType(listOfTiles[0])) {
            tiles.setTileAt(tile1, assets.tile`transparency16`)
        }
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
    } else if (tile_index == 1) {
        for (let tile1 of tiles.getTilesByType(listOfTiles[2])) {
            tiles.setWallAt(tile1, false)
        }
        for (let tile1 of tiles.getTilesByType(listOfTiles[1])) {
            tiles.setTileAt(tile1, assets.tile`transparency16`)
        }
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
    } else if (tile_index == 2) {
        for (let tile1 of tiles.getTilesByType(listOfTiles[3])) {
            tiles.setWallAt(tile1, false)
        }
        for (let tile1 of tiles.getTilesByType(listOfTiles[2])) {
            tiles.setTileAt(tile1, assets.tile`transparency16`)
        }
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
    } else if (tile_index == 3) {
        game.over(true)
    } else {
        info.changeLifeBy(-1)
        return 0
    }
    return 1
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (tileOverlapped(assets.tile`myTile2`) == 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
let tile_index = 0
let listOfTiles: Image[] = []
let version = 0
tiles.setTilemap(tilemap`level1`)
if (Math.percentChance(25)) {
    game.showLongText("Ronnie go get one t(tomato) one sc(sugar candy) get one q(quesadilla) and get one mb(milk box), now remember this.", DialogLayout.Full)
    version = 1
    listOfTiles = [assets.tile`myTile3`, assets.tile`myTile4`, assets.tile`myTile2`, assets.tile`myTile1`]
} else if (Math.percentChance(25)) {
    game.showLongText("Ronnie go get one oj(orange juice) one mb(milk box) get one q(quesadilla) and get one p(pinaple), now remember this.", DialogLayout.Full)
    version = 2
    listOfTiles = [assets.tile`myTile`, assets.tile`myTile1`, assets.tile`myTile2`, assets.tile`myTile0`]
} else if (Math.percentChance(25)) {
    game.showLongText("Ronnie go get one oj(orange juice) one sc(sugar candy) get one(tomato) and get one mb(milk box), now remember this.", DialogLayout.Full)
    version = 3
    listOfTiles = [assets.tile`myTile`, assets.tile`myTile4`, assets.tile`myTile3`, assets.tile`myTile1`]
} else {
    game.showLongText("Ronnie go get one sob(sac of beans) one sp(sugar pouch) get one(tomato) and get one mb(milk box), now remember this.", DialogLayout.Full)
    version = 4
    listOfTiles = [assets.tile`myTile7`, assets.tile`myTile8`, assets.tile`myTile3`, assets.tile`myTile1`]
}
let ronnie_the_shopper = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f d d d d d f . . . . . . 
    . . . f d 9 d 9 d f . . . . . . 
    . . . f d d d d d f . . . . . . 
    . . . f f d d d f f . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . . . 8 8 8 . . . . . . . . 
    . . . . . 8 8 8 . . . . . . . . 
    . . . . . 8 . 8 . . . . . . . . 
    . . . . . b . b . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ronnie_the_shopper)
info.setLife(1)
scene.cameraFollowSprite(ronnie_the_shopper)
tiles.placeOnTile(ronnie_the_shopper, tiles.getTileLocation(1, 0))
scene.setBackgroundColor(13)
info.setScore(10)
for (let value of listOfTiles) {
    if (listOfTiles.indexOf(value) == 0) {
    	
    } else {
        for (let dumb of tiles.getTilesByType(value)) {
            tiles.setWallAt(dumb, true)
        }
    }
}
