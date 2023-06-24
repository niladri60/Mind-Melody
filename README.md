# Simon Game

This is a simple implementation of the classic Simon game using the jQuery library. The Simon Game is a memory game where players are challenged to remember and repeat a sequence of colors and sounds.

## Getting Started

To get started, follow the instructions below:

1. Clone the repository or download the source code.
2. Ensure you have the jQuery library included in your project.
3. Include the necessary CSS and JavaScript files in your HTML file:

   ```html
   <link rel="stylesheet" href="./style.css"/>
   <script src="./index.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
   ```

4. Create a container element in your HTML file where the game will be displayed:

   ```html
   <div class="container"></div>
   ```

5. Initialize the Simon game by calling the `initSimonGame()` function in your JavaScript file:

   ```javascript
   $(document).ready(function() {
     initSimonGame();
   });
   ```

7. Play the game! Follow the sequence of colors and sounds presented by the game, and try to repeat it correctly. The game will become progressively harder as the sequence length increases.

## Game Controls

The Simon Game can be played using the following controls:

- **Start/Restart**: Click the "Start" button to start or restart the game.
- **Color Buttons**: Click the colored buttons to repeat the sequence. Make sure to click them in the correct order.
- **Strict Mode**: Toggle the "Strict" mode checkbox to enable or disable strict mode. In strict mode, any mistake will restart the game.

## Customization

You can customize various aspects of the Simon Game by modifying the `gameSettings` object in the JavaScript file. Here are some of the properties you can change:

- `sequenceLength`: The number of steps in the sequence. Increase this value to make the game more challenging.
- `stepDuration`: The duration of each step (in milliseconds) that the colors are shown. Decrease this value to make the game faster.
- `strictMode`: Enable or disable strict mode. When enabled, any mistake will restart the game.

Feel free to experiment with these settings to create your own version of the Simon Game.

## Compatibility

The Simon Game has been tested and confirmed to work in modern web browsers with JavaScript and jQuery support. It should work in most up-to-date browsers, including Chrome, Firefox, Safari, and Edge.

## Credits

The Simon Game was created with the help of the jQuery library, which provides a simple and intuitive way to manipulate the DOM and handle user interactions.

The game design and CSS styles were inspired by the original Simon game created by Ralph H. Baer and Howard J. Morrison.
