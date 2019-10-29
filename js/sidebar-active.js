const navs = document.querySelectorAll('.side-highlight');

const toggleActiveClass = (event) => {
    let prevActive = document.querySelectorAll('.active');
    let location = location.hash.substring(1);
    let newActive = document.querySelectorAll(`.${location}`);
    if (prevActive != newActive) {
        prevActive.classList.remove('active');
        newActive.classList.add('active');
    }
    debugger
    // if (prevActive.classList.contains('active')) {
    //     prevActive.classList.remove('active');
    // };
};

const toggleActiveOnScroll = (nav) => {
    nav.addEventListener("scroll", toggleActiveClass());
};

navs.forEach(toggleActiveOnScroll);

export { toggleActiveOnScroll };





const stepContentEls = document.querySelectorAll('.step-content');

if (stepContentEls) {
  let activeStep = 0;
  const actionButtonEls = document.querySelectorAll('.step-action .btn');

  const selectStep = (stepNumber) => {
    const currentActiveEl = stepContentEls[activeStep];
    currentActiveEl.classList.remove('step-content-active');

    const newActiveEl = stepContentEls[stepNumber];
    newActiveEl.classList.add('step-content-active');

    activeStep = stepNumber;
  }

  actionButtonEls.forEach((actionButtonEl) => {
    actionButtonEl.addEventListener("click", (event) => {
      event.preventDefault();

      selectStep(activeStep + 1);
    });
  });
}

