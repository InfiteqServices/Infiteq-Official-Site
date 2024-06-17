
// navbar scrolling effect

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



// navbar responsiveness

let menuList = document.getElementById("menuList");
let menuIcon = document.getElementById("menuIcon");

menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "1400px";
        menuIcon.children[0].style.display = "none"; // Hide menu icon
        menuIcon.children[1].style.display = "block"; // Show cross icon
    } else {
        menuList.style.maxHeight = "0px";
        menuIcon.children[0].style.display = "block"; // Show menu icon
        menuIcon.children[1].style.display = "none"; // Hide cross icon
    }
}


// Close menu when a link is clicked
let menuLinks = document.querySelectorAll("#menuList a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggleMenu();
    });
});


// Typing effect 

const dynamicText = document.querySelector("h1 span");

const words = ["Solutions" , "Consultancy"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");



    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 200);
    }else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100);
    }else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);

    }

}

typeEffect();