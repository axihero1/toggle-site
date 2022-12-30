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
// let bac1 = document.querySelector("#bac1")
// let bac2 = document.querySelector("#bac2")
// let bac3 = document.querySelector("#bac3")
// let bac4 = document.querySelector("#bac4")
// bac1.addEventListener("click" , () => {
//     fixed.style.backgroundImage = "url(`./img`)"
// })

// let closeIcon = document.createElement("h1")
// let iconBox = document.querySelector(".icon-box")
// closeIcon.setAttribute("class", "fa-solid fa-bars")
// closeIcon.innerHTML="salom"
// iconBox.appendChild("closeIcon")


// if (fixed.style.width == `20%`) {
//     fixed.style.cssText = `width: 5% ; `;
//     section.style.cssText = `width: 95%`;
//     nav.style.cssText = `z-index:1; backgroundColor: red;`;
//     zIndex.style.cssText = `z-index:2;`;
//   } else {
//     fixed.style.cssText = `width: 20% ;`;
//     section.style.cssText = `width: 80%;`;
// nav.style.cssText = `z-index: 2;`;
//   zIndex.style.cssText = `z-index: 1;`;
//   fixed.style.cssText = `width: 20% ;`;
//   section.style.cssText = `width: 80%;`;
//   }


