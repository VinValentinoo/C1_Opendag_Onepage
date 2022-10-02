const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const curio = intro.querySelector("h1.curio");
const dev = intro.querySelector("h1.dev");
const kerrie = intro.querySelector("img.kerrie")
//END SECTION
const section = document.querySelector("section.vak-codelab");
const vakText = section.querySelector("h1.vakT");
// Windows section
const winSection = document.querySelector("section.vak-win");
const winText = winSection.querySelector("h1.vakT");
// Web section
const webSection = document.querySelector("section.vak-web");
const webText = webSection.querySelector("h1.vakT");
// Generieken vakken
const genSection = document.querySelector("section.vak-gen");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();
const vakController = new ScrollMagic.Controller();
const winController = new ScrollMagic.Controller();
const webController = new ScrollMagic.Controller();
const genController = new ScrollMagic.Controller();

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


// Section 1
// Vakken text fade out

const sectionAnim = TweenMax.fromTo(section, 3 , {backgroundColor:'black'}, {duration: 3, backgroundColor: 'whitesmoke', ease:"linear"});

let scene2 = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: section,
  triggerHook: 0,
})
  .addIndicators()
  .setTween(sectionAnim)
  .setPin(section)
  .addTo(vakController);


// Text animation vakken

const vakTextAnim = TweenMax.fromTo(vakText, 3 , {opacity: 1}, {opacity: 0});

let vakT = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: section,
  triggerHook: 0
})
  .setTween(vakTextAnim)
  .addTo(vakController);

// Codelab text
const codelab = section.querySelector("h2.codelab");
const codelabT = section.querySelector("h2.codelabT");

const codelabFadeIn = TweenMax.fromTo(codelab, 3, {opacity: 1}, {opacity: 0});
const codelabTFadeIn = TweenMax.fromTo(codelabT, 3, {opacity: 1}, {opacity: 0});

let codelabTitel = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: section,
  triggerHook: 0,
})
  .setTween(codelabFadeIn)
  .addTo(vakController);

let codelabText = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: section,
  triggerHook: 0
})
  .setTween(codelabTFadeIn)
  .addTo(vakController);

// Windows section
const winT = winSection.querySelector('h2.windowsT')
const code = winSection.querySelector("img.codeImg")

const winTextAnim = TweenMax.fromTo(winText, 3 , {opacity: 1}, {opacity: -1});
const winUitlegAnim = TweenMax.fromTo(winT, 3 , {opacity: 0 }, {opacity: 1 });
const codeSlideIn = TweenMax.fromTo(code, 3, {left: 2500, opacity: 0}, {left: -1200, opacity: 1});

let winScene = new ScrollMagic.Scene({
  duration: 12000,
  triggerElement: winSection,
  triggerHook: 0
})
  .addIndicators()
  .setTween(winTextAnim)
  .setPin(winSection)
  .addTo(winController);

let winTextScene = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: winSection,
  triggerHook: 0
})
  .setTween(winUitlegAnim)
  .addTo(winController);

let codeImgAnim = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: winSection,
  triggerHook: 0
})
  .setTween(codeSlideIn)
  .addTo(winController);

// Web section
const webSectionFade = TweenMax.fromTo(webSection, 1, {opacity: -1}, {opacity: 1});

let webScene = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: webSection,
  triggerHook: 0
})
  .addIndicators()
  .setTween(webSectionFade)
  .setPin(webSection)
  .addTo(webController);



// Generieken vakken

const genText = genSection.querySelector(".vak-gen-fadein-anim");

const genTextFade = TweenMax.fromTo(genText, 3, {opacity: -1}, {opacity: 1});


let genScene = new ScrollMagic.Scene({
  duration: 7500,
  triggerElement: genSection,
  triggerHook: 0
})
  .addIndicators()
  .setTween(genTextFade)
  .setPin(genSection)
  .addTo(genController);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
  curioAnim.currentTime = delay;
  devTextAnim.currentTime = delay;
  kerstmanImgSlide.currentTime = delay;
  sectionAnim.currentTime = delay;
  vakTextAnim.currentTime = delay;
  codelab.currentTime = delay;
  codelabT.currentTime = delay;
  codelabFadeIn.currentTime = delay;
  codelabTFadeIn.currentTime = delay;
  winTextAnim.currentTime = delay;
  winUitlegAnim.currentTime = delay;
  codeSlideIn.currentTime = delay;
  webSectionFade.currentTime = delay;

}, 16.6);