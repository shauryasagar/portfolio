setTimeout(function () {
    document.getElementById('doggo').style.display = 'block';
}, 120000);
setTimeout(function () {
    document.getElementById('doggo').style.display = 'none';
}, 150000);
setTimeout(function () {
    document.getElementById('nyan').style.display = 'none';
}, 120000);
setTimeout(function () {
    document.getElementById('nyan').style.display = 'block';
}, 150000);

var lastfmData = {
    baseURL: "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
    user: "itzzkobra",
    api_key: "99d2c48aa9dc8a960f85a1765e11bb80",
    additional: "&format=json&limit=1"
};

var getSetLastFM = function () {
    jQuery.ajax({
        type: "GET",
        url: lastfmData.baseURL + lastfmData.user + "&api_key=" + lastfmData.api_key + lastfmData.additional,
        dataType: "json",
        success: function (resp) {
            var recentTrack = resp.recenttracks.track[0];
            var formatted = recentTrack.name.replace(/\(.*\)|\[.*\]/g, '');;

            jQuery("span#tracktitle")
                .html(formatted)
                .attr("href", recentTrack.url)
                .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"])
                .attr("target", "_blank");

            jQuery("a#tothelink")
                .attr("href", recentTrack.url)

            var artistFormatted = recentTrack.artist["#text"];
            jQuery("span#trackartist")
                .html(artistFormatted)
                .attr("title", "Artist : " + recentTrack.artist["#text"]);

            $("img#trackart").attr("src", recentTrack.image[2]["#text"]);
        },
        error: function (resp) {
            jQuery("span#tracktitle").html("The sounds of silence");
            jQuery("img#trackart").attr("src", "https://i.imgur.com/Q6cCswP.jpg");
            var artistFormatted = "<img src='https://i.imgur.com/fae5XZA.png'>of silence";
            jQuery("span#trackartist").html(artistFormatted);
        }
    });
};
getSetLastFM();
setInterval(getSetLastFM, 10 * 100);




window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');

    preloader.addEventListener('transitionend', function () {
        if (preloader.classList.contains('fade-out')) {
            preloader.style.display = 'none';
        }
    });

    setTimeout(function () {
        preloader.classList.add('fade-out');
    }, 3000);
});




function changeBackground() {
    const desktopImages = [
        "images/bg/bg1.webp",
        "images/bg/bg2.webp",
        "images/bg/bg3.webp",
        "images/bg/bg4.webp",
        "images/bg/bg5.webp",
        "images/bg/bg6.webp",
        "images/bg/bg7.webp",
        "images/bg/bg8.webp",
        "images/bg/bg9.webp",
        "images/bg/bg10.webp",
        "images/bg/bg11.webp",
        "images/bg/bg12.webp",
    ];

    const mobileImages = [
        "images/mobile/mbg1.webp",
        "images/mobile/mbg2.webp",
        "images/mobile/mbg3.webp",
        "images/mobile/mbg4.webp",
        "images/mobile/mbg5.webp",
        "images/mobile/mbg6.webp",
        "images/mobile/mbg7.webp",
    ];

    const mainCover = document.querySelector(".main-cover");
    let selectedImage = '';

    if (window.matchMedia("(max-width: 480px)").matches) {

        const randomIndex = Math.floor(Math.random() * mobileImages.length);
        selectedImage = mobileImages[randomIndex];
    } else {

        const randomIndex = Math.floor(Math.random() * desktopImages.length);
        selectedImage = desktopImages[randomIndex];
    }

    mainCover.style.backgroundImage = `url('${selectedImage}')`;
}

window.onload = changeBackground;

function handleBackgroundVideo() {
    const videoElement = document.querySelector("video");

    if (window.matchMedia("(max-width: 767px)").matches) {
        videoElement.parentNode.removeChild(videoElement);
    }
}


handleBackgroundVideo();

window.addEventListener("resize", handleBackgroundVideo);



