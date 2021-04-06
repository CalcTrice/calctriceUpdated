const navToggler = function () {
    const navIcon = document.querySelector('.burger');
    const closeNav = document.querySelector('.close-nav');
    const navLinks = document.querySelector('.nav-links');
    const blurSlate = document.querySelector('.blurSlate');
    const logo = document.querySelector('.logo');

    let tl = gsap.timeline();

    blurSlate.addEventListener('click', function () {
        navLinks.classList.remove('show');
        tl.to('.blurSlate', { scaleX: 0, duration: .4, transformOrigin: 'right' })
    });

    navIcon.addEventListener('click', function () {
        navLinks.classList.add('show');
        tl
            .to('.blurSlate', { scaleX: 1, duration: 1, transformOrigin: 'left' }, "=-0.2")
            .from('.blurSlate .info', { x: -200, opacity: 0, duration: 0.3 })

        logo.style.transition = 'all 0.1s ease-out';
        logo.style.opacity = 0;
    });

    closeNav.addEventListener('click', function () {
        navLinks.classList.remove('show');
        tl
            .from('.blurSlate .info', { opacity: 1, duration: 0.2 })
            .to('.blurSlate', { scaleX: 0, duration: .4, transformOrigin: 'right' },)
        logo.style.transition = 'all 0.1s ease-out';
        logo.style.opacity = 1;
    });
}
const homeGsap = function () {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top bottom",
            end: "bottom center",
        }
    })
    tl
        .to('h1 div', { opacity: 1, y: '0%', duration: 1, stagger: 0.2, ease: 'power4.out' }, '-=0.4')
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
        box.style.transform = "translateX(0%)"
    })
    button1.addEventListener('mouseleave', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "50%";
        box.style.transform = "translateX(-50%)"
    })

    button3.addEventListener('mouseenter', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "100%";
        box.style.transform = "translateX(-100%)"
    })
    button3.addEventListener('mouseleave', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "50%";
        box.style.transform = "translateX(-50%)"
    })



}
const particleJS = function () {
    particlesJS("landingSection", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#000000" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
                value: 0.7,
                random: false,
                anim: { enable: false, speed: 1.5, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#444",
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
                grab: { distance: 220, line_linked: { opacity: 1 } },
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
const testimonialsCarouselSlider = function () {
    const slider = document.querySelector('.slider');
    const carousel = document.querySelector('.testimonials-carousel');
    const prev = document.querySelector('.arrow-prev');
    const next = document.querySelector('.arrow-next');
    let direction = -1;

    prev.addEventListener('click', function () {
        if (direction === -1) {
            direction = 1;
            slider.appendChild(slider.firstElementChild);

        }
        carousel.style.justifyContent = 'flex-end'
        slider.style.transform = 'translate(20%)';

    });

    next.addEventListener('click', function () {

        if (direction === 1) {
            direction = -1;
            slider.prepend(slider.lastElementChild);
        }

        carousel.style.justifyContent = 'flex-start'
        slider.style.transform = 'translate(-20%)';

    });
    slider.addEventListener('transitionend', function () {
        if (direction === -1)
            slider.appendChild(slider.firstElementChild);
        else if (direction === 1)
            slider.prepend(slider.lastElementChild);

        slider.style.transition = 'none';
        slider.style.transform = 'translate(0%)';

        setTimeout(function () {

            slider.style.transition = 'all 0.3s ease-in-out';
        });
    })
}
const testimonialSlideContentCreator = function () {

    let counter = 1;
    const content = [
        [
            'Great collection of tools!',
            'Adam West',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo  A sunt deleniti exercitationem? At atque',
        ],
        [
            'Great collection of tools!',
            'John Jacobs',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo A sunt deleniti exercitationem? At atque ducimus omnis cum qui voluptate vero corporis molestias nemo!',
        ],
        [
            'Great collection of tools!',
            'Martha Stewart',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo A sunt deleniti exercitationem?',
        ],
        [
            'Great collection of tools!',
            'Max Robbie',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo Nihil quam, hnarum accusatium dolorum facilis voluptatibus.',
        ],
        [
            'Great collection of tools!',
            'Jay Cart',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo Nihil quam, harum accusantium dolorum facilis voluptatibus.',
        ],
    ];

    const slider = document.querySelector('.slider');

    content.forEach(function (person, id) {

        slider.insertAdjacentHTML('beforeend',
            `<div class="slide" id="slide-${counter + id}">
                    <div class="slide-content">
                        <div>
                            <q>${person[0]}</q>
                            
                            <span class="username">${person[1]}</span>
                        </div>
                        <blockquote>"${person[2]}"</blockquote>
                    </div>
                </div>`
        );

    });
}
const navIntersection = function () {
    const nav = document.querySelector('nav');
    const section2 = document.querySelector('.section-2');
    const section4 = document.querySelector('.section-4');

    const obsCallback = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting == true)
                console.log('Hello');
        })

    }
    const obsOptions = {
        root: section2,
        threshold: 0.7
    }
    const observer = new IntersectionObserver(obsCallback, obsOptions);
    observer.observe(nav);
}
window.onload = function () {
    navToggler()
    particleJS();
    homeGsap();
    sideNavGsap();
    buttonAnimations();
    testimonialsCarouselSlider();
    testimonialSlideContentCreator();
}
