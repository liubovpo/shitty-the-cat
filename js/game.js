class Game {
    constructor(){
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        // this.gameEndScreen = document.getElementById('game-end')
        this.player = new Player(this.gameScreen,7,50)
        this.food = new Food(this.gameScreen,7,50,-2,13)
    }
    start(){
        this.startScreen.style.display = "none"
        // this.gameEndScreen.style.display = 'none'
        this.gameScreen.style.display = "block"
        // this.gameScreen.style.height = `${this.height}px`;
        // this.gameScreen.style.width = `${this.width}px`;
        this.gameLoop()
    }
}