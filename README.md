# Shitty the Cat

[Click here to see deployed game](https://liubovpo.github.io/shitty-the-cat/)


## Description

Welcome to 'Shitty the Cat,' an exciting and fast-paced adventure where you take on the role of a tenacious feline trying to survive the tough streets. In this game, you'll navigate the urban jungle, jumping over obstacles and collecting food items to earn extra points. Keep an eye on the clock, as time is your ally, with every passing second contributing to your score. But be prepared for increasing challenges as the speed of obstacles ramps up, putting your feline reflexes to the test. Play 'Shitty the Cat' now and prove your agility and survival skills!


## MVP

1. **Cat Character:** A controllable cat character that can jump by pressing `space` on the keyboard.

2. **Obstacles:** Basic obstacle elements that the cat must jump over to avoid collision.

3. **Scoring System:** A scoring mechanism that rewards points to the player for every second they survive in the game.

4. **Food Items:** Collectible food items that appear randomly on the screen and give the player an extra 5 points when collected.


## Backlog

- [x] ~~Increasing speed~~: The speed of obstacles currently increases with time and it's represented by the game's level number.

- [x] ~~Sound Effects~~: Implemented sound effects to enhance the gaming experience. That includes sounds for jumping, collecting food, start and game-over.

- [x] ~~Jumping and Eating Animation~~: Engaging animations for the cat character, including jumping animations when avoiding obstacles and an eating animation when collecting food items, have been successfully implemented.

- [x] ~~Simple User Interface and Clear Instructions~~: An intuitive user interface (UI) has been designed and implemented, featuring the display of the player's score, level, exit and sound buttons. Clear instructions have been provided to assist players in understanding the game mechanics.

#### To Be Done:

- [ ] **Different Environments**: Add variety to the game by introducing different environments or backgrounds. Each environment can present unique challenges and aesthetics.

- [ ] **Advanced Animations**: Enhance the visual appeal of the game by incorporating advanced animations for character movements, obstacles, and special effects.

- [ ] **Bigger Variety of Obstacles**: Introduce a wider range of obstacles to keep the gameplay engaging and unpredictable. Different obstacles can have distinct behaviors and require varied strategies to overcome.


## Data structure

### `script.js`

- **Event Handlers**
  - `window.onload`: Initializes the game when the window loads.
  - Event listeners for the start button, spacebar keypress, restart button, exit button, and audio button.

- **Functions**
  - `startGame()`: Initializes and starts the game when the "Start" button is clicked.
  - `toggleSound()`: Toggles sound effects on and off when the audio button is clicked.

### `game.js`

- **Class: `Game`**
  - **Constructor**
    - `Game(isSoundOn)`: Initializes the game's properties, including player, food, obstacles, audio, speed, and level.
  
  - **Methods**
    - `start()`: Initiates the game and hides the start screen.
    - `increaseOriginalSpeed()`: Increases the speed of obstacles over time.
    - `incrementScore()`: Increases the player's score over time.
    - `gameLoop()`: Manages the game loop, updating game elements and checking game conditions.
    - `update()`: Updates game elements such as food and obstacles.
  
### `player.js`

- **Class: `Player`**
  - **Constructor**
    - `Player(gameScreen, left)`: Initializes the player character with properties such as position, jumping/falling attributes, and DOM elements.
  
  - **Methods**
    - `jump()`: Initiates a jump action for the player.
    - `fall()`: Initiates a fall action for the player.
    - `jumpStep()`: Manages the player's jumping animation and movement.
    - `fallStep()`: Manages the player's falling animation and movement.
    - `detectSpacePressed()`: Detects spacebar key presses and forces fall action if spacebar is continuously pressed.
    - `updatePosition()`: Updates the player's position.
    - `didCollide(obstacle)`: Checks for collisions between the player and obstacle items.

### `food.js`

- **Class: `Food`**
  - **Constructor**
    - `Food(gameScreen, left, width, picture, speed)`: Initializes food items and obstacles with properties such as position, width, picture, and speed.
  
  - **Methods**
    - `move()`: Manages the movement of food items and obstacles.
    - `increaseSpeed()`: Increases the speed of food items and obstacles over time.
    - `updatePosition()`: Updates the position of food items and obstacles.



## States

- Start Screen
- Game Screen
- Game Over Screen


## Links

- [Presentation Link](https://drive.google.com/file/d/1_DhCucRbvDZo448tDPlaGEjkens7VDbJ/view?usp=sharing)
- [Github repository Link](https://github.com/liubovpo/shitty-the-cat)
- [Deployment Link](https://liubovpo.github.io/shitty-the-cat/)