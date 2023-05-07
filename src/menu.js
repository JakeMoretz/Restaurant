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
    menuGrid.className = 'menuGrid';

    const menuTitle = document.createElement("p");
    menuTitle.className = "menuTitle";
    menuTitle.textContent = "Menu";
    allContent.appendChild(menuTitle);

    //first menu item
    const containerOne = document.createElement('div')
    const entreeOne = document.createElement('p');
    const descriptionOne = document.createElement('p');
    const priceOne = document.createElement('p')

    entreeOne.textContent = "Margherita Delight";
    descriptionOne.textContent = "A classic Neapolitan-style pizza featuring a thin, crispy crust topped with fresh tomato sauce, mozzarella cheese, and a sprinkle of basil leaves. The simplicity of flavors is sure to transport you to the streets of Naples.";
    priceOne.textContent = "Price: $12.99"

    containerOne.className = "containerOne";
    entreeOne.className = "entreeOne";
    descriptionOne.className = "descriptionOne";
    priceOne.className = "priceOne";

    containerOne.append(entreeOne, descriptionOne, priceOne);
    
    menuGrid.appendChild(containerOne);

    allContent.appendChild(menuGrid);



    //second menu item
    const containerTwo = document.createElement('div');
    const entreeTwo = document.createElement('p');
    const descriptionTwo = document.createElement('p');
    const priceTwo = document.createElement('p')

    entreeTwo.textContent = "Meat Lover's Paradise";
    descriptionTwo.textContent = "Indulge in a carnivorous feast with this pizza loaded with savory delights. Our signature pizza sauce is layered with generous portions of pepperoni, Italian sausage, bacon, and tender ham. Topped off with a blend of melted mozzarella and cheddar cheeses for the ultimate meaty delight.";
    priceTwo.textContent = "Price $14.99";

    containerTwo.className = 'containerTwo';
    entreeTwo.className = 'entreeTwo';
    descriptionTwo.className = 'descriptionTwo';
    priceTwo.className = 'priceTwo';

    containerTwo.append(entreeTwo, descriptionTwo, priceTwo);

    menuGrid.appendChild(containerTwo);

    allContent.appendChild(menuGrid);


    //third menu item
    const containerThree = document.createElement('div');
    const entreeThree = document.createElement('p');
    const descriptionThree = document.createElement('p');
    const priceThree = document.createElement('p')

    entreeThree.textContent = "Mediterranean Veggie Delight"
    descriptionThree.textContent = "For our vegetarian friends, this pizza is a burst of Mediterranean flavors. A fluffy crust topped with a zesty tomato sauce, vibrant bell peppers, sun-dried tomatoes, black olives, red onions, and crumbled feta cheese. Every bite is a savory journey through the sun-soaked Mediterranean coast."
    priceThree.textContent = "Price: $13.99"

    containerThree.className = "containerThree";
    entreeThree.className = "entreeThree";
    descriptionThree.className = "descriptionThree";
    priceThree.className = "priceThree";

    containerThree.append(entreeThree, descriptionThree, priceThree);

    menuGrid.appendChild(containerThree);

    allContent.appendChild(menuGrid);

    //footer

    const bottomSection = document.createElement('div');
    const developed = document.createElement('p');
    const name = document.createElement('a');

    bottomSection.className = 'bottomSection';
    developed.className = 'developed';
    name.className = 'Name';

    developed.textContent = 'Developed by:';
    name.href = 'https://www.linkedin.com/in/jake-moretz-450668255/';
    name.textContent = 'Jake Moretz';

    bottomSection.append(developed, name);

    allContent.appendChild(bottomSection);




}

document.body.appendChild(menu());

