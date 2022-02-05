//movement
const card = document.querySelector('.card');
const container = document.querySelector('.container')
//item
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.info h3')
const size = document.querySelector('.size')

//moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; 
});

//animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    //pop
    title.style.transform='translateZ(150px)';
    sneaker.style.transform='translateZ(150px)';
    description.style.transform='translateZ(125px)';
    size.style.transform='translateZ(100px)';
    purchase.style.transform='translateZ(75px)';
});
//animate Out
container.addEventListener('mouseleave', (e) =>{
    card.style.transition = 'all 0.3s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //pop
    title.style.transform='translateZ(0px)';
    sneaker.style.transform='translateZ(0px)';
    description.style.transform='translateZ(0px)';
    size.style.transform='translateZ(0px)';
    purchase.style.transform='translateZ(0px)';
});