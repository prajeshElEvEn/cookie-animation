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

tl.fromTo(
    '.cookie',
    {
        y: 0,
        rotation: '0deg'
    },
    {
        y: -10,
        rotation: '-10deg',
        yoyo: true,
        repeat: -1,
        duration: 0.5
    }
)
tl.fromTo(
    '#crumbs',
    {
        y: 0,
        // rotation: '0deg'
    },
    {
        y: -10,
        // rotation: '-10deg',
        yoyo: true,
        repeat: -1,
        duration: 0.5
    },
    '<'
)

const zip = () => {
    // tl.fromTo(
    //     '.cookie',
    //     {
    //         opacity: 1,
    //         x: 0,
    //         rotation: '0deg'
    //     },
    //     {
    //         opacity: 0,
    //         x: -100,
    //         rotation: '-45deg'
    //     }
    // )
    // tl.fromTo(
    //     '.text',
    //     {
    //         opacity: 1,
    //         x: 0
    //     },
    //     {
    //         opacity: 0,
    //         x: 100
    //     },
    //     '<'
    // )
    tl.fromTo(
        '.popup',
        {
            opacity: 1,
            scale: 1,
        },
        {
            opacity: 0,
            scale: 0,
            duration: 0.3,
        },
        // '<50%'
    )
}