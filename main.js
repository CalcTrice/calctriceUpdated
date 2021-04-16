window.onload = function () {
    document.body.style.opacity = 1;
    init();
}
const navToggler = function () {
    const navIcon = document.querySelector('.burger');
    const closeNav = document.querySelector('.close-nav');
    const navLinks = document.querySelector('.nav-links');
    const blurSlate = document.querySelector('.blurSlate');
    const logo = document.querySelector('.logo');

    let tl = gsap.timeline();

    if (!tl.isActive())
        blurSlate.addEventListener('click', function () {
            navLinks.classList.remove('show');
            tl.to('.blurSlate', { scaleX: 0, duration: .4, transformOrigin: 'right' })
        });

    if (!tl.isActive())
        navIcon.addEventListener('click', function () {
            navLinks.classList.add('show');
            tl
                .from('.submenu-links ', { y: 50, opacity: 0, duration: 0.5, stagger: 0.15 })
                .to('.blurSlate', { scaleX: 1, duration: 0.8, transformOrigin: 'left' }, "=-1")
                .from('.blurSlate .info', { x: -200, opacity: 0, duration: 0.3 })



            logo.style.transition = 'all 0.1s ease-out';
            logo.style.opacity = 0;
        });
    if (!tl.isActive())
        closeNav.addEventListener('click', function () {
            navLinks.classList.remove('show');
            tl
                .fromTo('.blurSlate .info', { opacity: 1, duration: 0.2 }, { opacity: 0 }, "=-0.3")
                .to('.blurSlate', { scaleX: 0, duration: .4, transformOrigin: 'left' })
                .to('.blurSlate .info', { opacity: 1, duration: 0 })

            logo.style.transition = 'all 0.1s ease-out';
            logo.style.opacity = 1;
            // tl.reverse();
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

}
const buttonAnimations = function () {
    const button1 = document.querySelector('.button-1');
    const button2 = document.querySelector('.button-2');
    const button3 = document.querySelector('.button-3');

    const box = document.querySelector(".box");
    box.style.transform = "translate(-50%, -2px)";
    button1.addEventListener('mouseenter', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "0%";
        box.style.transform = "translate(0%, -2px)"
    })
    button1.addEventListener('mouseleave', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "50%";
        box.style.transform = "translate(-50%, -2px)"
    })

    button3.addEventListener('mouseenter', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "100%";
        box.style.transform = "translate(-100%, -2px)"
    })
    button3.addEventListener('mouseleave', function () {
        box.style.transition = "0.3s ease-out";
        box.style.left = "50%";
        box.style.transform = "translate(-50%, -2px)"
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
const navIntersection = function () {
    const nav = document.querySelector('nav');
    const section2 = document.querySelector('.section-2');
    const section4 = document.querySelector('.section-4');

    const obsCallback = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting == true) {
                console.log("Hello");
                nav.classList.add('dark-nav');
            }
        })
    }
    const obsOptions = {
        root: section4,
        threshold: 0.7
    }
    const observer = new IntersectionObserver(obsCallback, obsOptions);
    observer.observe(nav);
}
const carouselInit = function () {

    $('.testimonials-carousel').slick({
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

}
const articlesCatalogueContentCreator = function () {
    const cardTemplateString = `
    <div class="col-lg-12 col-xxl-6">
    <div class="articles-catalogue__display-card">
        <a href="sample-article-page-1.html" class="article-link__card-overlay"></a>
        <div class="number article-number"></div>
        <div class="article-title">
            <h4></h4>
        </div>
        <div class="article-authors">
            <p></p>
        </div>
        <div class="article-date">
            <span class="date-time date"></span>
        </div>
    </div>
</div>
    
    `
    const articleData = [
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Yash Sonalia'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '14/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Snigda Gupta'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '14/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Yash Sonalia', 'Snigda Gupta'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '14/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Yash Sonalia', 'Snigda Gupta', 'Adam West'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '15/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Yash Sonalia'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '14/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Snigda Gupta'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '14/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Yash Sonalia', 'Snigda Gupta'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '14/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Yash Sonalia', 'Snigda Gupta', 'Adam West'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '15/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Yash Sonalia'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '14/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Snigda Gupta'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '14/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Yash Sonalia', 'Snigda Gupta'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '14/04/21',

        },
        {
            heading: '5 Ways to make more money online - Even if you’re just starting out Ways to make more money online - Even if you’re just starting out',
            authors: ['Yash Sonalia', 'Snigda Gupta', 'Adam West'],
            topicsCovered: ['Finance', 'Business', 'Schooling'],
            dateTime: '15/04/21',

        },
    ];
    const dynamicCardAddition = document.querySelector('.dynamic-card-addition');

    articleData.forEach(function () {
        dynamicCardAddition.insertAdjacentHTML('beforeend', cardTemplateString);
    })

    const articleCard = document.querySelectorAll('.articles-catalogue__display-card');
    articleCard.forEach(function (card, cardNumber) {
        if (cardNumber < 9) card.querySelector('.article-number').innerHTML = `0${cardNumber + 1}`;
        else card.querySelector('.article-number').innerHTML = `${cardNumber + 1}`;

        card.querySelector('.article-title h4').innerHTML = `${articleData[cardNumber].heading}`;

        if (articleData[cardNumber].authors.length > 1) card.querySelector('.article-authors p').innerHTML = `${articleData[cardNumber].authors.length} Authors`;
        else card.querySelector('.article-authors p').innerHTML = `${articleData[cardNumber].authors}`;

        card.querySelector('.article-date .date').innerHTML = `${articleData[cardNumber].dateTime}`;



    })


}
const barbaInit = function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    function pageTransition() {
        const tl = gsap.timeline();

        tl
            .to('section.article-section', { opacity: 0, y: -100, duration: 0.5 })
            .to('section.article-section', { opacity: 1, y: 0, duration: 0.5 }, '+=0.5')

        window.scrollTo(0, 0)

    }
    function contentAnimation() {
        current.container.remove();
        window.scrollTo(0, 0);
    }

    function delay(n) {
        n = n || 2000;
        return new Promise(done => {
            setTimeout(() => {
                done();
            }, n);
        });
    }

    barba.init({
        sync: true,
        transitions: [{
            async leave(data) {
                const done = this.async();
                pageTransition();
                await delay(1500);
                done();
            },
            async enter(data) {

                contentAnimation();

            },
            async once(data) {
                contentAnimation();
            }
        }]
    });
    // Barba.Dispatcher.on('newPageReady', function (current, prev, container) {
    //     history.scrollRestoration = 'manual';
    // });

}

function init() {
    navToggler()
    // sideNavGsap();
    if (document.body.id === "home") {
        particleJS();
        homeGsap();
        buttonAnimations();
        navIntersection();
        carouselInit();
    }
    if (document.body.id === "catalogue")
        articlesCatalogueContentCreator();

    if (document.body.id === 'barba')
        barbaInit();
}

