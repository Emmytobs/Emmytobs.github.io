const listItems = document.querySelectorAll('aside li a');

// Function is called from the html markup
const showActiveMenu = (target) => {
    // console.log(target)
    function clearActiveMenuItems() {
        listItems.forEach(item => {
            item.className = item.className.replace(" active", " ");
        })
    }
    // clearActiveMenuItems();

    function addActiveClass(listItem) {
        const item = document.querySelector(`aside li a#${listItem}`)
        console.log(item);
    }
    switch(target.id) {
        case "about-me": 
            addActiveClass(target.id);
            break;
        case "tech-stack": 
            addActiveClass(target.id);
            break;
        case "contact-me": 
            addActiveClass(target.id);
            break;
    }
    target.className += " active";
}


const header = document.querySelector('header');
const endOfHeaderObserver = new IntersectionObserver((entries, observer) => {
    const sideBar = document.querySelector('aside');
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            sideBar.classList.remove('stickToTheTop');
            return;
        }
        sideBar.classList.add('stickToTheTop');
    })
}, {
    rootMargin: "0px",
    threshold: 0
})

endOfHeaderObserver.observe(header)

const sections = document.querySelectorAll('main section')
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            showActiveMenu(entry.target)
        }
    })
}, {
    rootMargin: "0px",
    threshold: 0.5
})


sections.forEach(section => sectionObserver.observe(section))