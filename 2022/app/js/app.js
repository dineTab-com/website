// AOS
AOS.init();

// artwork dynamics for prototype
var nftArtwork = document.getElementsByClassName("nft-artwork");
var nftArtworkResto = document.getElementsByClassName("resto-name").innerHTML;
for (var i = 0; i < nftArtwork.length; i++) {
    nftArtwork[i].onclick = changeImgSrc;
}
function changeImgSrc() {
    modalImg.src=this.querySelector("img").src;
    modalResto.innerHTML=this.querySelector(".resto-name").innerHTML;
    transferImg.src=modalImg.src;
 }   
// activate tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
