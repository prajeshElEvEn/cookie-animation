const tl = gsap.timeline(
    {
        defaults: {
            duration: 0.75,
            ease: "power3.out"
        }
    }
)

tl.fromTo(
    '.popup',
    {
        scale: 0,
    },
    {
        scale: 1,
        ease: "elastic.out(1, 0.3)",
        duration: 1.2
    }
)

tl.fromTo(
    '.cookie',
    {
        opacity: 0,
        x: -50,
        rotation: '-45deg'
    },
    {
        opacity: 1,
        x: 0,
        rotation: '0deg'
    },
    '<50%'
)

tl.fromTo(
    '.text',
    {
        opacity: 0,
        x: 30
    },
    {
        opacity: 1,
        x: 0
    },
    '<'
)