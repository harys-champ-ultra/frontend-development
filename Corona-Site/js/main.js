const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});





var audio = document.getElementById("audio");

function tapPlay() {
    audio.play();
    if(document.getElementById("part-1")) {
        document.getElementById("part-1").style.display = "none";
        document.getElementById("part-2").style.display = "grid";
    }
}

function tapStop() {
    audio.pause();
    document.getElementById("part-2").style.display = "none";
    document.getElementById("part-1").style.display = "grid";
}





var x = document.getElementById("result");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}