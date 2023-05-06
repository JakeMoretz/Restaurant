import './index.css';
// import './style2.css';

const allContent = document.querySelector('#content');

function homePage() {
    //navbar
    const navbar = document.createElement('div');
    const menu = document.createElement('button');
    const home = document.createElement('button');
    const contact = document.createElement('button');

    menu.addEventListener("click", function() {
        window.location.href = "menu.html";
    });

    // home.addEventListener("click", function() {
    //     window.location.href = "index.html";
    // });

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

    // title/info section
    const section = document.createElement('div');
    const info = document.createElement('div');
    const title = document.createElement('h1');
    const para = document.createElement('p');
    const line = document.createElement('hr');

    section.className = 'section';
    info.className = 'info';
    title.className = 'title';
    para.className = 'para';
    line.className = 'line';

    title.textContent = 'Slice Society';
    para.textContent =
        '"Slice Society" is a modern and fun pizzeria that caters to pizza lovers of all ages. The restaurant has a cozy and welcoming atmosphere, with comfortable seating and a bright and colorful decor. The menu features a variety of pizzas, including classic toppings like pepperoni and sausage as well as more unique options like goat cheese and arugula or BBQ chicken. The restaurant also offers salads, appetizers, and desserts, as well as a selection of beer and wine to enjoy with your meal. The staff at Slice Society are friendly and knowledgeable about the menu, and are always happy to help customers find the perfect pizza to suit their taste. Whether you are looking for a quick lunch or a fun night out with friends, Slice Society is the perfect spot for pizza lovers.';

    
    section.appendChild(info);
    info.append(title, para);
    allContent.appendChild(section);

      //footer

    //   const bottomSection = document.createElement('div');
    //   const developed = document.createElement('p');
    //   const name = document.createElement('a')
  
    //   bottomSection.className = "bottomSection";
    //   developed.className = "developed";
    //   name.className = "Name";
  
    //   developed.textContent = "Developed by:";
    //   name.href = 'https://www.linkedin.com/in/jake-moretz-450668255/';
    //   name.textContent = 'Jake Moretz';
  
    //   bottomSection.append(developed, name);

    //   allContent.appendChild(bottomSection);
}

document.body.appendChild(homePage());

