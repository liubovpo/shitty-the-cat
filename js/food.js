class Food {
    constructor(gameScreen, left, width, picture) {
      this.gameScreen = gameScreen
      this.left = left
      this.bottom = 20
      this.speed = 0.4
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
  
    updatePosition() {
      this.left -= this.speed
    }
  }