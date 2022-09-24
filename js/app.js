const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const curio = intro.querySelector("h1.curio");
const dev = intro.querySelector("h1.dev");
const kerrie = intro.querySelector("img.kerrie")
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 15000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation CURIO TEXT
const curioAnim = TweenMax.fromTo(curio, 3, { left: -200, opacity: 0 }, { left: 925, opacity: 1 });

let curioText = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(curioAnim)
  .addTo(controller);

// DEV TEXT

const devTextAnim = TweenMax.fromTo(dev, 3, { top: 1000, opacity: 0 }, { top: 550, opacity: 1 });

let devText = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(devTextAnim)
  .addTo(controller);

// KERSTMAN POPPETJE

const kerstmanImgSlide = TweenMax.fromTo(kerrie, 3, {top: 1000, opacity: 0}, {top: 785, opacity: 1});

let kerstmanAnim = new ScrollMagic.Scene({
  duration: 15000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(kerstmanImgSlide)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);