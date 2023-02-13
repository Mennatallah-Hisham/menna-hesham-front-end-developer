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

btnNav.addEventListener("click",toggleNavbar);


/********** smoothscroll */
allLinks.forEach( function(link){
    link.addEventListener('click',(e)=>{

        e.preventDefault();
        const href=link.getAttribute("href");

        //scroll back to top
        if(href==="#"){
            window.scrollTo({
                top:0,
                behavior:"smooth",

            })
        }

        //scroll to other links
        if(href !=="#" && href.startsWith("#")){
          const sectionEl=  document.querySelector(href);
          sectionEl.scrollIntoView(
            {
                behavior:"smooth",
            }
          )
        }

        //close mobile nav
        if(link.classList.contains('nav__link') && headerEl.contains("open-nav")){
           toggleNavbar();
        }

    });

})