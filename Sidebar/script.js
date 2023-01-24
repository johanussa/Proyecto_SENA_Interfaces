const toggle = document.querySelector('.toggle'),
    sidebar = document.querySelector('.sidebar'),
    time = document.querySelector('.time').children;

const activeSide = (value) => {  
    if (value === 1 && sidebar.classList.length === 1)  return 0;    
    
    sidebar.classList.toggle('close');
    toggle.classList.toggle('bi-caret-left-fill');
    toggle.classList.toggle('bi-list-ul');
}
toggle.addEventListener('click', activeSide);

time[0].innerHTML = Intl.DateTimeFormat('CO', { timeStyle: 'short' }).format();
time[1].innerHTML = Intl.DateTimeFormat('CO', { dateStyle: 'full' }).format();
time[2].innerHTML = Intl.DateTimeFormat('CO', { dateStyle: 'full' }).format();

setInterval(() => {
    time[0].innerHTML = Intl.DateTimeFormat('CO', { timeStyle: 'short' }).format();
}, 20000);

function select(e) {
    let elem = document.querySelectorAll('.menu_links .nav_link');
    elem.forEach(e => e.classList.remove('selected'));

    let options = {
        1 : () => elem[0].classList.toggle('selected'),
        2 : () => elem[1].classList.toggle('selected'),
        3 : () => elem[2].classList.toggle('selected')
    }
    if (options[e]) options[e]();
}