const navs = document.querySelectorAll('.side-highlight');

const activateClass = (event) => {
    const currentScroll = location.hash.substring(1);
    const currentActive = document.querySelectorAll('active');
    const newActive = document.querySelectorAll(`.${currentScroll}`);
    
    if (!!currentActive) {
        currentActive.classList.remove('active');
        history.replaceState({id: location.hash}, "Sheila's Profile", window.location.pathname + `${location.hash}`);
        newActive[0].classList.add('active');
    };
    history.replaceState({id: location.hash}, "Sheila's Profile", window.location.pathname + `${location.hash}`);
    newActive[0].classList.add('active');
    debugger
};

const toggleActiveOnClick = (nav) => {
    nav.addEventListener('click', activateClass());
};

navs.forEach(toggleActiveOnClick);

const toggleActiveOnScroll = (e) => {
    document.addEventListener('scroll', activateClass());
};

navs.forEach(toggleActiveOnScroll);

export { toggleActiveOnClick, toggleActiveOnScroll };
