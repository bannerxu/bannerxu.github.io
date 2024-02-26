window.onload = function clean() {
    const doc = document.querySelector("#app > div.theme-container.no-sidebar > div > div:nth-child(3) > div:nth-child(5) > div.footer-wrapper.footer > span:nth-child(1)")
    let parentElement = doc.parentElement;
    parentElement.removeChild(doc);

};

