
// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

//dark and light mode
const toggle_btn = document.querySelector('#checkbox')



toggle_btn.addEventListener('change',()=>{
    if(toggle_btn.checked){
        document.body.classList.add('light-mode')
        
    }
    else{
        document.body.classList.remove('light-mode')
        
    }
})



// show/hide faq answer 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";

        }
    })
})



// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu 
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

// **********************Adjust scroll height****************************
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault()

        // select each link element by id
        const id = e.currentTarget.getAttribute("href").slice(1)
        let section = document.getElementById(id)

        // calculate heights
        const navHeight = document.querySelector("nav").getBoundingClientRect().height;
        let scrollPosition = section.offsetTop - navHeight;

        // scroll to height
        window.scrollTo({
            left: 0,
            top: scrollPosition
        })
    })
})