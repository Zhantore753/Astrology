let navLinks = document.querySelectorAll('.header__nav-item');
let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.nav');
let pageDoc = window.location.pathname;

navLinks.forEach((item, index) => {
    let link = item.querySelector('a');
    item.classList.remove("header__nav-active");
    if(pageDoc.indexOf(link.getAttribute('href')) > -1){
        item.classList.add("header__nav-active");
    }
    if(pageDoc == '/' && index < 1){
        item.classList.add("header__nav-active");
    }
});

burger.addEventListener('click', ()=>{
    burger.classList.toggle("header__burger-active");
    nav.classList.toggle("nav-active");
});

let logo = document.querySelector('.logo__link');
let headerInner = document.querySelector('.header__inner');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let headerNav = document.querySelector('.header__nav-inner');

if (!(pageDoc.indexOf('index') > -1) && pageDoc !== '/'){
    headerInner.classList.add('header__inner-refactor');
    header.classList.add('header-refactor');
    logo.parentNode.removeChild(logo);
    if(!(pageDoc.indexOf('marathon') > -1)){
        document.body.style.cssText = `
            background: #FBF6F6;
        `;
    }else{
        headerNav.classList.add('header__nav-inner-ref');
        burger.classList.add('header__burger-ref');
        nav.classList.add('nav-ref');
    }
    footer.style.marginTop=0;
}

let accordions = document.querySelectorAll('.faq__card-inner');

accordions.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        let svg = item.querySelector('.faq__svg');
        svg.classList.toggle('faq__svg-active');
        let acc = item.nextElementSibling;
        if (acc.style.maxHeight) {
            acc.classList.remove('faq__card-answer-active');
            acc.style.maxHeight = null;
        } else {
            acc.classList.add('faq__card-answer-active');
            acc.style.maxHeight = acc.scrollHeight + "px";
        } 
    })
});