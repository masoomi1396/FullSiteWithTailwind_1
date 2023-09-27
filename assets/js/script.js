const navbar = document.getElementsByTagName('header')[0];

window.onscroll=()=>{
    if(window.scrollY>100)
    {
        navbar.classList.add("bg-color-primary-dark")
        navbar.classList.add("border-b")
        navbar.classList.add("border-color-gray")
    }
    else{
        navbar.classList.remove("bg-color-primary-dark")
        navbar.classList.remove("border-b")
        navbar.classList.remove("border-color-gray")
    }
}
//navbar

const hamburgerMenuIcon = document.getElementById('hamburger');
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinkMenu = document.querySelectorAll("#mobileMenu>ul>li")

hamburgerMenuIcon.addEventListener("click", () => {
    hamburgerMenuIcon.firstElementChild.classList.toggle('fa-xmark');
    mobileMenu.classList.toggle('hidden');
})
mobileLinkMenu.forEach(link => {
    link.addEventListener("click", () => {
        hamburgerMenuIcon.firstElementChild.classList.toggle('fa-xmark');
        mobileMenu.classList.toggle('hidden');
    })
})
// Mobile Menu

const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

const showReview = () => {
    //forEach not working?
    for (let i = 0; i < userPics.length; i++) {
        userPics[i].addEventListener("click", () => {
            for (const userPic of userPics) {
                userPic.classList.remove("active-pic");

            }
            for (const userText of userTexts) {
                userText.classList.remove("active-text");
            }
            userPics[i].classList.add("active-pic");
            userTexts[i].classList.add("active-text");
        })
    }
}
//testimoial

const toggleButton = document.getElementById('toggleButton');
const cardsFront = document.getElementsByClassName('front');
const cardsBack = document.getElementsByClassName('back');

toggleButton.addEventListener("change", () => {
    //ForEach doesnt work
    for (let i = 0; i < cardsFront.length; i++) {
        cardsFront[i].classList.toggle('-rotate-y-180');
        cardsBack[i].classList.toggle('rotate-y-180');
    }

})

//pricing