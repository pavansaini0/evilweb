let theme1 = document.querySelector("#theme-1");
let theme2 = document.querySelector("#theme-2");
let theme3 = document.querySelector("#theme-3");

let body = document.querySelector("body");
let sec = document.querySelectorAll("section")
let coolNav = document.querySelector(".cool-nav");
let nav = document.querySelector("nav")
let themeDiv = document.querySelector(".theme-div")


let light = "rgb(230, 219, 219)";
let cyan = "rgb(7, 117, 125)";
let gray = "rgb(57, 62, 70)";
let black = "rgb(34, 40, 49)";

theme1.addEventListener("click",themeStyle1);
theme2.addEventListener("click",themeStyle2);
theme3.addEventListener("click",themeStyle3);

function themeStyle1(){
  body.style.backgroundColor = black;  

  for (let i = 0; i < sec.length; i++) {
    sec[i].style.backgroundColor = gray;
  }

  coolNav.style.backgroundColor = black;
  coolNav.style.color = light;

  nav.style.backgroundColor = gray;

  themeDiv.style.backgroundColor = black;

  nav.style.boxShadow = "none";

  theme1.style.backgroundColor = cyan;
  theme2.style.backgroundColor = gray;
  theme3.style.backgroundColor = gray;
}

function themeStyle2(){
  body.style.backgroundColor = gray;  

  for (let i = 0; i < sec.length; i++) {
    sec[i].style.backgroundColor = black ;
  }

  coolNav.style.backgroundColor = gray;
  coolNav.style.color = light;

  nav.style.backgroundColor = black;

  themeDiv.style.backgroundColor = gray;

  nav.style.boxShadow = "none";

  theme1.style.backgroundColor = black;
  theme2.style.backgroundColor = cyan;
  theme3.style.backgroundColor = black;
}

function themeStyle3(){
  body.style.backgroundColor = black;  

  for (let i = 0; i < sec.length; i++) {
    sec[i].style.backgroundColor = black ;
  }

  coolNav.style.backgroundColor = cyan;
  coolNav.style.color = light;

  nav.style.backgroundColor = black;

  themeDiv.style.backgroundColor = black;

  nav.style.boxShadow = "0px 0px 8px 4px rgba(41, 139, 174, 0.42)";

  theme1.style.backgroundColor = gray;
  theme2.style.backgroundColor = gray;
  theme3.style.backgroundColor = cyan;
}

