function animateFadeOut(ele, section, idx) {
    document.addEventListener("scroll", e => {
        if(window.scrollY >= 160 + idx * ele.clientHeight) {
            console.log(idx + " : Start")
            console.log(ele.clientHeight)
            ele.style.opacity = 1 - ((window.scrollY - 160 + idx * ele.clientHeight) / ele.clientHeight);
        } 
    }) 
}