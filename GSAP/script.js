var path = "M 60 300 Q 850 300 1440 300"
var finalPath = "M 60 300 Q 850 300 1440 300"

var string = document.querySelector("#string")
var page4 = document.querySelector("#page4")
var body = document.querySelector("body")
var cursor = document.querySelector("#cursor")

function breakTheText(){
    var h1 = document.querySelector("#page2 h1")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")
    var clutter = ""
    splittedText.forEach(function(elem) {
        clutter += `<span>${elem}</span>`
    })
    h1.innerHTML = clutter
}
breakTheText()
gsap.from("#page2 h1 span",{
    y:50,
    opacity:0,
    stagger:0.15,
    duration: 0.8,
    scrollTrigger:{
        trigger:"h1 span",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        //scrub:2        
    },
})
body.addEventListener("mousemove", function(dets) {
    gsap.to(cursor ,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
        ease: "back.out(1.7)",
    })
})

string.addEventListener("mousemove", function (dets) {
    path = `M 60 300 Q 850 ${dets.y} 1440 300`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave", function (dets) {
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.5,
        ease: "bounce.out",
    })
})

gsap.to("#page3 h1",{
    transform: "translateX(-65%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub:2,
        pin:true
    }
})

gsap.to("#page4 #box",{
    opacity:0,

    
   // x: 200,
  // y: 200,
  //  ease: "elastic.out(1, 0.3)",
  //  repeat: -1,
  //  yoyo: true,
    rotation: 360,
    borderRadius: "50%",
    scrollTrigger:{
        trigger:"#page4 #box",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        duration: 5,
        scrub:2
    },
 //  ease: "power4.inOut"
})

