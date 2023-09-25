
document.addEventListener("DOMContentLoaded", ()=> {

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove("active");
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
        })
        }
    })
};

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle("active");
}


ScrollReveal({
     reset: false,
     distance : "80px",
     duration : 2000,
     delay : 200
});
ScrollReveal().reveal('.home-content, .heading ' ,{ origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contacts form ' ,{ origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img' ,{ origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content' ,{ origin: "right" });

  (function() {
    emailjs.init("amNdU8B1Qo7Qcra01");
  })();
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm("service_6hh8j5n", "template_8xc9dn7", this)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          window.location.reload();
        }, function(error) {
          alert('FAILED...', error);
          
        });
    });
  }
})

