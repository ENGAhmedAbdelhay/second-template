let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector("header nav ul");

toggleBtn.onclick = function (e) {
    e.stopPropagation();
    tLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {
        
        if (tLinks.classList.contains("open")) {

            tLinks.classList.remove("open");
        
        }
    }
});

tLinks.onclick = function (e) {
    e.stopPropagation();
};