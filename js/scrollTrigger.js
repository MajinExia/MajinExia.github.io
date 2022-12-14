// scroll animation javascript taken from https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/
// js triggers based on screensize from https://www.satollo.net/execute-conditional-javascript-by-screen-size

const lazyList = document.querySelectorAll(".lazy");

console.log (lazyList.toString());
for (var i = 0; i < lazyList.length; i++){
    lazyList[i].classList.remove('js-off');
}

var lazyload_instance=new LazyLoad({});

var w = document.documentElement.clientWidth || window.innerWidth;
if (w >= 768) {

    const container = document.querySelectorAll(".container");

    console.log (container.toString());
    for (var i = 0; i < container.length; i++){
        container[i].classList.remove('active');
    }
    

    function scrollTrigger(selector, options={}) {
        let els = document.querySelectorAll(selector)
        els = Array.from(els)
        els.forEach(el => {
            addObserver(el, options)
        })
    }

    function addObserver(el, options){
        if(!('IntersectionObserver' in window)){
            if(options.cb){
                options.cb(el)
            }else{
                entry.target.classList.add('active')
            }
            return
        }
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(options.cb){
                        options.cb(el)
                    }else{
                        entry.target.classList.add('active')
                    }
                    observer.unobserve(entry.target)
                }
            })
        }, options)
        observer.observe(el)
    }

    scrollTrigger('.scroll-reveal', {
        rootMargin: '-200px',
    })
}