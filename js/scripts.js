AOS.init();

var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('bm2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://dinetab.com/js/foodies.json'
})
var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('bm3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://dinetab.com/js/restos.json'
})
var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('bm4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://dinetab.com/js/servers.json'
})
var animation5 = bodymovin.loadAnimation({
    container: document.getElementById('bm5'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://dinetab.com/js/mobile.json'
})

const d = new Date();
let year = d.getFullYear();
document.getElementById("thisYear").innerHTML = year;
