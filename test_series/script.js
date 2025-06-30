var crsr = document.querySelector("#cursor")
var cblur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    cblur.style.left = dets.x - 250 + "px"
    cblur.style.top = dets.y  - 250 + "px"
})


gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main" ,{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})