const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const curio = intro.querySelector("h1.curio");
const dev = intro.querySelector('h1.dev')
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let background = new ScrollMagic.Scene({
  duration: 15000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

let curioText = new ScrollMagic.Scene({
  duration: 15000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(curioAnimSlide)
  .addTo(controller);

let devText = new ScrollMagic.Scene({
  duration: 15000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnimFade)
  .addTo(controller);

let kerstman = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0.5,
})
  .addTo(controller); 
//Text Animation
const curioAnimSlide = TweenMax.fromTo(curio, 3, { left: -200, opacity: 0 }, { left: 925, opacity: 1 });

const textAnimFade = TweenMax.fromTo(dev, 3, { top: 1000, opacity: 0 }, { top: 550, opacity: 1 });





//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);

  video.currentTime = delay;
}, 16.6);
