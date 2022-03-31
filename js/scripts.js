//Load navbar and footer
$(function(){
    $("#navEn").load("../html/navbar-en.html");
    $("#navFr").load("../html/navbar-fr.html");
    $("#footEn").load("../html/footer-en.html");
    $("#footFr").load("../html/footer-fr.html");
    $("#navNFT").load("../../html/navbar-nft.html");
    $("#footNFT").load("../../html/footer-nft.html");
  });

AOS.init();

const d = new Date();
let year = d.getFullYear();
document.getElementById("thisYear").innerHTML = year;
