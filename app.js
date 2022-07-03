
document.getElementById("dance").addEventListener("click",function () {
  document.documentElement.scrollTop=0
})
window.onscroll= function(){
if(
  document.body.scrollTop > 100 ||document.documentElement.scrollTop>100){
  document.querySelector("nav").style.opacity="1"
  document.querySelector("nav").style.transition="all 1s"
  document.querySelector(".dancing-top").style.display="block"
}
else{
  document.querySelector("nav").style.opacity="0.5";
  document.querySelector(".dancing-top").style.display="none"
}
}

function mybar()
{
    document.querySelector(".link-con").style.width="100%";
    document.querySelector(".trans-opacity").style.opacity="1"
};

function myxmark(){
    document.querySelector(".link-con").style.width="0%";
document.querySelector(".trans-opacity").style.opacity="0"
document.querySelector(".trans-opacity").style.transition="all 0.3s "

}
function myp(){
    var x=document.getElementById("added-whole")
    if(x.className === "product-whole"){
    x.className+="respond"
    }
else{
    x.className="product-whole"
}
// *or*
    // document.querySelector(".product-whole").classList.toggle("respond") 
    
    document.getElementById("id-two").classList.toggle("fa-angle-up-cor");
    document.getElementById("id-one").classList.toggle("fa-angle-down-cor")
   
}
function angledown(){
  document.getElementById("id-two").classList.toggle("fa-angle-up-cor");
  document.getElementById("id-one").classList.toggle("fa-angle-down-cor")
  document.querySelector(".product-whole").classList.toggle("respond") 
}
function angleup(){
  document.getElementById("id-one").classList.toggle("fa-angle-down-cor");
  document.getElementById("id-two").classList.toggle("fa-angle-up-cor")
  document.querySelector(".product-whole").classList.toggle("respond") 
}

function myr(){
    var y= document.getElementById("resources-out")
  if( y.className ==="resources-whole"){
    y.className+="repeat"
  }
  else{
    y.className="resources-whole"
  }
  document.getElementById("id-four").classList.toggle("fa-angle-up-help");
  document.getElementById("id-three").classList.toggle("fa-angle-down-help")
}
function angledown2(){
  document.getElementById("id-four").classList.toggle("fa-angle-up-help");
  document.getElementById("id-three").classList.toggle("fa-angle-down-help")
  document.querySelector(".resources-whole").classList.toggle("repeat") 
}
function angleup2(){
  document.getElementById("id-three").classList.toggle("fa-angle-down-help");
  document.getElementById("id-four").classList.toggle("fa-angle-up-help")
  document.querySelector(".resources-whole").classList.toggle("repeat") 
}
const swiper = new Swiper('.swiper-container-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    bulletActiveClass:	'rate-2 swiper-pagination-bullet-active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
effect:'fade',
fadeEffect: {
  crossFade: true
},

 autoplay:{
  delay:3000
 },
 speed:1000
});
document.getElementById("another-accord-1").addEventListener("click",function(){
  document.querySelector(".text-accord-1").classList.toggle("text-accord-all")
  
 
})
document.getElementById("another-accord-2").addEventListener("click",function(){
  document.querySelector(".text-accord-2").classList.toggle("text-accord-all")

  
})
document.getElementById("another-accord-3").addEventListener("click",function(){
  document.querySelector(".text-accord-3").classList.toggle("text-accord-all")
})
document.getElementById("another-accord-4").addEventListener("click",function(){
  document.querySelector(".text-accord-4").classList.toggle("text-accord-all")
})
const bullet = new Swiper('.swiper-container-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    bulletActiveClass:	'rate-2 swiper-pagination-bullet-active',
   
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
effect:'coverflow',
fadeEffect: {
  crossFade: true
},

 autoplay:{
  delay:3000
 },
 speed:1000
});
gsap.to('.letter-container-1',{
  scrollTrigger:{
    trigger:'.letter-container-1',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-10,opacity:1,delay:0.3
}
)

gsap.to('.letter-container-2',{
  scrollTrigger:{
    trigger:'.letter-container-2',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-10,opacity:1,delay:0.3
}
)
gsap.to('.letter-container-3',{
  scrollTrigger:{
    trigger:'.letter-container-3',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-10,opacity:1,delay:0.3
}
)
gsap.to('.creative-con-1',{
  scrollTrigger:{
    trigger:'.creative-con-1',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',scale:1,opacity:1,delay:0.3
}
)
gsap.to('.creative-con-2',{
  scrollTrigger:{
    trigger:'.creative-con-2',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-10,opacity:1,delay:0.3
}
)

gsap.to('.sub-sec-para',{
  scrollTrigger:{
    trigger:'.sub-sec-para',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-6,opacity:1,delay:0.3
}
)
gsap.to('.percent-container',{
  scrollTrigger:{
    trigger:'.percent-container',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-7,opacity:1,delay:0.3
}
)
gsap.to('.flex-sec-two',{
  scrollTrigger:{
    trigger:'.flex-sec-two',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-7,opacity:1,delay:0.3
}
)
gsap.to('.prof-flex-container',{
  scrollTrigger:{
    trigger:'.prof-flex-container',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-7,opacity:1,delay:0.3
}
)
gsap.to(' .late-flex-container',{
  scrollTrigger:{
    trigger:' .late-flex-container',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-7,opacity:1,delay:0.3
}
)
gsap.to(' .gideon-container-1',{
  scrollTrigger:{
    trigger:' .gideon-container-1',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-5,opacity:1,delay:0.3
}
)
gsap.to(' .gideon-container-2',{
  scrollTrigger:{
    trigger:' .gideon-container-2',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-5,opacity:1,delay:0.3
}
)
gsap.to(' .gideon-container-3',{
  scrollTrigger:{
    trigger:' .gideon-container-3',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-5,opacity:1,delay:0.3
}
)
gsap.to(' .gideon-container-4',{
  scrollTrigger:{
    trigger:' .gideon-container-4',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-5,opacity:1,delay:0.3
}
)
gsap.to(' .gideon-container-5',{
  scrollTrigger:{
    trigger:' .gideon-container-5',
    toggleActions:'restart pause restart none'
  },
  duration:0.5,ease:'power1',y:-5,opacity:1,delay:0.3
}
)