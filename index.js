buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];

//triggering the game with keypress
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

//function for starting the game...
function nextSequence() {
  userClickedPattern = [];
  level = level + 1;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 3 + 1);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

//function for playing sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//function for animation
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//variables for the game
var started = false;
var level = 0;

//triggering the game with keypress
$(document).keypress(function () {
  if (started === false) {
    $("#level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
});

//function for checking the answer...
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

//function for restarting the game...
function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
}
