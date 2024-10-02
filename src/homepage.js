const contentDiv = document.body.querySelector('#content');

function renderHomePage() {
    const welcomeContentDiv = document.createElement('div');
    welcomeContentDiv.classList.add('welcome-content');

    const h1 = document.createElement('h1');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');

    h1.textContent = 'Welcome to Bistrox';
    paragraph.textContent = 'Come and eat well with our delicious & healthy foods.';
    button.textContent = 'Reservation';

    welcomeContentDiv.append(h1, paragraph, button);
    contentDiv.appendChild(welcomeContentDiv);
}

export {renderHomePage};