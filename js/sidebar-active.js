const navs = document.querySelectorAll('.side-highlight');

const toggleActiveClass = (event) => {
    let prevActive = document.querySelectorAll('.active');
    let locationScroll = location.hash.substring(1);
    history.pushState({
        id: `${location.hash}`
    }, "Sheila's Profile", window.location.pathname + `${location.hash}`);
    let newActive = document.querySelectorAll(`.${locationScroll}`);    
    if (prevActive !== newActive && prevActive.length > 0 ) {
        prevActive[0].classList.remove('active');
    };
    newActive[0].classList.add('active');
    debugger
};

const toggleActiveOnScroll = (nav) => {
    nav.addEventListener("scroll", toggleActiveClass());
};

navs.forEach(toggleActiveOnScroll);

export { toggleActiveOnScroll };