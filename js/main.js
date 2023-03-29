document.addEventListener("DOMContentLoaded",() => {
  gsap.registerPlugin(ScrollTrigger);

  const parallax= gsap.timeline()
  
  parallax
    .to(".visual-center",{
      opacity:0,
      scale: .5
    }, .1)
    .to(".center-desc",{
      opacity:0,
      scale: .5,
      y: -50
    }, .1)
    .to(".header-logo",{
      opacity:1,
      x: 75
    }, .1)
    .to(".header-title",{
      opacity:0,
      x: -200
    }, .1)
    .to(".header-email",{
      x: 50,
      y: 50,
      rotate: "90deg"
    }, .1)
    .to(".hi",{
      opacity:1,
      duration:3,
      y: -50
    })
    .to(".hi",{
      opacity:0,
      y: -100
    })
    .to(".bat",{
      opacity:1,
      duration:3,
      y: -50
    })
    .to(".bat",{
      opacity:0,
      y: -100
    })
    .to(".my-name",{
      opacity:1,
      duration:3,
      y: -50
    })
    .to(".my-name",{
      opacity:0,
      y: -100
    })
    .to(".visual",{
      opacity:0
    })
  
    ScrollTrigger.create({
      animation:parallax,
      trigger:".visual",
      start: "top 0%",
      end:"bottom 0%",
      scrub:5,
      pin: true,
    })
  
  
  
    gsap.to(".thumb-box",{
      scrollTrigger:{
        trigger:".visual",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"80% center",
        end:"110% center"
      },
      y: -200,
      duration: 4
    })
    gsap.to(".node-ment",{
      scrollTrigger:{
        trigger:".skills",
        toggleActions:"restart none reverse reverse",
        start:"-10% center",
        end:"10% center",
      },
      y: 20,
      opacity: 1
    })
    gsap.to(".project-item:nth-child(1)",{
      scrollTrigger:{
        trigger:".projects",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"top center",
        end:"10% center",
      },
      y: -100,
      opacity: 1,
      duration: 4
    })
    gsap.to(".project-item:nth-child(2)",{
      scrollTrigger:{
        trigger:".projects",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"10% center",
        end:"20% center",
      },
      y: -100,
      opacity: 1,
      duration: 4
    })
    gsap.to(".project-item:nth-child(3)",{
      scrollTrigger:{
        trigger:".projects",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"20% center",
        end:"30% center"
      },
      y: -100,
      opacity: 1,
      duration: 4
    })
    gsap.to(".project-item:nth-child(4)",{
      scrollTrigger:{
        trigger:".projects",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"30% center",
        end:"40% center"
      },
      y: -100,
      opacity: 1,
      duration: 4
    })
    gsap.to(".project-item:nth-child(5)",{
      scrollTrigger:{
        trigger:".projects",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"40% center",
        end:"50% center"
      },
      y: -100,
      opacity: 1,
      duration: 4
    })
    gsap.to(".pj-background-word:nth-child(1)",{
      scrollTrigger:{
        trigger:".projects",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"5% center",
        end:"15% center"
      },
      y: -50,
      opacity: 1,
      duration: 4
    })
    gsap.to(".pj-background-word:nth-child(2)",{
      scrollTrigger:{
        trigger:".projects",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"15% center",
        end:"25% center"
      },
      y: -50,
      opacity: 1,
      duration: 4
    })
    gsap.to(".pj-background-word:nth-child(3)",{
      scrollTrigger:{
        trigger:".projects",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"25% center",
        end:"35% center"
      },
      y: -50,
      opacity: 1,
      duration: 4
    })
    gsap.to(".recruit-title",{
      scrollTrigger:{
        trigger:".recruit",
        toggleActions:"restart reverse reverse none",
        scrub: true,
        start:"-10% center",
        end:"35% center"
      },
      x: -800,
      opacity: 1,
      duration: 4
    })

})
