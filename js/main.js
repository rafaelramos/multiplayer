var main_element = document.getElementById('game');
var game = new Phaser.Game(16 * 32, 600, Phaser.AUTO, main_element);

game.state.add('Game', Game);
game.state.start('Game');
