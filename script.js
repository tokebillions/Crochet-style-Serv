const hamburger = document.querySelector(".hamburger");
const navbarContainer = document.querySelector(".navbar-container");
const container = document.querySelector(".container")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navbarContainer.classList.toggle("active");

   
})

document.querySelectorAll(".navbar-container").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navbarContainer.classList.remove("active");

}))

