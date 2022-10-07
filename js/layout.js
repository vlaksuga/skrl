class LayoutManager {
    constructor() {

    }

    getLayout(section) {
        const layout = document.createElement("section");
        layout.classList.add(section.layout);

        for (const content of section.contents) {
            const ele = document.createElement(content.tagName);
            ele.classList.add(content.class);
            ele.innerText = content.text;
            layout.appendChild(ele);
        }
        
        layout.style.zIndex = Array.from(section.siblings).length - section.idx;
        return layout;
    }
}