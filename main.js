// change navbar styles on scroll

/*window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});*/

// Get the navbar element
const navbar = document.querySelector('.navbar');
const scrollBtn=document.getElementById("progress-value")
console.log(scrollBtn)
// Add an event listener to the scroll event
window.addEventListener('scroll', () => {
  // Check if the scroll position is greater than a certain threshold
  if (window.scrollY > 0) {
    // Add the "window-scroll" class to the navbar
    navbar.classList.add('window-scroll');
    scrollBtn.style.visibility="visible"
  } else {
    // Remove the "window-scroll" class from the navbar
    navbar.classList.remove('window-scroll');
      
    scrollBtn.style.visibility="hidden"
  }
});
//for initial render icon hide
document.addEventListener('DOMContentLoaded', function() {
  if (window.scrollY > 0) {
   
  scrollBtn.style.visibility="visible"
  } else {
    // Remove the "window-scroll" class from the navbar
 
      
    scrollBtn.style.visibility="hidden"
  }
});

// show/hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

//  Start of Scroll-to-Top button

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#0077B5 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

function scrolltotop(){
  window.scroll ({
    top:0,
    behavior:"smooth"
  });
}

//Pure counter
new PureCounter();

new PureCounter({
  selector: ".purecounter",

  start: 0,
  end: 100,
  duration: 2,
  delay: 10,
  once: true,
  pulse: false,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  formater: "us-US",
  separator: false,
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Clickable Copyright name
const copyright = document.querySelector(".footer__copyright small span");

copyright.addEventListener("click", function () {
  window.open("https://github.com/aniketsinha2002?tab=repositories", "blank");
});

// Type Writer Effect -
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};
