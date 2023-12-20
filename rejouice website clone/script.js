var tl = gsap.timeline();

function loco(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loader(){
   const loader = document.querySelector(".loader h2 span");
   tl.from(".loader h3",{
      x:40,
      opacity:0,
      delay:1.1,
      duration:1,
      stagger:0.1
   })
   tl.to(".loader h3",{
      x:-40,
      opacity:0,
      duration:1,
      delay:0.5,
      stagger:0.1
   })
   tl.to(".loader",{
      opacity:0,
      delay:0.8
   })
   tl.to(".loader",{
      display:"none",
   })
   tl.from(".page1-component h1 span",{
      y:200,
      opacity:0,
      duration:0.5,
      stagger:0.3
   })
}
loader();
function swipers(){
   var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 300,
   loop: true,
   // pagination: {
   //   el: ".swiper-pagination",
   //   clickable: true,
   // },
   autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
   // navigation: {
   //   nextEl: ".swiper-button-next",
   //   prevEl: ".swiper-button-prev",
   // },
 }); 
} 
function textEffect(){
   tl.from(".page2-components h3",{
      y:100,
      duration:.5,
      opacity:0,
      stagger:0.1,
      scrollTrigger:{
         trigger:".page2-components h3",
         scroller:"body",
         scrub:2
      }
   })
   tl.from(".page8-components h3",{
      y:100,
      duration:.5,
      opacity:0,
      stagger:0.1,
      scrollTrigger:{
         trigger:".page8-components h3",
         scroller:"body",
         scrub:2
      }
   })
   tl.from(".page4-components h3",{
      y:100,
      duration:.5,
      opacity:0,
      stagger:0.1,
      scrollTrigger:{
         trigger:".page4-components h3",
         scroller:"body",
         scrub:2
      }
   })
   tl.to(".page7-components h3",{
      y:40,
      duration:.5,
      // opacity:0,
      stagger:0.1,
      scrollTrigger:{
         trigger:".page7-components h3",
         scroller:"body",
         scrub:2
      }
   })
   tl.to(".page7-components .h-text",{
      y:40,
      duration:.5,
      // opacity:0,
      stagger:0.1,
      scrollTrigger:{
         trigger:".page7-components h3",
         scroller:"body",
         scrub:2
      }
   })
   tl.from(".text-box span",{
      y:100,
      stagger:0.2,
      opacity:1,
      scrollTrigger:{
         trigger:".page2",
         scroller:"body",
         start:"top 80%",
         scrub:2
      }
   })
   tl.to(".page3-components .m-text",{
      y:50,
      stagger:0.2,
      scrollTrigger:{
         trigger:".page3",
         scroller:"body",
         start:"top 60%",
         scrub:2
      }
   })
   tl.to(".page3-components .h-text",{
      y:60,
      stagger:0.2,
      scrollTrigger:{
         trigger:".page3",
         scroller:"body",
         start:"top 60%",
         scrub:2
      }
   })
   tl.from("#nav-6",{
      y:-200,
      opacity:0,
      stagger:0.1,
      scrollTrigger:{
         trigger:".page6",
         scroller:"body",
         start: "60% 70%",
         end:"40% 47%",
         scrub:2
      }
   })
   tl.from("#middle",{
      y:-200,
      opacity:0,
      stagger:0.1,
      scrollTrigger:{
         trigger:".page6",
         scroller:"body",
         start: "60% 70%",
         end:"40% 47%",
         scrub:2
      }
   })
   tl.from("#rei",{
      y:-300,
      opacity:0,
      stagger:1,
      scrollTrigger:{
         trigger:".page6",
         scroller:"body",
         start: "60% 70%",
         end:"40% 47%",
         scrub:5
      }
   })
   tl.from("#rei span",{
      y:-300,
      opacity:0,
      stagger:1.5,
      scrollTrigger:{
         trigger:".page6",
         scroller:"body",
         start: "60% 70%",
         end:"40% 47%",
         scrub:1
      }
   })
  
}
function mousetrails(){
   var circle = document.querySelector(".circle");
var circle2 = document.querySelector(".circle-2");
var imgBox = document.querySelector(".sm-img");
var img = document.querySelector(".sm-img img");
var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".color-ball");

page1.addEventListener("mousemove", function(dets){
   gsap.to(".circle",{
    x:dets.x,
    y:dets.y 
   })
})
page1.addEventListener("mouseenter", function(){
   gsap.to(".circle",{
    scale:1,
    opacity:1
   })
})
page1.addEventListener("mouseleave", function(){
   gsap.to(".circle",{
    scale:0,
    opacity:0
   })
})
page2.addEventListener("mousemove", function(dets){
   gsap.to(".circle-2",{
    x:dets.x,
    y:dets.y 
   })
})
page2.addEventListener("mouseenter", function(){
   gsap.to(".circle-2",{
    scale:1,
    opacity:1
   })
})
page2.addEventListener("mouseleave", function(){
   gsap.to(".circle-2",{
    scale:0,
    opacity:0
   })
})
}
textEffect();
mousetrails();
swipers();
loco();

