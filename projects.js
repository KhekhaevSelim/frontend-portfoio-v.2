document.addEventListener("DOMContentLoaded", ()=> {
    //доступ к дом элементам
const projectsContainer = document.querySelector(".imagesContainer");
const projectsArray = Array.from(projectsContainer.children);
const arrowNext1 = document.querySelector(".arrowNext1");
const arrowNext2 = document.querySelector(".arrowNext2");
const arrowBack2 = document.querySelector(".arrowBack2");
const arrowBack3 = document.querySelector(".arrowBack3");
    // работа с дом 
projectsArray.forEach((i,index)=> {
    if(index !== 0){
        i.style.display = "none"
    }
}) 

arrowNext1.addEventListener("click", ()=> {
    projectsArray.forEach((i,index)=> {
        if(index !== 1){
            i.style.display = "none"
        } else {
            i.style.display = "flex"
        }
    }) 
})
arrowNext2.addEventListener("click", ()=> {
    projectsArray.forEach((i,index)=> {
        if(index !== 2){
            i.style.display = "none"
        } else {
            i.style.display = "flex"
        }
    }) 
})

arrowBack2.addEventListener("click", ()=> {
    projectsArray.forEach((i,index)=> {
        if(index !== 0){
            i.style.display = "none"
        } else {
            i.style.display = "flex"
        }
    }) 
})

arrowBack3.addEventListener("click", ()=> {
    projectsArray.forEach((i,index)=> {
        if(index !== 1){
            i.style.display = "none"
        } else {
            i.style.display = "flex"
        }
    }) 
})

})


