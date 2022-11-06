// For buttons
var numberOfButton = document.querySelectorAll(".drum").length;
var i = 0;
for (i = 0; i < numberOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", button_click);
}

function button_click() {
  var letter = this.innerHTML;
 makeSound(letter);
button_animation(letter);
}

//For Keyboards
document.addEventListener("keydown", function() {
 makeSound(event.key);
button_animation(event.key);
})

//Makes the noise
function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio('tom-4.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('tom-2.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('snare.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('tom-3.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('tom-1.mp3');
      audio.play();
      break;
  }
}
function button_animation(key){
var activeButton = document.querySelector("."+key);
activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}
