const navContact = document.querySelector('.nav-contact');
const navEmail = document.querySelector('.nav-email');

navContact.addEventListener('click', function () {
    showEmail();
});

function showEmail(){
    navEmail.style.setProperty('visibility', 'visible');
}