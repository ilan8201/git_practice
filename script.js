setTimeout(function () {
    document.querySelector("body").classList.remove("loading");
}, 1000);

document.querySelectorAll("nav a").forEach((el) => {
    el.addEventListener("click", function () {
        document.querySelectorAll(".dynamic-container > div").forEach((ele) => {
            ele.classList.remove("active");
        });
        var toActivate = el.dataset.div;
        document.querySelector("." + toActivate).classList.add("active")
    });
});

