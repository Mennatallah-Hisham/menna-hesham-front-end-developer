'use strict';
const btnNav = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".header");

const btnNavClose = document.querySelector(".btn-nav--close");

const btnNavOpen= document.querySelector(".btn-nav--open");
const html =document.querySelector("html");
const allLinks =document.querySelectorAll('a:link');


/************* toggle navbar **************/
function toggleNavbar(){

    headerEl.classList.toggle("open-nav");
    btnNavClose.classList.toggle("hide");
    btnNavOpen.classList.toggle("hide");
    html.classList.toggle("overflowY");
}


function closeNavbar(){

    headerEl.classList.remove("open-nav");
    btnNavClose.classList.toggle("hide");
    btnNavOpen.classList.toggle("hide");
    html.classList.remove("overflowY");
}
btnNav.addEventListener("click",toggleNavbar);


/********** smoothscroll */

allLinks.forEach( function(link){
    link.addEventListener('click',(e)=>{

       
        const href=link.getAttribute("href");

        //scroll back to top
        if(href==="#"){
            e.preventDefault();
            window.scrollTo({
                top:0,
                behavior:"smooth",

            })
        }

        //scroll to other links
        if(href !=="#" && href.startsWith("#")){
            e.preventDefault();
          const sectionEl=  document.querySelector(href);
          sectionEl.scrollIntoView(
            {
                behavior:"smooth",
            }
          )
        }

        if(headerEl.classList.contains("open-nav")){
 //close mobile nav
 if(link.classList.contains('nav__link')){
    toggleNavbar();
 }

        }
       
    });

})