AOS.init();

var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('bm1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/jumbotron.json'
})
var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('bm2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/foodies.json'
})
var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('bm3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/restos.json'
})
var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('bm4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/servers.json'
})
var animation5 = bodymovin.loadAnimation({
    container: document.getElementById('bm5'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/mobile.json'
})
