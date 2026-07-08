// ================================
// Urban Bites JavaScript
// ================================

// Sticky Header Background

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.style.background = "#111";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
    }else{
        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";
    }

});


// ================================
// Active Navigation
// ================================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


// ================================
// Scroll Reveal Animation
// ================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});


document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);


window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.classList.add("show-top");

    }else{

        topBtn.classList.remove("show-top");

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ================================
// Button Hover Effect
// ================================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});


// ================================
// Simple Counter Animation
// ================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText="0";

    const updateCounter=()=>{

        const target=+counter.getAttribute("data-target");

        const current=+counter.innerText;

        const increment=target/100;

        if(current<target){

            counter.innerText=Math.ceil(current+increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText=target;

        }

    }

    updateCounter();

});
