**Memory Game** is a Light & Sound Memory game.

Functionality

The following functionality has been implemented: 

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess
* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played

I would like to eventually implement the following features:

- [ ] Words of encouragement for the player -- scrolling text across the screen?  
- [ ] Game mode menu bar where player can select and mix-and-match game modes

## Video Walkthrough (GIF)

* [Victory!](http://g.recordit.co/Hs1S6v7jO5.gif)
![Victory](http://g.recordit.co/Hs1S6v7jO5.gif)
* [Changing Patterns](http://g.recordit.co/4zCBduyD43.gif)
![Changing Patterns](http://g.recordit.co/4zCBduyD43.gif) 
* [Loss](http://g.recordit.co/wLftJ4yT7Q.gif)
![Loss](http://g.recordit.co/wLftJ4yT7Q.gif)
* [Button Functionality](http://g.recordit.co/07ozxK70ib.gif)
![Button Functionality](http://g.recordit.co/07ozxK70ib.gif)

## Reflections

Outside Resources Referenced: 

    * [How to center a CSS element](https://stackoverflow.com/questions/34580572/center-h1-in-the-middle-of-screen)
    * [How to create round buttons ](https://www.w3schools.com/howto/howto_css_round_buttons.asp)
    * [For loop in JavaScript](https://www.w3schools.com/js/js_loop_for.asp)
    * [Random number generator in JavaScript](https://www.w3schools.com/js/js_random.asp)


Challenge(s):

   > One of the additional features that I wanted to add was having the computer pick a new pattern every time. My general idea was to have a for loop to append a randomly generated number to the pattern array 8 times (as  you can maybe tell, the Python background is showing). However, what I failed to realize was that `Math.floor(Math.random() * n)` returns a number from the range `[0, n)`, so when 0 was selected, the buttons in the program did not play. I was only able to realize this after experimenting in a browser version of JavaScript Playground, where I used `console.log()` to print elements of the `pattern` array and consequently found my error. From there, I updated the random number generator to be `Math.floor(Math.random() * n)` to generate random integers from `[1, 2, 3, 4, 5]` for my 5 buttons.

Interests for Future Projects:

   > I'd like to learn more about the interconnectivity of each of the components -- in other words, I'd like to learn more about how the `.js`, `.html`, and `.css` files are all linked together, and what other possible combinations there are. So far in my university experience, I've primarily worked with Python, so I would be interested to learn how I can connect and adapt my Python code to function on a website. 
    
   > Another thing I would like to know more about is what the whole web development process looks like when not done through a tool such as Glitch. As someone who wants to create a portfolio via a personal website, I definitely think I will look more into how to deploy my own website on a server independent of Glitch's, for example.

Additional Features (for the Future!):

   > If I had more time to work on this project, I would spend it adding additional features -- in particular, I want to add a "menu bar" of additional game modes. For example, in the existing version of the game, I would add a line of buttons above the "Start" button that would allow the player to choose to play the game with some of the optional features like more buttons, time limit, etc. If I were to implement this, I would make the player be able to "stack" game modes on top of each other (so the player could select all game modes at the same time for the ultimate hard mode version of the game) and also to deselect unwanted game modes or to reset to the base game altogether.




## License

    Copyright [Sihua Cai]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
