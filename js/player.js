class Player {
    constructor(gameScreen, left){
        this.gameScreen = gameScreen; 
        this.left = left; 
        this.bottom = 20; 
        this.jumpHeight = 20; 
        this.jumpSpeed = 1.8; 
        this.isJumping = false;
        this.jumpTimer = null;
        this.isFalling = false;
        this.gravity = 0.7;
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
        this.element.style.bottom = `${this.bottom}vh`

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
            clearTimeout(this.jumpTimer);
            this.fallInterval = setInterval(() => this.fallStep(), 16); 
        }
    }
    jumpStep() {
        if (this.bottom < 65 ) {
            this.bottom  += this.jumpSpeed;
            this.updatePosition(); 
            
        } else {
            this.isJumping = false;
            clearInterval(this.jumpInterval); 
        }
    }
    fallStep() {
        if (this.bottom > 20) {
            this.bottom -= this.gravity;
            this.updatePosition();
            this.isJumping = true;
        } else {
            this.isFalling = false;
            this.isJumping = false; 
            clearInterval(this.fallInterval); 
        }
    }

    detectSpacePressed() {
        this.jumpTimer = setTimeout(() => {
            this.fall();
        }, 300);
    }

    updatePosition(){
        this.element.style.bottom = `${this.bottom}vh`
    }
    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()
    
        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            // eating animation
            this.head.classList.add('jump-animation-head');
            this.head.addEventListener('animationend', () => {
                this.head.classList.remove('jump-animation-head');
            });

            return true
        } else {
            return false
        }
      }
}