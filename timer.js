let timerElement = document.getElementById('timer');
let time = 3;

function removeWindow(win) {
  targetWindow = win;
  chrome.windows.remove(targetWindow.id);
}

//these defines the time interval between each break
var deadline = setInterval(myTimer, 1000).getTime;
var now = new Date().getTime;
var t = deadline - now;

// this is to determine if it's time for a break
// if time's up, the popup.html will jump out
function comparison() {
  if (t == 5000) {
    window.location.href = 'popup.html';
  }
}

function myTimer() {
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

let setTime = function() {
  timerElement.innerHTML = time + ' sec';
  if (time === 0) {
    chrome.windows.getCurrent(removeWindow);
  }
  time--;
}

setTime();
comparison();
let timerFunc = setInterval(setTime, 1000);