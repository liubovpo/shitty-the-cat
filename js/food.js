class Food {
    constructor(gameScreen, left, top, height, width) {
      this.gameScreen = gameScreen
      this.left = left
      this.top = top
      this.height = height
      this.width = width
      this.element = document.createElement('img')
  
      this.element.src = '../images/mouse.png'
  
      this.element.style.position = 'absolute'
      this.element.style.left = `${this.left}vw`
      this.element.style.top = `${this.top}vh`
      this.element.style.height = `${this.height}em`
      this.element.style.width = `${this.width}em`
  
      this.gameScreen.appendChild(this.element)
    }
  
    move() {
      this.updatePosition()
      this.element.style.left = `${this.left}vw`
    }
  
    updatePosition() {
      this.left -= 1
    }
  }