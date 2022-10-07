window.addEventListener("DOMContentLoaded", () => {
    /* fecth db => rander() */
    fetch("dummy.json")
    .then(res => res.json())
    .then(data => { if(data.head == "OK") render(data)} );
});

function render(data) {
    setTitle(data);
    setHeader(data);
    setMain(data);
}

function setTitle(data) {
    document.title = data.body.title ?? DEFAULT.TITLE;
}

function setHeader(data) {
    const top = data.body.nav.top ?? { isUsing : false };
    const sub = data.body.nav.sub ?? { isUsing : false };
    if(top && top.isUsing) { document.body.appendChild(createNav("top-nav", top)); }
    if(sub && top.isUsing) { document.body.appendChild(createNav("sub-nav", sub)); }
}

function setMain(data) {
    const main = document.createElement('main');
    document.body.appendChild(main);
    const sections = data.body.section;
    const layoutManager = new LayoutManager();
    for(const [idx, section] of sections.entries()) {
        section.idx = idx;
        section.siblings = sections.length;
        const sectionEle = layoutManager.getLayout(section);        
        main.appendChild(sectionEle);
        setSectionAction(sectionEle, section);
    }
    main.style.height = CONFIG.SCROLL_SENCIBILITY * (Array.from(sections).length + 1) + "vh";
}

function createNav(className, obj) {
    var ul = document.createElement("ul")
        ul.classList.add(className + "-ul", "nav-layout-" + obj.layout)
    var nav = document.createElement("nav");
        nav.classList.add(className);
        nav.appendChild(ul);
    for(const item of obj.data) {
        const itemEle = document.createElement("li");
            itemEle.innerText = item.name ?? DEFAULT.NAV_ITEM;
            itemEle.classList.add(className + "-item");
        ul.appendChild(itemEle);
    }
    return nav;
} 


function setSectionAction(ele, obj) {
    switch(obj.event) {
        case "scroll" : { animateByScroll(ele, obj) }
    }
}

function appendFooter(footerInfo) {
    if(footerInfo) {
        var footer = document.createElement("footer");
        document.body.appendChild(footer)
        footer.innerText = "footer";
    }
}