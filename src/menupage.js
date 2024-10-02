const contentDiv = document.body.querySelector('#content');


export default function() {
    contentDiv.textContent = "";
    const h1 = document.createElement('h1');
    h1.textContent = "This is the menu page where all the items will be listed with their price.";
    h1.classList.add('look-better')
    contentDiv.appendChild(h1);
}