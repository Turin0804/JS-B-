let colorgenerator=document.querySelector("#colorgenerator");
let clrbtn=document.querySelector(".clrbtn");

clrbtn.addEventListener("click",function(){
  let red=Math.round(Math.random() *255);
  let green=Math.round(Math.random() *255);
  let blue=Math.round(Math.random() *255); 

  colorgenerator.style.background=`rgb(${red},${green},${blue})`;
    });