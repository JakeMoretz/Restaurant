import './contact.css';
import './contact2.css';

const allContent = document.querySelector('#contact-content');

function contact() {
    //navbar
    const navbar = document.createElement('div');
    const menu = document.createElement('button');
    const home = document.createElement('button');
    const contact = document.createElement('button');

    menu.addEventListener('click', function () {
        window.location.href = 'menu.html';
    });

    home.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // contact.addEventListener('click', function () {
    //     window.location.href = 'contact.html';
    // });

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

    //contact us
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    contactTitle.className = 'contactTitle';
    allContent.appendChild(contactTitle);

    //statement
    const statementDiv = document.createElement('div');
    const statement = document.createElement('p');
    statementDiv.className = 'statementDiv';
    statement.className = 'statement';
    statement.textContent =
        "We value your feedback and inquiries. Please feel free to reach out to us using the contact details provided below. We'll be happy to assist you!";

    statementDiv.appendChild(statement);
    allContent.appendChild(statementDiv);

    //contact info
    const contactInfo = document.createElement('p');
    contactInfo.className = 'contactInfo';
    contactInfo.textContent = 'Contact Information';
    allContent.appendChild(contactInfo);

    //email
    const emailDiv = document.createElement('div');
    const emailPara = document.createElement('p');
    const email = document.createElement('a');

    emailDiv.className = 'emailDiv';
    emailPara.className = 'emailPara';
    email.className = 'email';

    emailPara.textContent = 'Email:';
    email.href = '';
    email.textContent = 'info@slicesocietypizza.com';

    emailDiv.append(emailPara, email);

    allContent.appendChild(emailDiv);

    //phone
    const phoneDiv = document.createElement('div');
    const phone = document.createElement('p');
    const phoneNumber = document.createElement('p');

    phoneDiv.className = 'phoneDiv';
    phone.className = 'phone';
    phoneNumber.className = 'phoneNumber';

    phone.textContent = 'Phone:';
    phoneNumber.textContent = '+1-555-123-4567';

    phoneDiv.append(phone, phoneNumber);
    allContent.appendChild(phoneDiv);

    //mailing address
    const addressTitle = document.createElement('p');
    addressTitle.className = 'addressTitle';
    addressTitle.textContent = 'Mailing Address';
    allContent.appendChild(addressTitle);

    const bizName = document.createElement('p');
    bizName.textContent = 'Slice Society Pizza';
    bizName.className = 'bizName';
    allContent.appendChild(bizName);

    const streetName = document.createElement('p');
    streetName.textContent = '123 Main Street';
    streetName.className = 'streetName';
    allContent.appendChild(streetName);

    const city = document.createElement('p');
    city.textContent = 'City, State, ZIP';
    city.className = 'city';
    allContent.appendChild(city);

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

document.body.appendChild(contact());
