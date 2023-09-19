class Food {
    constructor(gameScreen, left, width, picture) {
      this.gameScreen = gameScreen
      this.left = left
      this.bottom = 20
      this.speed = 0.4
      this.levelNum = 1
      this.picture = picture
    //   this.height = height
      this.width = width
      this.element = document.createElement('img')
      this.element.src = this.picture
      this.element.style.position = 'absolute'
      this.element.style.left = `${this.left}vw`
      this.element.style.bottom = `${this.bottom}vh`
    //   this.element.style.height = `${this.height}em`
      this.element.style.width = `${this.width}em`
  
      this.gameScreen.appendChild(this.element)
    }
  
    move() {
      this.updatePosition()
      this.element.style.left = `${this.left}vw`
    }
  
    increaseSpeed(){
        setTimeout(() => {
            if (this.speed < 10) {
                this.speed += 0.4;
            }
            console.log(this.speed)
            this.increaseSpeed()
        }, 3000);  
        if (this.speed >= 3) {
            this.levelNum = 2
        } else if (this.speed >= 5){
            this.levelNum = 3
        } else if (this.speed >= 7){
            this.levelNum = 4
        } else if (this.speed >= 9){
            this.levelNum = 5
        }
    }

    updatePosition() {
        this.left -= this.speed
    }
  }