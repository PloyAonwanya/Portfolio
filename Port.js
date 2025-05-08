let bu_aboutme = document.getElementById("a_aboutme");
let aboutme = document.getElementById("about_me");
bu_aboutme.addEventListener('click',()=>{
    aboutme.scrollIntoView({
        behavior: "smooth"
    })
})

let bu_edu =document.getElementById("a_education");
let edu = document.getElementById("education");

bu_edu.addEventListener('click',()=>{
    edu.scrollIntoView({
        behavior: "smooth"
    })
})

let bu_skills =document.getElementById("a_skills");
let skills = document.getElementById("skills");

bu_skills.addEventListener('click',()=>{
    skills.scrollIntoView({
        behavior: "smooth"
    })
})


let bu_project =document.getElementById("a_project");
let project = document.getElementById("myproject");

bu_project.addEventListener('click',()=>{
    project.scrollIntoView({
        behavior: "smooth"
    })
})

let bu_contact =document.getElementById("a_contact");
let contact = document.getElementById("contact");

bu_contact.addEventListener('click',()=>{
    contact.scrollIntoView({
        behavior: "smooth"
    })
})




let button_tec = document.getElementById("button_technical");
let button_tools = document.getElementById("button_tools");
let elementA = document.getElementById("area_technical");
let elementB = document.getElementById("area_tools");

// button_tec.addEventListener('click',()=>{
//     elementA.classList.remove('hidden');
//     elementA.classList.add('visible');
// })

// button_tools.addEventListener('click',()=>{ 
//     elementB.classList.remove('hidden');
//     elementB.classList.add('visible');
// })

function showElement(type) {
   
  
    // ซ่อนทุก element ก่อน
    elementA.classList.remove('visible');
    elementA.classList.add('hidden');
  
    elementB.classList.remove('visible');
    elementB.classList.add('hidden');
  
    // แสดงเฉพาะ element ที่ต้องการ
    if (type === 'a') {
      elementA.classList.remove('hidden');
      elementA.classList.add('visible');
    } else if (type === 'b') {
        ;
      elementB.classList.remove('hidden');
      elementB.classList.add('visible');
    } 
}

button_tec.addEventListener('click',()=>showElement('a'));
button_tools.addEventListener('click',()=>showElement('b'));


document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in-section');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // ซ่อนเมื่อเลื่อนออก
        }
      });
    }, {
      threshold: 0.1
    });
  
    faders.forEach(el => {
      observer.observe(el);
    });
  });