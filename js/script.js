window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;
  
    startButton.addEventListener("click", function () {
      startGame();
    });
  
    function startGame() {
      console.log("start game");
      game = new Game();
      game.start();
    }

    document.addEventListener('keydown', event => {
      // console.log('key', event)
      if (event.code === 'Space') {
        console.log('Jumping...');
          game.player.jump();
      }
    })

    window.addEventListener('keyup', event => {
      console.log('key', event)
      if (event.code === 'Space') { 
        console.log('Falling...');
        game.player.fall();
      }
    });
}