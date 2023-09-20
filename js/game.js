class Game {
    constructor(isSoundOn){
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.player = new Player(this.gameScreen,7)
        // this.food = new Food(this.gameScreen,100,10,"./images/mouse.png")
        // this.obstacle = new Food(this.gameScreen,100,10,"./images/thorn.png")
        this.foodsArr =[]
        this.obstacleArr =[]
        this.animateId = 0
        this.score = 0
        this.level = 1
        this.gameOver = false
        this.speedObst = 0.35

        this.startSound = new Audio("./sounds/start.mov")
        this.endSound = new Audio("./sounds/end.mov")
        this.eatingSound = new Audio("./sounds/yum.mov")
        this.jumpingSound = new Audio("./sounds/jump.mov")
        this.clickSound = new Audio("./sounds/click.mp3")
        this.isSoundOn = isSoundOn;

        this.increaseOriginalSpeed()
        this.scoreInterval = setInterval(() => {
            this.incrementScore();
        }, 1000);
    }

    start(){
        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "block"
        this.gameLoop()
        if(this.isSoundOn){
            this.startSound.play()
        }
        
    }

    increaseOriginalSpeed(){
        setTimeout(() => {
            if (this.speedObst < 1.3) {
                this.speedObst += 0.05;
            }
            this.increaseOriginalSpeed()
        }, 3000);  

        if (this.speedObst >= 0.5 && this.speedObst < 0.75) {
            this.level = 2
        } else if (this.speedObst >= 0.75 && this.speedObst < 1){
            this.level = 3
        } else if (this.speedObst >= 1 && this.speedObst < 1.25){
            this.level = 4
        } else if (this.speedObst >= 1.25){
            this.level = 5
        }
    }

    incrementScore() {
        this.score += 1;
    }

    gameLoop() {
        this.update()

        if (this.animateId % 200 === 0) {

            let imageUrl

            if (Math.random() < 0.5) {
                imageUrl = "./images/mouse.png";
            } else {
                imageUrl = "./images/turkey.png";
            }

            this.foodsArr.push(
              new Food(
                this.gameScreen,
                Math.random() * 500 + 100,10,imageUrl, this.speedObst
              ))     
        }
        if (this.animateId % 250 === 0) {

              this.obstacleArr.push(
                new Food(
                  this.gameScreen,
                  Math.random() * 500 + 100,6,"./images/thorn.png",this.speedObst
                ))     
        }
      
        document.getElementById('score').innerText = this.score
        document.getElementById('final-score').innerText = this.score
        document.getElementById('level').innerText = this.level

        if (this.gameOver) {
            this.gameScreen.style.display = 'none'
            this.gameEndScreen.style.display = 'flex'
            if(this.isSoundOn){
                this.endSound.play()
            }

            const shakeElement = document.getElementById('game-over-window');
            shakeElement.classList.add('shake-animation');
          
            // Remove the shake animation after 1 second
            setTimeout(() => {
              shakeElement.classList.remove('shake-animation');
            }, 1000);
            
            return
          } else {
            this.animateId = requestAnimationFrame(() => this.gameLoop())
          }  
    }

    update(){    
        const nextFoods = []
        this.foodsArr.forEach(food => {
          food.move()
          if (this.player.didCollide(food)) {
            food.element.remove()
            this.score += 5
            if(this.isSoundOn){
                this.eatingSound.play()
            }  
          }  else {
            nextFoods.push(food)
          }
        })
        this.foodsArr = nextFoods

        const nextObst = []
        this.obstacleArr.forEach(obst => {
          obst.move()
          if (this.player.didCollide(obst)) {
            obst.element.remove()
            this.gameOver = true
          }  else {
            nextObst.push(obst)
          }
        })
        this.obstacleArr = nextObst
    }  
}