const formulario = document.forms['formulario'];
const formGetPass = document.forms['form_get_pass'];
const states = { numDoc : false, pass : false, numDocRec : false };
const viewPass = document.getElementById('viewPass');

const expresiones = {
    numDoc : /^[a-zA-Z0-9]{8,16}$/,
    numDocRec : /^[a-zA-Z0-9]{8,16}$/,
    pass : /^.{8,20}$/
}
const focusIn = (e) => {
    if (e.target.parentNode.id) {
        let id = e.target.parentNode.id;
        document.querySelector(`#${id} i`).style.color = 'green'; 
        e.target.style.boxShadow = '0px 0px 12px 10px #00ff2a60';
        setTimeout(() => { e.target.style.boxShadow = 'none'; }, 300);
    }
}
const focusOut = (e) => {
    if (e.target.parentNode.id) {
        let id = e.target.parentNode.id;
        if (e.target.form.id === 'form_get_pass') {
            return document.querySelector(`#${id} i`).style.color = 'black';
        }  
        return document.querySelector(`#${id} i`).style.color = 'white';        
    }
}
const inputEvent = (e) => {
    let name = e.target.name;
    let valor = e.target.value;
    
    const options = {
        numDoc : () => validarData(name, valor),
        numDocRec : () => validarData(name, valor),
        pass : () => validarData(name, valor)
    }
    if (options[name]) { options[name](); }
}
const submitForm = (e) => {
    if (states.numDoc && states.pass) { alert('Bienvenido'); } 
    else if (e.target.id === 'form_get_pass') {
        e.preventDefault();
        if (states.numDocRec) { alert('Enviado'); } 
        else {
            document.getElementById('form_error_rec').style.display = 'block';
            document.getElementById('form_error_rec').style.boxShadow = '0px 0px 10px 5px red';
            setTimeout(() => {
                document.getElementById('form_error_rec').style.boxShadow = 'none';
            }, 300);
            document.getElementById('numDocRec').focus();
        }
    } else {
        e.preventDefault();
        document.getElementById('form_error').style.display = 'block';
        document.getElementById('form_error').style.boxShadow = '0px 0px 10px 5px red';
        setTimeout(() => {
            document.getElementById('form_error').style.boxShadow = 'none';
        }, 300);
        !states.numDoc ? document.getElementById('numDoc').focus() :
            document.getElementById('pass').focus();
    }
}
formulario.addEventListener('focusin', focusIn);
formulario.addEventListener('focusout', focusOut);
formulario.addEventListener('input', inputEvent);
formulario.addEventListener('submit', submitForm);

formGetPass.addEventListener('focusin', focusIn);
formGetPass.addEventListener('focusout', focusOut);
formGetPass.addEventListener('input', inputEvent);
formGetPass.addEventListener('submit', submitForm);

viewPass.addEventListener('mousedown', e => {
    let id = e.target.parentNode.id;
    document.querySelector(`#${id} input`).type = 'text';
    setTimeout(() => {
        let id = e.target.parentNode.id;
        document.querySelector(`#${id} input`).type = 'password';
    }, 3000);
});
viewPass.addEventListener('mouseup', e => {
    let id = e.target.parentNode.id;
    document.querySelector(`#${id} input`).type = 'password';
    document.querySelector(`#${id} input`).focus();
});
const validarData = (name, valor) => {
    console.log(name)
    if (expresiones[name].test(valor)) {
        document.getElementById(`group_${name}`).classList.remove('form_incorrect');
        document.getElementById(`group_${name}`).classList.add('form_correct');
        states[name] = true;
    } else {
        document.getElementById(`group_${name}`).classList.remove('form_correct');
        document.getElementById(`group_${name}`).classList.add('form_incorrect');
        states[name] = false;
    }    
}
function logingPage() {
    let sectionLogin = document.getElementById('sectionLogin');
    let sectionWelcome = document.getElementById('sectionWelcome');
    let content = document.getElementById('register');

    sectionWelcome.style.opacity = '0';
    sectionWelcome.style.height = '0';
    sectionWelcome.style.padding = '0';
    sectionLogin.style.display = 'grid';
    setTimeout(() => { 
        sectionWelcome.style.display = 'none'; 
        content.style.backgroundColor = 'rgba(0, 0, 0, .4)';
    }, 2000);
}
function openModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.add('modal_show');
}
function closeModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.remove('modal_show');
}
