setTimeout(function () {
  document.getElementById("doggo").style.display = "block";
}, 120000);
setTimeout(function () {
  document.getElementById("doggo").style.display = "none";
}, 150000);
setTimeout(function () {
  document.getElementById("nyan").style.display = "none";
}, 120000);
setTimeout(function () {
  document.getElementById("nyan").style.display = "block";
}, 150000);

var getSetLastFM = function () {
  jQuery.ajax({
    type: "GET",
    url: "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=itzzkobra&api_key=c1797de6bf0b7e401b623118120cd9e1&limit=1&format=json",
    dataType: "json",
    success: function (resp) {
      var recentTrack = resp.recenttracks.track[0];
      var formatted = recentTrack.name.replace(/\(.*\)|\[.*\]/g, "");
      jQuery("span#tracktitle")
        .html(formatted)
        .attr("href", recentTrack.url)
        .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"])
        .attr("target", "_blank");
      jQuery("a#tothelink").attr("href", recentTrack.url);
      var artistFormatted = recentTrack.artist["#text"];
      jQuery("span#trackartist")
        .html(artistFormatted)
        .attr("title", "Artist : " + artistFormatted);
      $("img#trackart").attr("src", recentTrack.image[1]["#text"]);
    },
    error: function () {
      jQuery("span#tracktitle").html("The sounds of silence");
      jQuery("img#trackart").attr("src", "https://i.imgur.com/Q6cCswP.jpg");
      jQuery("span#trackartist").html(
        "<img src='https://i.imgur.com/fae5XZA.png'>of silence",
      );
    },
  });
};
getSetLastFM();
setInterval(getSetLastFM, 30 * 1000);

window.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  preloader.addEventListener("transitionend", function () {
    if (preloader.classList.contains("fade-out")) {
      preloader.style.display = "none";
    }
  });
  setTimeout(function () {
    preloader.classList.add("fade-out");
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const DESKTOP_IMAGES = [
    "bg1.webp",
    "bg2.webp",
    "bg3.webp",
    "bg4.webp",
    "bg5.webp",
    "bg6.webp",
    "bg7.webp",
    "bg8.webp",
    "bg9.webp",
    "bg10.webp",
    "bg11.webp",
    "bg12.webp",
  ];
  const MOBILE_IMAGES = [
    "mbg1.webp",
    "mbg2.webp",
    "mbg3.webp",
    "mbg4.webp",
    "mbg5.webp",
    "mbg6.webp",
    "mbg7.webp",
  ];

  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  const pool = isMobile ? MOBILE_IMAGES : DESKTOP_IMAGES;
  const folder = isMobile ? "mobile" : "bg";
  const pick = pool[Math.floor(Math.random() * pool.length)];
  const imageUrl = `https://get.itsureya.com/images/${folder}/${pick}`;

  const mainCover = document.querySelector(".main-cover");
  if (mainCover) {
    mainCover.style.backgroundImage = `url('${imageUrl}')`;
  }
});

function handleBackgroundVideo() {
  const videoElement = document.querySelector("video");
  if (videoElement && window.matchMedia("(max-width: 767px)").matches) {
    videoElement.parentNode.removeChild(videoElement);
  }
}

function setMarqueeSpeed() {
  const pixelsPerSecond = 300;
  const images = document.querySelectorAll(".scroll-left, .scroll-right");
  images.forEach((img) => {
    const viewportWidth = window.innerWidth;
    const imageWidth = img.offsetWidth || 150;
    const totalDistance = viewportWidth + imageWidth;
    img.style.animationDuration = totalDistance / pixelsPerSecond + "s";
  });
}

window.addEventListener("load", setMarqueeSpeed);
window.addEventListener("resize", setMarqueeSpeed);
handleBackgroundVideo();
window.addEventListener("resize", handleBackgroundVideo);
