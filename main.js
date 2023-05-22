// alert("Welcome !!");

// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



// show/hide faq answer 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";

        }
    })
})


// New Code 
// show/hide nav menu
const burgerIcon = document.querySelector('#open-menu-btn');
const navItems = document.querySelector('.nav_items');
const navMenu = document.querySelector('.nav_menu');
const container = document.querySelector('.container');
burgerIcon.classList.add('uil-bars');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('uil-bars');
    if (navItems.style.display === 'flex') {
        navItems.style.display = 'none';
        container.style.paddingTop = '6rem';
    } else {
        navItems.style.display = 'flex';
        container.style.paddingTop = '12rem';
    }
    burgerIcon.classList.toggle('uil-multiply');
});

document.body.addEventListener('scroll', () => {
    if (document.body.scrollTop <= 0) {
        console.log('Scrolling Down')
    } else {
        burgerIcon.classList.remove('uil-multiply');
        burgerIcon.classList.add('uil-bars');
        navItems.style.display = 'none';
    }
})



// // Old Code
// const menu = document.querySelector(".nav__menu");
// const menuBtn = document.querySelector("#open-menu-btn");
// const closeBtn = document.querySelector("#close-menu-btn");


// menuBtn.addEventListener('click', () => {
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block";
//     menuBtn.style.display = "none";
// })


// // close nav menu 
// const closeNav = () => {
//     menu.style.display = "none";
//     closeBtn.style.display = "none";
//     menuBtn.style.display = "inline-block";
// }

// closeBtn.addEventListener('click', closeNav)