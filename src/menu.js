import "./menu.css";

const allContent = document.querySelector('#content-menu');

function menu() {

    //navbar
    const navbar = document.createElement('div');
    const menu = document.createElement('button');
    const home = document.createElement('button');
    const contact = document.createElement('button');
    
    // menu.addEventListener("click", function() {
    //     window.location.href = "menu.html";
    // });
    
    home.addEventListener("click", function() {
        window.location.href = "index.html";
    });
    
    contact.addEventListener("click", function() {
        window.location.href = "contact.html"
    });
    
    navbar.className = 'navbar';
    menu.className = 'menu';
    home.className = 'home';
    contact.className = 'contact';
    
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    
    allContent.appendChild(navbar);
    navbar.appendChild(menu);
    navbar.appendChild(home);
    navbar.appendChild(contact);

    //title
    const title = document.createElement('div');

    //horizontal rule
    const hr = document.createElement('hr');

    //menu grid
    const menuGrid = document.createElement('div');

    //first menu item
    const entreeOne = document.createElement('p');
    const descriptionOne = document.createElement('p');
    const priceOne = document.createElement('p')

    //second menu item
    const entreeTwo = document.createElement('p');
    const descriptionTwo = document.createElement('p');
    const priceTwo = document.createElement('p')

    //third menu item
    const entreeThree = document.createElement('p');
    const descriptionThree = document.createElement('p');
    const priceThree = document.createElement('p')


}

document.body.appendChild(menu());

