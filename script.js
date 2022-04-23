// global constants
// const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = []; //UNCHANGING PATTERN
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false; 
var volume = 0.5  // 0.0 < x < 1.0
var guessCounter = 0;
var clueHoldTime = [1000, 900, 775, 625, 450, 300, 150, 100];

function changePattern() {
  for (let i = 0; i < 8; i++) {
    var x = Math.floor(Math.random() * 5 + 1);
    pattern.push(x)
  }
}

function startGame(){
  // inititalize game variables
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons 
  document.getElementById("startBtn").classList.add("hidden"); 
  document.getElementById("stopBtn").classList.remove("hidden");
  changePattern();
  playClueSequence();
}

function stopGame(){
  gamePlaying = false; 
  document.getElementById("startBtn").classList.remove("hidden"); 
  document.getElementById("stopBtn").classList.add("hidden");
  pattern = [];
}

// Sound Synthesis Functions
const freqMap = {
  1: 290,
  2: 380,
  3: 458,
  4: 610,
  5: 900
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime[progress]);
    setTimeout(clearButton,clueHoldTime[progress],btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime[progress] 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations! You won.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  
  // correct guess
  if (pattern[guessCounter] == btn) {
    // check is turn over? 
    if (guessCounter == progress) {
      // progress = # of clues given
      // guessCounter == progress: finished guessing sequence\
      
      // check is this the last turn?
      if (progress == pattern.length - 1) { // sequence to max level
        winGame()
      } else { // next turn, increment progress
        progress++;
        playClueSequence();
      }
    } else { // turn not yet over, increment guessCounter
      guessCounter++;
    }
  } else { // incorrect guess, end the game 
    loseGame()
  }
}