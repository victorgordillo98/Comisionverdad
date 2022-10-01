// JavaScript Document
var video = null;
var bt1 = null;
var bt2 = null;
var bt3 = null;
var t_btn1 = null;
var t_btn2 = null;

var player = {
  videoPlaying: 1,
  currentTime: 0
};

function Initplayer() {
  video = document.getElementsByTagName("video");
  console.log("iniciamos");
  video = document.querySelector("video");
  bt1 = document.getElementById("Btn1");
  bt2 = document.getElementById("Btn2");
  bt3 = document.getElementById("Btn3");
  t_btn1 = document.createTextNode("--");
  bt1.appendChild(t_btn1);
  document.body.appendChild(bt1);
  t_btn2 = document.createTextNode("--");
  bt2.appendChild(t_btn2);
  document.body.appendChild(bt2);

  bt1.style.position = "absolute";
  bt1.style.right = "495px";
  bt1.style.top = "655px";

  bt2.style.position = "absolute";
  bt2.style.left = "545px";
  bt2.style.top = "655px";

  bt1.style.display = "none";
  bt2.style.display = "none";

  video.ontimeupdate = function () {
    player.currentTime = video.currentTime;
    console.log(player.currentTime);
    if (player.currentTime > 57 && player.videoPlaying === 1) {
      console.log("1");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt2.onclick = function () {
        video.src = "videos/Video_2.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 2;
      };

      bt1.onclick = function () {
        video.src = "videos/Video_3.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 3;
      };
    }
    if (player.currentTime > 23 && player.videoPlaying === 2) {
      console.log("2");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt2.onclick = function () {
        video.src = "videos/Video_2.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 2;
      };

      bt1.onclick = function () {
        video.src = "videos/Video_3.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 3;
      };
    }
    if (player.currentTime > 28 && player.videoPlaying === 3) {
      console.log("3");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt2.onclick = function () {
        video.src = "videos/Video_4.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 4;
      };

      bt1.onclick = function () {
        video.src = "videos/Video_5.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 5;
      };
    }
    if (player.currentTime > 47 && player.videoPlaying === 4) {
      console.log("4");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt2.onclick = function () {
        video.src = "videos/Video_4.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 4;
      };

      bt1.onclick = function () {
        video.src = "videos/Video_5.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 5;
      };
    }
    if (player.currentTime > 34 && player.videoPlaying === 5) {
      console.log("5");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt2.onclick = function () {
        video.src = "videos/Video_6.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 6;
      };

      bt1.onclick = function () {
        video.src = "videos/Video_7.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 7;
      };
    }
    if (player.currentTime > 34 && player.videoPlaying === 6) {
      console.log("6");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt2.onclick = function () {
        video.src = "videos/Video_6.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 6;
      };

      bt1.onclick = function () {
        video.src = "videos/Video_7.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 7;
      };
    }
    if (player.currentTime > 28 && player.videoPlaying === 7) {
      console.log("7");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt1.onclick = function () {
        video.src = "videos/Video_9.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 9;
      };

      bt2.onclick = function () {
        video.src = "videos/Video_8.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 8;
      };
    }
    if (player.currentTime > 68 && player.videoPlaying === 8) {
      console.log("8");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt1.onclick = function () {
        video.src = "videos/Video_9.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 9;
      };

      bt2.onclick = function () {
        video.src = "videos/Video_8.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 8;
      };
    }
    if (player.currentTime > 84 && player.videoPlaying === 9) {
      console.log("9");

      bt1.style.display = "block";
      bt2.style.display = "block";

      bt1.onclick = function () {
        video.src = "videos/Video_11.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 11;
      };

      bt2.onclick = function () {
        video.src = "videos/Video_10.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 10;
      };
    }
    if (player.currentTime > 37 && player.videoPlaying === 10) {
      console.log("10");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt1.onclick = function () {
        video.src = "videos/Video_11.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 11;
      };

      bt2.onclick = function () {
        video.src = "videos/Video_10.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 10;
      };
    }
    if (player.currentTime > 50 && player.videoPlaying === 11) {
      console.log("11");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt1.onclick = function () {
        video.src = "videos/Video_12.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 12;
      };

      bt2.onclick = function () {
        video.src = "videos/Video_13.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 13;
      };
    }
    if (player.currentTime > 47 && player.videoPlaying === 12) {
      console.log("11");
      bt1.style.display = "block";
      bt2.style.display = "block";

      bt1.onclick = function () {
        video.src = "videos/Video_12.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 12;
      };

      bt2.onclick = function () {
        video.src = "videos/Video_13.mp4";
        bt1.style.display = "none";
        bt2.style.display = "none";
        video.play();
        player.videoPlaying = 13;
      };
    }
  };
}
