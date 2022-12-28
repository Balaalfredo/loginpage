const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBox = document.querySelector('.login-box');
const account = document.querySelector('.account');


account.addEventListener('mouseenter', () => {
    account.style.width = '90%'; account.style.transition = '1.2s';
    account.innerHTML = 'create&nbsp;a&nbsp;account';
})

account.addEventListener('mouseleave', () => {
    account.style.width = '8%'; account.style.transition = '1.2s';
    account.innerText = 'c';
})

loginBox.addEventListener('mouseenter', () => {
    loginBox.style.width = '30%';

    loginBox.innerHTML = 'LOGIN'; loginBox.style.transition = '1.2s';
})

loginBox.addEventListener('mouseleave', () => {
    loginBox.style.padding = '8px 15px';
    loginBox.style.width = '10%';
    loginBox.style.transition = '1.2s';
    loginBox.innerHTML = 'L';
})




password.addEventListener('focus', () => {
    password.style.width = '80%';
    password.style.borderRadius = '15px';
})

password.addEventListener('blur', () => {
    password.style.width = '24%';
    password.style.borderRadius = '20%';
})





email.addEventListener('focus', () => {
    email.style.width = '80%';
    email.style.borderRadius = '15px';
})

email.addEventListener('blur', () => {
    email.style.width = '14%';
    email.style.borderRadius = '20%';
})