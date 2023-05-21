
// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


//FAQ

const faqContainer = document.querySelector('.faqs__container');
faqData.forEach((faq)=>{
    faqContainer.innerHTML+=`<article class="faq">
    <div class="faq__icon"><i class="uil uil-plus"></i></div>
    <div class="question__answer">
        <h4>${faq.ques}</h4>
        <p>${faq.ans}</p>
    </div>
    </article>
    `
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


// Number counter animation
function animateCounter(counterElement, targetNumber, duration) {
    const startNumber = parseInt(counterElement.innerText);
    const increment = Math.ceil((targetNumber - startNumber) / (duration / 10)); 
    let currentNumber = startNumber;
    const timer = setInterval(() => {
      currentNumber += increment; 
      counterElement.innerText = currentNumber; 

      // Check if the current number has reached or exceeded the target number
      if ((increment > 0 && currentNumber >= targetNumber) || (increment < 0 && currentNumber <= targetNumber)) {
        clearInterval(timer);
        counterElement.innerText = targetNumber; 
      }
    }, 10); 
    return timer; 
  }
  
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      const counterElement = entry.target;
      const targetNumber = parseInt(counterElement.dataset.target);
      const duration = 2000; 
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



//footer contact us 

const form = document.getElementById('form');
const Einfo=document.getElementById('Einfo');

if(localStorage.getItem('count')==null)
localStorage.setItem('count',0);

form.addEventListener('submit',(e)=>{
    Einfo.style.color="red"
    Einfo.innerText="please wait message sending"
    e.preventDefault();
    var count=localStorage.getItem('count');
    if(count=='4'){
    alert("please wait 5m you already send 3 mail")
      let m=new Date().getMinutes();
      let time= localStorage.getItem('time')
       if( 5+m==time){   
        count=0;
        localStorage.setItem('count',count);
      localStorage.setItem('time',m);
       }
    Einfo.innerText=" "
}
    else{
    emailjs.sendForm('service_0ou379h', 'template_zzjya8j', form)
    .then((result) => {
        Einfo.innerText=" " 
      alert("your message send successfully")
      count++;
      let m=new Date().getMinutes();
      localStorage.setItem('count',count);
      localStorage.setItem('time',m);
    },(error) => {
        Einfo.innerText="error please try few minute later" 
        console.log(error);
    });
    form.reset(); 
    }

});

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

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
