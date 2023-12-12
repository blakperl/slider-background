document.addEventListener("DOMContentLoaded", function () {
    var gallery = document.querySelector(".gallery img");
    var imglist = [
        "/background-slider/images/bgone.png",
        "/background-slider/images/bgtwo.png",
        "/background-slider/images/bgthree.png",
        "/background-slider/images/bgfour.png"
    ];

    var x = 0;

    setInterval(function () {
        x = (x + 1) % imglist.length;

        gallery.style.opacity = 0;

        setTimeout(function () {
            gallery.src = imglist[x];

            gallery.style.opacity = 1;
        }, 500);
    }, 3000);
});
