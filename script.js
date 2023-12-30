 var l= gsap.timeline()
l.from('nav .other-account ul li ,nav .logo, nav .nav-btn',{
    y:-200,
    opacity:0,
    // scale:0,
    // delay:2,
    // duration:0.1,
    stagger:0.2
})
l.from('.home-dark .title ,.home-dark .sub-title, .home-dark .home-btn ',{
    y:-100,
    opacity:0,
    scale:0,
    // delay:2,
    stagger:0.2
})
gsap.from('.second-page .ditails ',{
    y:200,
    opacity:0,
    scale:0,
    // delay:2,
    
    scrollTrigger:{
        trigger:".second-page",
        scroll:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%"
    }
})
gsap.from('.third-page-title ',{
    // y:200,
    opacity:0,
    scale:0,
    // delay:2,
    
    scrollTrigger:{
        trigger:".third-page-content",
        scroll:"body",
        // markers:true,
        start:"top 59%",
        end:"top 30%"
    }
})
gsap.from('.third-page .campus-details ',{
    // y:200,
    opacity:0,
    scale:0,
    // delay:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".third-page .recent-campus",
        scroll:"body",
        // markers:true,
        start:"top 59%",
        end:"top 30%"
    }
})
gsap.from('.title-for-drive  ',{
    // y:200,
    opacity:0,
    scale:0,
    // delay:2,
    
    scrollTrigger:{
        trigger:".title-for-drive ",
        scroll:"body",
        // markers:true,
        start:"top 59%",
        end:"top 30%"
    }
})
gsap.from('.upgsap  ',{
    y:200,
    opacity:0,
    scale:0,
    // delay:2,
    
    scrollTrigger:{
        trigger:".upgsap ",
        scroll:"body",
        // markers:true,
        start:"top 99%",
        end:"top 80%"
    }
})
gsap.from('.upgsap1  ',{
    y:200,
    opacity:0,
    scale:0,
    // delay:2,
    
    scrollTrigger:{
        trigger:".upgsap1 ",
        scroll:"body",
        // markers:true,
        start:"top 99%",
        end:"top 80%"
    }
})
gsap.from('.upgsap2  ',{
    y:200,
    opacity:0,
    scale:0,
    // delay:2,
    
    scrollTrigger:{
        trigger:".upgsap2 ",
        scroll:"body",
        // markers:true,
        start:"60% 99%",
        end:"top 80%"
    }
})

gsap.from('.seventh-page .page7-title ',{
    // y:200,
    opacity:0,
    scale:0,
    // delay:2,
    
    scrollTrigger:{
        trigger:".seventh-page",
        scroll:"body",
        // markers:true,
        start:"top 59%",
        end:"top 30%"
    }
})
gsap.from('.page7img ',{
    // y:200,
    opacity:0,
    scale:0,
    // delay:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".seventh-page .page7-title",
        scroll:"body",
        // markers:true,
        start:"top 59%",
        end:"top 30%"
    }
})