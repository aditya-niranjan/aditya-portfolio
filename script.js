// Sharey.imageEffect(elemnt, configurations)


Shery.imageEffect("#back", {style: 5, config: {"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0551948703386897},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.24,"range":[1,15]},"durationOut":{"value":1.41,"range":[0.1,5]},"durationIn":{"value":1.33,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.67,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}} , gooey: true})

var elems = document.querySelectorAll(".elem");

  elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;

        document.querySelector("#main")
.        addEventListener("click", function(){
      if(!animating){
        animating = true;
        gsap.to(h1s[index],{
          top:'-=100%',
          ease: Expo.easeInOut,
          duration:1,
          onComplete: function(){
            gsap.set(this._targets[0], {top:"100%" });
            animating = false;

  },
});

 index === h1s.length-1 ? (index = 0) :index++;

gsap.to(h1s[index],{
  top:'-=100%',
  ease: Expo.easeInOut,
  duration:1,
});
      }
})

  })

  
  // --------------------projects h1 css with js ----------------------------

  // function([string1, string2],target id,[color1,color2])    
 consoleText(['Here is.!', 'My projects ', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

 function consoleText(words, id, colors) {
   if (colors === undefined) colors = ['#fff'];
   var visible = true;
   var con = document.getElementById('console');
   var letterCount = 1;
   var x = 1;
   var waiting = false;
   var target = document.getElementById(id)
   target.setAttribute('style', 'color:' + colors[0])
   window.setInterval(function() {
 
     if (letterCount === 0 && waiting === false) {
       waiting = true;
       target.innerHTML = words[0].substring(0, letterCount)
       window.setTimeout(function() {
         var usedColor = colors.shift();
         colors.push(usedColor);
         var usedWord = words.shift();
         words.push(usedWord);
         x = 1;
         target.setAttribute('style', 'color:' + colors[0])
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (letterCount === words[0].length + 1 && waiting === false) {
       waiting = true;
       window.setTimeout(function() {
         x = -1;
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (waiting === false) {
       target.innerHTML = words[0].substring(0, letterCount)
       letterCount += x;
     }
   }, 120)
   window.setInterval(function() {
     if (visible === true) {
       con.className = 'console-underscore hidden'
       visible = false;
 
     } else {
       con.className = 'console-underscore'
 
       visible = true;
     }
   }, 400)
 }
  
// --------------------------h2 gsap aniamtion start end code--------------------------

    // Set up ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Define the animation
    const animation = gsap.from(".console-container", {
      opacity: 0,
      y: 190,
      duration: 0.3,
      // marker:true,
      paused: true, // Animation starts paused
    });

    // Create the ScrollTrigger
    ScrollTrigger.create({
      trigger: ".console-container", // The element that triggers the animation
      opacity:1,
      start: "top center", // When the top of the trigger element hits the center of the viewport
      onEnter: () => animation.play(), // Play the animation when the trigger enters the viewport
      onLeaveBack: () => animation.reverse(), // Reverse the animation when the trigger leaves the viewport
      toggleActions: "play reverse play reverse", // Defines the sequence of actions when entering and leaving
      // marker:true,
    });


    

    // ----------------------------projects container----------------------
    


  // Create a GSAP timeline for background color change

 function backcolor(){
  gsap.registerPlugin(ScrollTrigger);

  const colorChangeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#skills",
      start: "-40% 50%",
      end: "80% 95%",
      duration:1,
      scrub: 3, // Adjust the scrub value as needed
      // markers: true, // Add markers for visualization
    },
  });

  // Add color change to the timeline
  colorChangeTimeline.to("#skills", {
    backgroundColor: "black", // Change this to the desired end color
  },"suuuu");


   // Add color change to the timeline
   colorChangeTimeline.to("#projets", {
    backgroundColor: "black", // Change this to the desired end color
  },"suuuu");
  
  
 }
 backcolor()



  // -------------------------------------here is locomotive--------------------------

  // var myButton = document.getElementById('.ri-menu-2-line');
  // var myElement = document.getElementById('#nav a');
  
  // function handleButtonClick() {
  //   // Toggle the opacity between 0.5 and 1
  //   "#nav a".style.opacity = ("#nav a".style.display === 'block') ? '0.5' : '1';
  // }
  
  // ri-menu-2-line.addEventListener('click', handleButtonClick);