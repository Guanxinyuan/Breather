//these defines the time interval between each break
var deadline = setInterval(myTimer, 1000);
var now = new Date();
var t = deadline.getTime - now.getTime;

// this is to determine if it's time for a break
// if time's up, the popup.html will jump out
function comparison() {
  if (t == 10000) {
    window.location.href = 'popup.html';
  }
}

comparison();