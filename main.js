const particleJS = function () {
    particlesJS("landingPage", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#FFD066" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "bubble" },
                resize: true
            },
            modes: {
                grab: { distance: 231.44200550588337, line_linked: { opacity: 1 } },
                bubble: {
                    distance: 200,
                    size: 10,
                    duration: 0.48724632738080703,
                    opacity: 1,
                    speed: 3
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });
    var count_particles, stats, update;

    count_particles = document.querySelector(".js-count-particles");
    update = function () {
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

}

particleJS();

let tl = gsap.timeline();



tl
    .from('.regular', { opacity: 0, y: "100px", duration: 0.2, stagger: 0.1, delay: 1 },)
    .from("span.heading-hover", { y: "100px", opacity: 0, duration: 0.2, stagger: 0.1, ease: "power4.out" })
    .to("span.heading-hover", { "-webkit-text-fill-color": 'transparent', delay: 0.1, stagger: 0.05, ease: "power4.out" })
    .from('.CTA button', { y: '100%', opacity: 0, stagger: 0.1, duration: 0.5, ease: "bounce.out", stagger: 0.1 })
    .from('.box', { opacity: 0, duration: 0.5 }, "-=0.2")
    .from("canvas", { scale: 0, opacity: 0, duration: 0.5 }, "-=0.5")



const button1 = document.querySelector('.button-1');
const button3 = document.querySelector('.button-3');
const box = document.querySelector(".box");

button1.addEventListener('mouseenter', function () {
    box.style.transition = "0.2s ease-out";
    box.style.left = "0%";
    box.style.transform = "translateX(0%)"
})
button1.addEventListener('mouseleave', function () {
    box.style.transition = "0.2s ease-out";
    box.style.left = "50%";
    box.style.transform = "translateX(-50%)"
})

button3.addEventListener('mouseenter', function () {
    box.style.transition = "0.2s ease-out";
    box.style.left = "100%";
    box.style.transform = "translateX(-100%)"
})
button3.addEventListener('mouseleave', function () {
    box.style.transition = "0.2s ease-out";
    box.style.left = "50%";
    box.style.transform = "translateX(-50%)"
})