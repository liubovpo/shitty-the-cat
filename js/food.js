class Food {
    constructor(gameScreen, left, width, picture, speed) {
        this.gameScreen = gameScreen
        this.left = left
        this.bottom = 20
        this.speed = speed
        this.picture = picture
        this.width = width
        this.element = document.createElement('img')
        this.element.src = this.picture
        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}vw`
        this.element.style.bottom = `${this.bottom}vh`
        this.element.style.width = `${this.width}em`
        this.increaseSpeed()
        this.gameScreen.appendChild(this.element)
    }
  
    move() {
        this.updatePosition()
        this.element.style.left = `${this.left}vw`
    }
  
    increaseSpeed(){
        setTimeout(() => {
            if (this.speed < 3) {
                this.speed += 0.05;
            }
            this.increaseSpeed()
        }, 3000);  
    }

    updatePosition() {
        this.left -= this.speed
    }
  }