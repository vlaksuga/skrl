

function animateByScroll(ele, obj) {
    document.addEventListener(obj.event, e => {
        var per = getScrollPercent(obj);
        if(obj.action == ANIMATION.FADE_OUT) {
            animateFadeout(ele, per);
        }
    }) 
}

function animateFadeout(ele, per) {
    ele.style.opacity = 1 - (per / 100)
}

function animateExpand(ele, per) {
    ele.style.transform = `scale(${1 + ((per / 100) * ANIMATION.EXPAND_LARGE)})`; 
}

function animateSkew(ele, per) {
    ele.style.transform = `skew(${per}deg, ${per}deg)`;
}

function animateMoveOutLeft(ele, per) {
    ele.style.transform = `translate(-${per}%, 0)`;
}

function animateMoveOutRight(ele, per) {
    ele.style.transform = `translate(${per}%, 0)`;
}

function getScrollPercent(obj) {
    const scrollPer = Math.round((window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100);
    const sectionPerStart = obj.idx * (100 / obj.siblings);
    const sectionPerEnd = (obj.idx + 1) * (100 / obj.siblings);
    if(sectionPerStart > scrollPer) { return 0; } 
    if(sectionPerEnd < scrollPer) { return 100; }
    return (scrollPer - sectionPerStart) * obj.siblings;
}