var c = document.getElementById('globe'),
    // next = document.getElementById('next'),
    // prev = document.getElementById('prev'),
    boxes = [],
    currentTL = 1,
    numTLs = 1;

window["t"+currentTL]();



// 2. Thumbnails globe
function t1(){
  var n = makeBoxes(50);
  TweenMax.to(c, 0.4, {perspective:1000})
  for (var i=0; i<boxes.length; i++){
    var b = boxes[i];
    new TimelineMax()
      .set(b, {
        borderRadius:'20%',
        background:'#fff',
        clearProps:'transform',
      })
		  .fromTo(b, 5, {
        rotationX:i/n*360,
        rotationY:Math.random()*360,      
        rotationZ:Math.random()*360,
        transformOrigin:String("150% 50% -360px")
      },{
        rotationY:'-=360',
        repeat:-1,
        ease:Linear.easeNone,
      })
      .timeScale(0.15)
    
    // Intro
    TweenMax.fromTo(b, 1, {
      alpha:0,
      scale:0,
      scaleZ:0.5
    }, {
      alpha:0.15+(i/n*0.35),
      scale:0.4-Math.random()*0.2,
      scaleZ:1,
      delay:i/n/2,
      ease:Power4.easeOut
    });
  }
}


function makeBoxes(n){

  c.innerHTML = "";
  boxes = [];

  for (var i=0; i<n; i++){
    var b = document.createElement('div');
    b.className += 'box';
    boxes.push(b);
    c.appendChild(b);
  }
  
  return n;
}