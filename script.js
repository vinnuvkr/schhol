
var searchInput = document.getElementById("search-input");
var openSearchbtn = document.getElementById("openSearchbtn");
var closeSearchbtn = document.getElementById("closeSearchbtn");
function openSearch() {
    searchInput.style.display = "block";
    closeSearchbtn.style.display = "block";
    openSearchbtn.style.display = "none";
}

function closeSearch() {
    searchInput.style.display = "none";
    closeSearchbtn.style.display = "none";
    openSearchbtn.style.display = "block";
}


var textarr = ["Beautiful", "Awesome", "Great"];
var index = 0;
var bannerText = document.getElementById("banner-text");
bannerText.innerHTML = textarr[index];
setInterval(() => {
    bannerText.innerHTML = textarr[index];
    if (index != textarr.length) {
        index ++;
    }
    if (index == textarr.length) {
        index = 0;
    }
}, 1000);
