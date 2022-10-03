/* eslint-disable no-undef, no-unused-vars */
let videoStatus = 0;
let volume = 0.5;
let vrView;
function preload() {
  vrView = new VRView.Player("#vrview", {
    width: window.innerWidth,
    height: window.innerHeight - 200,
    video:
      "https://uploads.codesandbox.io/uploads/user/251981ba-faf0-4b4d-88d1-fc0949b1f691/YP8u-video2.webm",
    loop: false,
    volume: volume,
    hide_fullscreen_button: true,
  });
  vrView.on("ready", videoLoad);
}
function setup() {
  vrView.on("click", function (event) {
    if (event.id === "hot-spot-one") {
      console.log("click sobre hot-spot-one");
    }
  });

  document.getElementById("play-button").onclick = playVideo;
}

function playVideo() {
  if (videoStatus === 1) {
    document.getElementById("play-button").textContent = "Play";
    vrView.pause();
    videoStatus = 0;
  } else {
    document.getElementById("play-button").textContent = "Pause";
    vrView.play();
    videoStatus = 1;
  }
}
// FUNCIÓN QUE SE LLAMA AL PRESIONAR UNA TECLA
function keyTyped() {
  // Con la barra espaciadora se pausa o reanuda el video
  if (key === " ") {
    playVideo();
    // Con la tecla + se sube el volumen del video
  } else if (key === "+" && videoStatus === 1 && volume < 0.9) {
    console.log("+");
    volume += 0.1;
    vrView.setVolume(volume);
    // Con la tecla + se baja el volumen del video
  } else if (key === "-" && videoStatus === 1 && volume > 0.1) {
    console.log("-");
    volume -= 0.1;
    vrView.setVolume(volume);
  }
}

function videoLoad() {
  videoStatus = 0;

  // Se agrega un HotSpot al video
  vrView.addHotspot("hot-spot-one", {
    pitch: 0, // En grados. Hacia arriba es positivo
    yaw: 0, // En grados. Hacia la derecha es positivo
    radius: 0.1, // Radio del circulo
    distance: 1, // Distancia desde la cámara
  });
}
// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
