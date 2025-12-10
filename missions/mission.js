function returnToMap() {
  window.location.href = "../map/map.html";
  document.getElementById("click").play();
}
let clickCount = 0;
function playQuote() {
  console.log(
    "instead of using an eventlistener we just define a function and call it!"
  );
  clickCount++;

  if (clickCount === 1) {
    document.getElementById("quote").play();
  } else if (clickCount === 2) {
    document.getElementById("growl").play();
  }
}
