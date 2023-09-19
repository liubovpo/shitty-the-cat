window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const exitButton = document.getElementById("exit-button");
    const instructionsImage = document.getElementById("instructions-image");
    let game 
  
    startButton.addEventListener("click", () => {
      startGame();
    });

  
    function startGame() {
      console.log("start game");
      game = new Game();
      game.start();
      setTimeout(() => {
        instructionsImage.style.display = "none";
    }, 4000); 
    }

    document.addEventListener('keydown', event => {
      // console.log('key', event)
      if (event.code === 'Space') {
        if (!game.player.isJumping) { 
          console.log('Jumping...')
          game.player.jump();
          game.player.detectSpacePressed();
        }
      }
    })

    window.addEventListener('keyup', event => {
      console.log('key', event)
      if (event.code === 'Space') { 
        console.log('Falling...');
        game.player.fall();
      }
    });

    restartButton.addEventListener('click', () => {
      // game.player.element.remove()
      // game.food.element.remove()
      // startGame();
      location.reload(); 
  });

  exitButton.addEventListener('click', () => {
    // game.player.element.remove()
    // game.food.element.remove()
    // startGame();
    location.reload(); 
  });
}