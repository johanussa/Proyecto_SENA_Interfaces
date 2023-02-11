'use strict'
const formulario = document.forms['formulario'];
const expresiones = {
    name: /^[a-zA-ZÁ-ÿ\s]{3,40}$/, // Letras, espacios, acentos
    lastName: /^[a-zA-ZÁ-ÿ\s]{3,40}$/, // Letras, espacios, acentos
    numDoc: /^[a-zA-Z0-9]{8,20}$/,
    email: /^\w+\@(misena|soy\.sena)\.edu\.co$/, 
    password: /^.{8,20}$/     // 8 a 20 caracteres
}
const states = {
    name: false,
    lastName: false,
    numDoc: false,
    email: false,
    password: false,
    password2: false
}
formulario.addEventListener('input', (e) => {
    let name = e.target.name;
    let valor = e.target.value;

    const options = {
        name: () => validarData('name', valor),
        lastName: () => validarData('lastName', valor),
        numDoc: () => validarData('numDoc', valor),
        email: () => validarData('email', valor),
        password: () => { 
            validarData('password', valor); 
            confirmPass(); 
        },
        password2: () => confirmPass()
    }
    if (options[name]) { options[name](); }
});
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (Object.values(states).some(e => e === false)) {
        let campo = Object.entries(states).find(e => e[1] === false)[0];
        document.getElementById(campo).focus();
        document.querySelector('#message_error').style.display = 'block';
        document.querySelector('#message_error').style.boxShadow = '0px 0px 10px 5px red';

        setTimeout(() => { 
            document.querySelector('#message_error').style.boxShadow = 'none';
        }, 500);
    } else {
        document.querySelector('#message_error').style.display = 'none';
        document.querySelector('#form_message_ok').style.display = 'block';   
        document.querySelectorAll('.form_correct').forEach(e => {
            e.classList.remove('form_correct');
        });        
        formulario.reset();   
        setTimeout(() => { 
            document.querySelector('#form_message_ok').style.display = 'none';  
        }, 4000); 
    }
});
const validarData = (name, valor) => {
    if (expresiones[name].test(valor)) {
        applyChanges(name, true);
        states[name] = true;
    } else {
        applyChanges(name, false);
        states[name] = false;
    }
}
const applyChanges = (name, bool) => {
    if (bool) {
        document.getElementById(`group_${name}`).classList.remove('form_incorrect');
        document.getElementById(`group_${name}`).classList.add('form_correct');
        document.querySelector(`#group_${name} i`).classList.remove('bi-x-circle-fill');
        document.querySelector(`#group_${name} i`).classList.add('bi-check-circle-fill');
        document.querySelector(`#group_${name} p`).style.display = 'none';
    } else {
        document.getElementById(`group_${name}`).classList.remove('form_correct');
        document.getElementById(`group_${name}`).classList.add('form_incorrect');
        document.querySelector(`#group_${name} i`).classList.remove('bi-check-circle-fill');
        document.querySelector(`#group_${name} i`).classList.add('bi-x-circle-fill');
        document.querySelector(`#group_${name} p`).style.display = 'block';
    }
}
const confirmPass = () => {
    let pass = document.getElementById('password').value;
    let pass2 = document.getElementById('password2').value;
    
    if (states.password && pass2) {
        if (pass === pass2) { 
            applyChanges('password2', true); 
            states.password2 = true; 
        } else { 
            applyChanges('password2', false); 
            states.password2 = false; 
        }
    }
}
function viewPass(e) {
    let id = e.target.parentNode.id;
    document.querySelector(`#${id} input`).type = 'text';    
    setTimeout(() => {
        document.querySelector(`#${id} input`).type = 'password';
    }, 3000);
}
function hiddenPass(e) {
    let id = e.target.parentNode.id;
    document.querySelector(`#${id} input`).type = 'password';
    document.querySelector(`#${id} input`).focus();
}