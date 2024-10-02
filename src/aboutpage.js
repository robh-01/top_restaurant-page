const contentDiv = document.body.querySelector('#content');


export function pageRender() {
    contentDiv.textContent = "";
    const h1 = document.createElement('h1');
    h1.textContent = "This is the page where the details of the restaurant will be put in.";
    h1.classList.add('look-better')
    contentDiv.appendChild(h1);
}

export {pageRender as default};
