
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


var getSetLastFM = function () {
    jQuery.ajax({
        type: "GET",
        url: "https://api.itsureya.com/lastfm",
        dataType: "json",
        success: function (resp) {
            var recentTrack = resp.recenttracks.track[0];
            var formatted = recentTrack.name.replace(/\(.*\)|\[.*\]/g, '');

            jQuery("span#tracktitle")
            .html(formatted)
            .attr("href", recentTrack.url)
            .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"])
            .attr("target", "_blank");

            jQuery("a#tothelink")
            .attr("href", recentTrack.url);

            var artistFormatted = recentTrack.artist["#text"];
            jQuery("span#trackartist")
            .html(artistFormatted)
            .attr("title", "Artist : " + recentTrack.artist["#text"]);

            $("img#trackart").attr("src", recentTrack.image[2]["#text"]);
        },
        error: function () {
            jQuery("span#tracktitle").html("The sounds of silence");
            jQuery("img#trackart").attr("src", "https://i.imgur.com/Q6cCswP.jpg");
            var artistFormatted = "<img src='https://i.imgur.com/fae5XZA.png'>of silence";
            jQuery("span#trackartist").html(artistFormatted);
        }
    });
};

getSetLastFM();
setInterval(getSetLastFM, 30 * 1000);




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
        "https://i.postimg.cc/CKkWd41Z/bg1.webp",
        "https://i.postimg.cc/RhV8s5Tf/bg2.webp",
        "https://i.postimg.cc/3xPsKqK5/bg3.webp",
        "https://i.postimg.cc/pTv3jnhs/bg4.webp",
        "https://i.postimg.cc/JnQv54jM/bg5.webp",
        // "https://i.postimg.cc/nV0NsrH1/bg6.webp",
        "https://i.postimg.cc/vTqKCqPK/bg7.webp",
        "https://i.postimg.cc/65qgCKqx/bg8.webp",
        "https://i.postimg.cc/5NrG3rQY/bg9.webp",
        "https://i.postimg.cc/9QqkNByx/bg10.webp",
        "https://i.postimg.cc/Zq8MJK7p/bg11.webp",
        "https://i.postimg.cc/MG2LkjDz/bg12.webp",
    ];

    const mobileImages = [
        "https://i.postimg.cc/cCpH7mQp/mbg1.webp",
        "https://i.postimg.cc/cLMHYf6z/mbg2.webp",
        "https://i.postimg.cc/zfzfk3gG/mbg3.webp",
        "https://i.postimg.cc/j5kC2KCd/mbg4.webp",
        "https://i.postimg.cc/G3VH1cZX/mbg5.webp",
        "https://i.postimg.cc/G3VH1cZX/mbg5.webp",
        "https://i.postimg.cc/VLt5fxwm/mbg6.webp",
        "https://i.postimg.cc/bwjrsmYb/mbg7.webp",
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



