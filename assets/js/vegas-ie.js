$(function() {
$.vegas({
    src: "/assets/images/bg/bg2.jpg",
    src: "/assets/images/bg/bg3.jpg",
    src: "/assets/images/bg/bg4.jpg",
    src: "/assets/images/bg/bg5.jpg",
    src: "/assets/images/bg/bg6.jpg",
    src: "/assets/images/bg/bg7.jpg",
    src: "/assets/images/bg/bg8.jpg",
    src: "/assets/images/bg/bg9.jpg",
    fade:2000,

});

$.vegas('overlay', {
    src:'/assets/images/overlays/01.png'
});

$.vegas('destroy');

});