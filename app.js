const body = document.querySelector('body');
const navContact = document.querySelector('.nav-contact');
const contactWindow = document.querySelector('.contact-window');
const submitButton = document.querySelector('.submit');
const closeButton = document.querySelector('.close');


let toggle = false;

function openWindow () {
    contactWindow.style.setProperty('visibility','visible');
    contactWindow.style.setProperty('opacity','1');
    toggle = true;
}

function closeWindow () {
    contactWindow.style.setProperty('opacity','0');
    contactWindow.style.setProperty('visibility','collapse');
    toggle = false;
}

navContact.addEventListener('click', function () {
    openWindow();
});

submitButton.addEventListener('click', function () {
    closeWindow();
});

closeButton.addEventListener('click', function () {
    closeWindow();
});


window.onscroll = function() {
    if(document.documentElement.scrollTop > 300) {
        closeWindow();
    }
};
