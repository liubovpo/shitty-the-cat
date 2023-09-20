window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const exitButton = document.getElementById("exit-button");
    const instructionsImage = document.getElementById("instructions-image");
    const audioButton = document.getElementById('audio-button')

    let isSoundOn = true;
    let game 
  
    startButton.addEventListener("click", () => {
      startGame();
    });
  
    function startGame() {
      game = new Game(isSoundOn);
      game.start();
      setTimeout(() => {
        instructionsImage.style.display = "none";
    }, 4000); 
    }

    document.addEventListener('keydown', event => {
      if (event.code === 'Space') {
        if (!game.player.isJumping) { 
          game.player.jump();
          game.player.detectSpacePressed();
          if(isSoundOn){
            game.jumpingSound.play()
          }
          //jumping-animation
          game.player.middleRectangle.classList.add('jump-animation');
          game.player.middleRectangle.addEventListener('animationend', () => {
            game.player.middleRectangle.classList.remove('jump-animation');
          });
        }
      }
    })

    window.addEventListener('keyup', event => {
      if (event.code === 'Space') { 
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

  function toggleSound() {
    
    if (isSoundOn) {
      isSoundOn = false
      document.getElementById("sound-icon").src = "./images/sound-off.png"
      audioButton.style.backgroundColor = "#737279"
    } else {
      isSoundOn = true
      document.getElementById("sound-icon").src = "./images/sound-on.png"
      audioButton.style.backgroundColor = "#ff2500"
    }
  }

  audioButton.addEventListener('click', () => {
    toggleSound();
  });
}