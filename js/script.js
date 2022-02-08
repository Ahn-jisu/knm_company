
var svgEl = document.querySelector('.animated-lines');

var randomRange = function(min, max) {
  return ~~(Math.random() * (max - min + 1)) + min
};

var numberOfLines = 20,
  lineDataArr = [];

var createPathString = function() {

  var completedPath = '',
    comma = ',',
    ampl = 50; // pixel range from 0, aka how deeply they bend

  for (var i = 0; i < numberOfLines; i++) {

    var path = lineDataArr[i];

    var current = {
      x: ampl * Math.sin(path.counter / path.sin),
      y: ampl * Math.cos(path.counter / path.cos)
    };

    var newPathSection = 'M' +
      // starting point
      path.startX +
      comma +
      path.startY +
      // quadratic control point
      ' Q' +
      path.pointX +
      comma +
      (current.y * 1.5).toFixed(3) + // 1.5 to amp up the bend a little
      // center point intersection
      ' ' +
      ((current.x) / 10 + path.centerX).toFixed(3) +
      comma +
      ((current.y) / 5 + path.centerY).toFixed(3) +
      // end point with quadratic reflection (T) (so the bottom right mirrors the top left)
      ' T' +
      path.endX +
      comma +
      path.endY;
    path.counter++;

    completedPath += newPathSection;

  };

  return completedPath;

};

var createLines = function() {

  var newPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
    // higher is slower
    minSpeed = 85,
    maxSpeed = 150;

  // create an arr which contains objects for all lines
  // createPathString() will use this array
  for (var i = 0; i < numberOfLines; i++) {

    var lineDataObj = {
      counter: randomRange(1, 500), // a broad counter range ensures lines start at different cycles (will look more random)
      startX: randomRange(-5, -40),
      startY: randomRange(-5, -30),
      endX: randomRange(200, 220), // viewbox = 200
      endY: randomRange(120, 140), // viewbox = 120
      sin: randomRange(minSpeed, maxSpeed),
      cos: randomRange(minSpeed, maxSpeed),
      pointX: randomRange(30, 55),
      centerX: randomRange(90, 120),
      centerY: randomRange(60, 70)
    }

    lineDataArr.push(lineDataObj)

  }

  var animLoop = function() {
    newPathEl.setAttribute('d', createPathString());
    requestAnimationFrame(animLoop);
  }

  // once the path elements are created, start the animation loop
  svgEl.appendChild(newPathEl);
  animLoop();

};

createLines();


// scrolltrigger
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

gsap.to(".pContent", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});

gsap.to(".pImage", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});

// photo3
const delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {
  const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none"
  });
  
  const imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true
  });
  
  const scrub = gsap.to(imageAnim, {
    progress: 1,
    paused: true,
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
    overwrite: true
  });
  
  ScrollTrigger.create({
    animation: containerAnim,
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: self => {
      scrub.vars.progress = self.progress;
      scrub.invalidate().restart();
    }
  });
});

// work
/* ------Great Horned Owl Sequence------  */
gsap.set(".circle", { yPercent: -5});
gsap.set(".dotsBlue", { yPercent: 10});
gsap.set(".owlHorned", { yPercent: -20});
gsap.set(".clusterGreat", { yPercent: 5});

gsap.to(".circle", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".dotsBlue", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});


gsap.to(".owlHorned", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterGreat", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    end: "bottom center",
    scrub: 1
  }, 
});



/* ------Burrowing Owl Sequence------  */
gsap.set(".triangle", { yPercent: 25, rotation:-90});
gsap.set(".dotsWhite", { yPercent: 10});
gsap.set(".owlBurrowing", { yPercent: -20});
gsap.set(".clusterBurrowing", { yPercent: 5});

gsap.to(".triangle", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".dotsWhite", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});


gsap.to(".owlBurrowing", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".captionBurrowing", {
  yPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterBurrowing", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

// slick slider
$(document).ready(function(){
  $('.responsive').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // header color
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
      $(".header").removeClass("active");
    }
  });

});

