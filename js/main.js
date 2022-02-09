
let navBar=document.querySelector(".navbar")
let navBarLinks=document.querySelectorAll(".nav-link")
let logo=document.querySelector(".navbar-brand")

window.addEventListener("scroll",function(){
    if(window.scrollY > 500){
        navBar.classList.add("navbar-bg-scroll");
        logo.classList.add("navbar-logo");
        //  navBarLinks.classList.add("navbar-links");
        navBarLinks.forEach((link)=>{
            link.classList.add("navbar-links")
        })
    }else{
        navBar.classList.remove("navbar-bg-scroll");
        logo.classList.remove("navbar-logo");
        navBarLinks.forEach((link)=>{
            link.classList.remove("navbar-links")
        })
    }
})

// ===================counter

let funFactsSection=document.querySelector(".fun-facts");
let nums =document.querySelectorAll(".fun-facts .counter-box span");
let started=false;

function counter(el){
    let goal=el.dataset.goal;
    let count=setInterval(()=> {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 3000 / goal)
}

window.addEventListener("scroll" ,function(){
    if(window.scrollY>= funFactsSection.offsetTop -200){
        if(!started){
            nums.forEach((span)=>counter(span))
        }
        started=true;
    }
})




// =========================remove placeholder from inputs
let inputs=document.querySelectorAll("form input")
let textEras=document.querySelectorAll("textarea");
// console.log(textEras)

textEras.forEach((text)=>{
    text.addEventListener("focus",function(){
        if(this.placeholder !== " "){
            this.placeholder="";
        }
    })
    text.addEventListener("blur",function(){
        this.placeholder=text.dataset.placeholder;
    })
})

inputs.forEach((input)=>{
    input.addEventListener("focus",function(){
        if(this.placeholder !== " "){
            this.placeholder="";
        }
    })
    input.addEventListener("blur",function(){
        this.placeholder=input.dataset.placeholder;
    })
})



// ==========================Services file

let lis=document.querySelectorAll(".servs ul li");
// console.log(lis)
let boxs=document.querySelectorAll(".servs .box");
// boxs.forEach((box)=>{box.style.display="none"})

lis.forEach((li)=>{
    li.addEventListener("click",function(){

        //  this for make all boxs not visible
        boxs.forEach((box)=>{box.style.display="none"});

// this for make the color of all lis black
        lis.forEach((li)=>{li.style.color="black"});
        
        if(document.querySelector(li.dataset.id).style.display=="none"){

            li.style.color="white"

            document.querySelector(li.dataset.id).style.display="block";

        }else{
    
            document.querySelector(li.dataset.id).style.display="none";
        }
    
    })
})



//===============changing active class on navbar links when scroll On OnePage.html
let links=document.querySelectorAll("#menu li a");
let sections=document.querySelectorAll(".section")



window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach((section)=>{
        let sectionTop=section.offsetTop;
        if(scrollY >= sectionTop -200){
            current=section.getAttribute("id");
        }
    })
    links.forEach((li)=>{
        li.classList.remove("active");
        if(li.classList.contains(current)){
            li.classList.add("active");
        }
    });
});



// ===============from onepage to multipage


linksOfAllPages=document.querySelectorAll(".navbar-nav li a")



linksOfAllPages[linksOfAllPages.length-1].addEventListener("click",function(){
if(linksOfAllPages[linksOfAllPages.length-1].textContent=="one page"){
    linksOfAllPages[linksOfAllPages.length-1].textContent="multi pages";
 
}else{
    linksOfAllPages[linksOfAllPages.length-1].textContent="one page";
    linksOfAllPages[linksOfAllPages.length-1].setAttribute("href","index.html")
}
})
