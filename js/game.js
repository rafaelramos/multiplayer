var Game = {};

Game.init = function(){
  // Allow game to continue running event if window doesn't have focus
  game.stage.disableVisibilityChange = true;
};

Game.preload = function() {
  // Load assets
  game.load.tilemap('map', 'assets/map/example_map.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.spritesheet('tileset', 'assets/map/tilesheet.png', 32, 32);
  game.load.image('sprite', 'assets/sprites/sprite.png');
};

Game.create = function(){
  var layer;
  var map = game.add.tilemap('map');

  map.addTilesetImage('tilesheet', 'tileset');

  for(var i = 0; i < map.layers.length; i++) {
      layer = map.createLayer(i);
  }

  // Allow click the map
  layer.inputEnabled = true;
};
