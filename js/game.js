class Game {
    constructor(){
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.player = new Player(this.gameScreen,7)
        this.food = new Food(this.gameScreen,100,10,"./images/mouse.png")
        this.obstacle = new Food(this.gameScreen,100,10,"./images/thorn.png")
        this.foodsArr =[]
        this.obstacleArr =[]
        this.animateId = 0
        this.score = 0
        this.gameOver = false
    }
    start(){
        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "block"
        this.gameLoop()
        this.food.increaseSpeed()
    }
    gameLoop(){
        this.update()
        
        if (this.animateId % 200 === 0) {
            this.foodsArr.push(
              new Food(
                this.gameScreen,
                Math.random() * 1000 + 100,10,"./images/mouse.png"
              ))     
        }
        if (this.animateId % 300 === 0) {

              this.obstacleArr.push(
                new Food(
                  this.gameScreen,
                  Math.random() * 1000 + 100,6,"./images/thorn.png"
                ))     
        }
      
        document.getElementById('score').innerText = this.score
        document.getElementById('final-score').innerText = this.score
        document.getElementById('level').innerText = this.food.levelNum

        if (this.gameOver) {
            this.gameScreen.style.display = 'none'
            this.gameEndScreen.style.display = 'flex'
            return
          } else {
            this.animateId = requestAnimationFrame(() => this.gameLoop())
          }  
    }

    update(){    
        // this.food.move()
        // console.log(this.foodsArr)
        const nextFoods = []
        this.foodsArr.forEach(food => {
          food.move()
          if (this.player.didCollide(food)) {
            food.element.remove()
            this.score += 5
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