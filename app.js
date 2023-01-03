let open = document.querySelector("#open");
let profil = document.querySelector(".profil");
let myProfil = document.querySelector(".my-profil")
console.log(open);
myProfil.addEventListener("click", () => {
    open.classList.toggle("openHead")
    profil.classList.toggle("profil1")
    myProfil.classList.toggle("myProfil1")
  
});


let openOne = document.querySelector("#close1");
let nosee = document.querySelector(".aside-dashbar");
let icon1 = document.querySelector("#openOne")
openOne.addEventListener("click", () => {
    icon1.classList.toggle("openOne1")
    nosee.classList.toggle("nosee1")
});

let openTwo = document.querySelector("#close2");
let asideDashbarTwo = document.querySelector(".aside-dashbarTwo");
let icon2 = document.querySelector("#openTwo")
openTwo.addEventListener("click" , () =>{
    icon2.classList.toggle("openTwo1")
    asideDashbarTwo.classList.toggle("asideDashbarTwo1")
})

let openThree = document.querySelector("#close3");
let asideDashbarThree = document.querySelector(".aside-dashbarThree");
let icon3 = document.querySelector("#openThree")
openThree.addEventListener("click" , () =>{
    icon3.classList.toggle("openThree1")
    asideDashbarThree.classList.toggle("asideDashbarThree1")
})

let openFor = document.querySelector("#close4");
let asideDashbarFor = document.querySelector(".aside-dashbarFor");
let icon4 = document.querySelector("#openFor")
openFor.addEventListener("click" , () =>{
    icon4.classList.toggle("openFor1")
    asideDashbarFor.classList.toggle("asideDashbarFor1")
})


let nav = document.querySelector(".nav");
let fixed = document.querySelector(".fixed");
let section = document.querySelector("section");
let zIndex = document.querySelector(".z-index");

let boolean= false
// nav.addEventListener("click" , () => {

// })
nav.addEventListener("click", () => {
    fixed.classList.toggle("fixed1")
    section.classList.toggle("section1")
    zIndex.classList.toggle("zIndex1")
    nav.classList.toggle("nav1")
});

zIndex.addEventListener("click", () => {
     nav.classList.toggle("nav11")
     zIndex.classList.toggle("zIndex11")
     section.classList.toggle("section11")
     fixed.classList.toggle("fixed11")
});
let desna = document.querySelector(".desna")
let fixed33 = document.querySelector("#fixed33")

desna.addEventListener("click" , () => {
    fixed33.classList.toggle("fixed33")
    desna.classList.toggle("res")
    section.classList.toggle("sectionBlur")
    desna.classList.toggle("desna1")
})
let settingBoard = document.querySelector(".setting-board")
let setting = document.querySelector(".setting-icon")
setting.addEventListener("click" , () => {
    settingBoard.classList.toggle("settingBoard1")
})

let headImg = document.querySelector(".replaceImg")
let replaceImgs = document.querySelectorAll(".bac1")
replaceImgs.forEach(element => {
    element.addEventListener("click",() => {
        headImg.src = element.src 
    })
});