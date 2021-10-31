var pageInit = 50;

function displayText() {
  document.getElementById("soon-image").style.filter = "blur(" + pageInit + "px)";
  pageInit = pageInit - 1;
  animate();
  if (pageInit == 0) {
    document.getElementById("soon-image").style.filter = "blur(0px)";
  }
}

function animate() {
  if (pageInit > 0) {
    setTimeout(function() {
      displayText()
    }, 25);
  }
}
