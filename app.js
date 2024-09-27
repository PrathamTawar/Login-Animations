const main = document.getElementsByTagName('main')[0];
const loginSectionsContainer = document.querySelector('.loginSectionsContainer');
const footer = document.getElementsByTagName('footer')[0];
const bg = document.querySelector('.bg');
const loginFromContainer =document.querySelector('.loginFormContainer');
const loginForm = document.querySelector('.loginForm');
const btn = document.querySelector('.loginBtn');
const fadeables = document.querySelectorAll('.fadeable');
const inputs = document.querySelectorAll('.inpts');

window.onload = () => {
    setTimeout(() => {
        loginSectionsContainer.style.animation = 'appearRight var(--time-slow) both';
        loginSectionsContainer.style.display = 'flex';
    },700)
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    loginFromContainer.style.animation = 'fadeDown var(--time-fast) both';
    footer.style.animation = 'fadeDown var(--time-fast) both';

    bg.style.animation = 'slideRight var(--time-slow) both';
    // loginSectionsContainer.style.animation = 'slideLeft var(--time) both';

    fadeables.forEach((fadeable) => {
        fadeable.style.animation = '';
        fadeable.style.animation = 'fadeLeft var(--time-fast) both';
    })

})

function notEmpty()
{
    if( inputs[0].value !== '' && inputs[1].value !== '')
    {
        btn.classList.add('active');
    }
    else
    {
        btn.classList.remove('active');
    }
}


inputs.forEach((input) => {
    input.addEventListener('input', () => {
        notEmpty()
    })
})
