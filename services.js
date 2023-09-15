const logoParent = document.querySelector(".logoPass");
const iconChild = document.getElementById("back-icon");

iconChild.addEventListener("mouseenter", ()=> {
    logoParent.classList.replace("logoPass","logoActive");
})
iconChild.addEventListener("mouseleave", ()=> {
    logoParent.classList.replace("logoActive","logoPass");
})
