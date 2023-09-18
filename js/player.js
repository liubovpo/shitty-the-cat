class Player {
    constructor(gameScreen, left, top){
        this.gameScreen = gameScreen; 
        this.left = left; 
        this.top = top; 
        // this.directionY = 0;
        this.jumpHeight = 20; 
        this.jumpSpeed = 1.5; 
        this.isJumping = false;
        this.isFalling = false;
        this.gravity = 0.5;
        this.jumpInterval = null;
        this.fallInterval = null; 

        this.element = document.createElement('div');
        this.element.classList.add('player');
        this.bottomRectangle = document.createElement('div');
        this.bottomRectangle.classList.add('bottom-rectangle');
        this.middleRectangle = document.createElement('div');
        this.middleRectangle.classList.add('middle-rectangle');
        this.head = document.createElement('div');
        this.head.classList.add('head');

        this.element.appendChild(this.bottomRectangle);
        this.element.appendChild(this.middleRectangle);
        this.element.appendChild(this.head);

        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}vw`
        this.element.style.top = `${this.top}vh`

        this.gameScreen.appendChild(this.element);
    }

    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.jumpInterval = setInterval(() => this.jumpStep(), 16); 
        }
    }
    fall() {
        if (!this.isFalling) {
            this.isFalling = true;
            this.fallInterval = setInterval(() => this.fallStep(), 16); 
        }
    }
    jumpStep() {
        if (this.top > this.jumpHeight) {
            this.top -= this.jumpSpeed;
            this.updatePosition(); 
            console.log(this.top)
        } else {
            this.isJumping = false;
            clearInterval(this.jumpInterval); 
        }
    }
    fallStep() {
        if (this.top < 50) {
            this.top += this.gravity;
            console.log(this.top)
            this.updatePosition();
        } else {
            this.isFalling = false;
            clearInterval(this.fallInterval); 
        }
    }

    updatePosition(){
        this.element.style.top = `${this.top}vh`;
    }

}