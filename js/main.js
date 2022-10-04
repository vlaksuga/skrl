window.addEventListener("DOMContentLoaded", () => {
    appendHeader();
    appendSections(SECTION_LIST);
    appendFooter(FOOTER);
});

function appendHeader() {
    if(TOP_MENU_LIST) { setNav("top-nav", TOP_MENU_LIST); }
    if(SUB_MENU_LIST) { setNav("sub-nav", SUB_MENU_LIST); }
}

function setNav(classname, menus) {
    var nav = document.getElementsByClassName(classname)[0];
    var ul = document.createElement("ul")
    ul.classList.add(classname + "-ul")
    nav.appendChild(ul);
    for(const menu of menus) {
        const menuEle = document.createElement("li");
        menuEle.innerText = menu.title;
        menuEle.classList.add(classname + "-item");
        ul.appendChild(menuEle);
    }   
} 

function appendSections(sections) {
    const main = document.querySelector('main');
    for(const [idx, section] of sections.entries()) {
        const sectionEle = document.createElement("section");
        const bigTitle = document.createElement("p");
        bigTitle.innerText = section.title;
        sectionEle.appendChild(bigTitle);
        sectionEle.style.zIndex = Array.from(sections).length - idx;
        main.appendChild(sectionEle);
        setSectionAction(sectionEle, section, idx);
    }
    main.style.height = 100 * Array.from(sections).length + "vh"
}

function setSectionAction(ele, section, idx) {
    switch(section.action) {
        case SECTION_ACTIONS.FADE_OUT : {
            animateFadeOut(ele, section, idx)
        }
    }
}

function appendFooter(footer) {
    const footerEle = document.createElement("footer");
    footerEle.innerText = "footer";
    document.body.appendChild(footerEle);
}