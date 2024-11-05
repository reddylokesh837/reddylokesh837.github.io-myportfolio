document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: [
            "<span class='highlight'>I’m Lokesh Reddy Vakada</span>, and you’ve just stepped into the realm where <span class='highlight'>technology meets artistry</span>.",
            "I am a <span class='highlight'>Professional Python DevOps Engineer</span>, blending <span class='highlight'>technical prowess</span> with <span class='highlight'>creative vision</span>.",
            "I <span class='highlight'>fuse cutting-edge technology</span> with <span class='highlight'>innovative design</span> to create <span class='highlight'>seamless solutions</span>.",
            "My expertise doesn’t stop there—I’m also a <span class='highlight'>Graphic Designer</span> and a <span class='highlight'>multitalented innovator</span> like I can <span class='highlight'>draw</span>, do <span class='highlight'>photography</span>, <span class='highlight'>code</span>, and many more.",
            "Dive into my portfolio and discover how I push the <span class='highlight'>boundaries of possibility</span> with both <span class='highlight'>technical excellence</span> and <span class='highlight'>creative flair</span>."
        ],
        typeSpeed: 10,
        backSpeed: 20,
        backDelay: 500,
        startDelay: 500,
        loop: true,
        contentType: 'html'
    };

    var typed = new Typed('#typed-output', options);
});





document.addEventListener('mousemove', function(e) {
    var shineEffect = document.querySelector('.shine-effect');
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    shineEffect.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 50%)`;
});



















