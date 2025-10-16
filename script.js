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
    url: "https://api.itsureya.com/lastfm",
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
      var artistFormatted =
        "<img src='https://i.imgur.com/fae5XZA.png'>of silence";
      jQuery("span#trackartist").html(artistFormatted);
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
  const mainCover = document.querySelector(".main-cover");
  let imageUrl = "";

  if (window.matchMedia("(max-width: 480px)").matches) {
    imageUrl = "https://cdn.itsureya.com/random/mobile";
  } else {
    imageUrl = "https://cdn.itsureya.com/random/desktop";
  }

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

handleBackgroundVideo();

window.addEventListener("resize", handleBackgroundVideo);
