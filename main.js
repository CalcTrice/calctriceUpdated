// const loadingTl = gsap.timeline();
// loadingTl




const navToggler = function () {
    const navIcon = document.querySelector('.burger');
    const closeNav = document.querySelector('.close-nav');
    const navLinks = document.querySelector('.nav-links');

    let tl = gsap.timeline();

    navIcon.addEventListener('click', function () {
        navLinks.classList.add('show');
        tl.to('.blurSlate', { scaleX: 0.75, duration: 0.7, transformOrigin: 'left' }, "=-0.2")
    });
    closeNav.addEventListener('click', function () {
        navLinks.classList.remove('show');
        tl.to('.blurSlate', { scaleX: 0, duration: .7, transformOrigin: 'left' })
    });
}
navToggler()
const homeGsap = function () {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top bottom",
            end: "bottom center",
        }
    })
    tl
        .from('.loading-text', { opacity: 0, duration: 0.4 }, "+=1")
        .to('.loading-animation', { scaleX: 5, duration: 0.6, transformOrigin: "top " }, "+=1")
        .to('.loading-text', { display: 'none' })
        .to('.company-name', { display: 'block' })
        .to('.loading-animation', { scaleX: 0, duration: 0.6, transformOrigin: "top " })
        .to('.loader', { scaleY: 0, duration: 1, opacity: 0, ease: 'power4.out', transformOrigin: 'top' }, "+=1")

        .to('h1 div', { opacity: 1, y: '0%', duration: 1, stagger: 0.2, ease: 'power4.out' }, '-=0.4')
        .to("span.heading-hover", { "-webkit-text-fill-color": 'transparent', delay: 0.1, stagger: 0.05, ease: "power4.out" })
        .from('.CTA button', { y: '100%', opacity: 0, stagger: 0.1, duration: 0.5, ease: "bounce.out", stagger: 0.1 })
        .from('.box', { opacity: 0, duration: 0.5 }, "-=0.2")
        .from("canvas", { scale: 0, opacity: 0, duration: 0.5, ease: 'power.out' }, "-=0.5")
        .from('nav', { opacity: 0, duration: 0.2 })
        .from('footer.footer-landing', { opacity: 0, duration: 0.2 }, "-=0.2")
}

const buttonAnimations = function () {
    const button1 = document.querySelector('.button-1');
    const button2 = document.querySelector('.button-2');
    const button3 = document.querySelector('.button-3');

    const box = document.querySelector(".box");

    button1.addEventListener('mouseenter', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "0%";
        box.style.transform = "translateX(-2%)"
    })
    button1.addEventListener('mouseleave', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "50%";
        box.style.transform = "translateX(-52%)"
    })

    button3.addEventListener('mouseenter', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "100%";
        box.style.transform = "translateX(-102%)"
    })
    button3.addEventListener('mouseleave', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "50%";
        box.style.transform = "translateX(-52%)"
    })



}

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

        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

}

const sideNavGsap = function () {
    const navIcon = document.querySelector('.burger');
    let tl = gsap.timeline();

    navIcon.addEventListener('click', function () {
        tl
            .from('.submenu-links ', { y: 50, opacity: 0, duration: 0.5, stagger: 0.15 });

    })
}

navToggler()
particleJS();
homeGsap();
sideNavGsap();
buttonAnimations();