//courses array

const courses=[

    {   
        "id":1,
        "name":"Data Science",
        "image":"./images/3.jpg",
        "subheading":"Foundations using R Johns Hopkins University",
        "info":"Launch Your Career in Data Science. A ten-course introduction to data science, developed and taught by leading professors.",
        "link":"https://www.coursera.org/specializations/data-science-foundations-r"
    },
    
    {
        "id":2,
        "name":"IBM Data Science",
        "image":"./images/3.jpg",
        "subheading":"IBM Skills Network",
        "info":"   Kickstart your career in data science & ML. Build data science skills, learn Python & SQL, analyze & visualize data, build machine learning models. No degree or prior experience required.",
        "link":"https://www.coursera.org/professional-certificates/ibm-data-science"
        
    },
    {
        "id":3,
        "name":"Deep Learning Specification",
        "image":"./images/3.jpg",
        "subheading":"Hawdra University",
        "info":"Become a Machine Learning expert. Master the fundamentals of deep learning and break into AI. Recently updated with cutting-edge techniques!",
        "link":"https://www.coursera.org/specializations/deep-learning" 
        
    },
    {
        "id":4,
        "name":"IBM Data Science",
        "image":"./images/3.jpg",
        "subheading":"IBM Skills Network",
        "info":"   Kickstart your career in data science & ML. Build data science skills, learn Python & SQL, analyze & visualize data, build machine learning models. No degree or prior experience required.",
        "link":"https://www.coursera.org/professional-certificates/ibm-data-science"

    },
    

]


//courses div in index.html

var courseDiv=document.querySelector(".courses__container")
courseDiv.innerHTML=""
courses.map((course)=>{

    courseDiv.innerHTML+=`
    <article key=${course.id} class="course">
    <div class="course__image">
        <img src="${course.image}">
    </div>
    <div class="course__info">
        <h4>${course.name}</h4>
        <p>
        
        ${course.subheading} <br/>
        ${course.info}
        </p>
        <a href="${course.link}" class="btn btn-primary">Learn More</a>
    </div>
    </article>`
}
)
