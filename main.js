alert("Welcome !!");

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


//Number counter animation
function animateCounter(counterElement, targetNumber, duration) {
    const startNumber = parseInt(counterElement.innerText);
    let increment = Math.ceil((targetNumber - startNumber) / (duration / 100)); 
    let d_interval= 60;

    console.log(targetNumber)

    if(targetNumber<100){
      increment=1;
      d_interval= 115;
    }

    console.log(increment);


    let currentNumber = startNumber;
    const timer = setInterval(() => {
      currentNumber += increment; 
      counterElement.innerText = currentNumber+"+"; 

      // Check if the current number has reached or exceeded the target number
      if ((increment > 0 && currentNumber >= targetNumber) || (increment < 0 && currentNumber <= targetNumber)) {
        clearInterval(timer);
        counterElement.innerText = targetNumber+"+"; 
      }
    }, d_interval); 
    return timer; 
  }

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      const counterElement = entry.target;
      const targetNumber = parseInt(counterElement.dataset.target);
      const duration = 5000; 
      if (entry.isIntersecting) {
        counterElement.style.visibility = 'visible'; 
        animateCounter(counterElement, targetNumber, duration);
        observer.unobserve(counterElement); 
      } else {
        counterElement.style.visibility = 'hidden';
      }
    });
  }

  //using IntersectionObserver to triggrt animation once element is visible on screen
  const observer = new IntersectionObserver(handleIntersection);
  const counters = document.querySelectorAll('.num_count');   
  counters.forEach((counterElement) => {
    observer.observe(counterElement); // Observe each counter element
  });