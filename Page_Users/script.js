const search = document.getElementById('search');
const rolBtn = document.getElementById('rol');
const stateBtn = document.getElementById('estado');

let rol = 1;
let state = 1;
let rolData = [];
let stateData = [];

const data = [
    {
        Id: '6897645',
        Nombre: 'Johan Sebastian',
        Apellido: 'Ussa Rubio',
        Email: 'johanu@misena.com',
        Rol: 'Administrador',
        Estado: 'Inactivo'
    },
    {
        Id: '8901234',
        Nombre: 'Jhon Alexander',
        Apellido: 'Umbasia Ussa',
        Email: 'jhon12@misena.com',
        Rol: 'Aprendiz',
        Estado: 'Inactivo'
    },
    {
        Id: '5678912',
        Nombre: 'Maria Mercedes',
        Apellido: 'Rubio Rincon',
        Email: 'maria_rubio@misena.com',
        Rol: 'Funcionario',
        Estado: 'Activo'
    },{
        Id: '1234560',
        Nombre: 'Johan Sebastian',
        Apellido: 'Ussa Rubio',
        Email: 'johanu@misena.com',
        Rol: 'Administrador',
        Estado: 'Activo'
    },
    {
        Id: '8901233',
        Nombre: 'Jhon Alexander',
        Apellido: 'Umbasia Ussa',
        Email: 'jhon12@misena.com',
        Rol: 'Aprendiz',
        Estado: 'Inactivo'
    },
    {
        Id: '5678911',
        Nombre: 'Maria Mercedes',
        Apellido: 'Rubio Rincon',
        Email: 'maria_rubio@misena.com',
        Rol: 'Funcionario',
        Estado: 'Inactivo'
    },{
        Id: '1236567',
        Nombre: 'Johan Sebastian',
        Apellido: 'Ussa Rubio',
        Email: 'johanu@misena.com',
        Rol: 'Aprendiz',
        Estado: 'Inactivo'
    },
    {
        Id: '8901394',
        Nombre: 'Jhon Alexander',
        Apellido: 'Umbasia Ussa',
        Email: 'jhon12@misena.com',
        Rol: 'Administrador',
        Estado: 'Activo'
    },
    {
        Id: '5671412',
        Nombre: 'Maria Mercedes',
        Apellido: 'Rubio Rincon',
        Email: 'maria_rubio@misena.com',
        Rol: 'Funcionario',
        Estado: 'Inactivo'
    }
];

const addData = (arrayData) => {
    let cont = 0;
    const table = document.querySelector('tbody');
    table.innerHTML = '';

    arrayData.forEach(e => {
        table.innerHTML += `
            <tr>
                <th scope="row">${++ cont}</th>
                <td>${e.Id}</td>
                <td class="left">${e.Nombre} ${e.Apellido}</td>
                <td class="left">${e.Email}</td>
                <td>${e.Rol}</td>
                <td>${e.Estado}</td>
                <td class="contain_btns" style="padding: 0;">
                    <button 
                        class="btnAction" title="Activar Usuario" 
                        onclick="changeState(${e.Id}, 1)"
                    >
                        <i class="bi bi-check-square-fill iconAct iconCheck"></i>
                    </button>
                    <button 
                        class="btnAction" title="Desactivar Usuario" 
                        onclick="changeState(${e.Id}, 0)"
                    >
                        <i class="bi bi-x-square-fill iconAct"></i>
                    </button>                
                </td>
            </tr>   
        `;
    });
}
window.addEventListener('load', addData(data));

search.addEventListener('input', e => {
    let dataSearch = 0;
    const regExp = new RegExp(e.target.value, 'i');
    
    if (rolData.length) {
        dataSearch = rolData.filter(e => 
            regExp.test(e.Id) || regExp.test(`${e.Nombre} ${e.Apellido}`));
    } else if (stateData.length) { 
        dataSearch = stateData.filter(e => 
            regExp.test(e.Id) || regExp.test(`${e.Nombre} ${e.Apellido}`));
    } else {
        dataSearch = data.filter(e => 
            regExp.test(e.Id) || regExp.test(`${e.Nombre} ${e.Apellido}`));
    }
    if (!dataSearch.length) {
        document.getElementById('data_not_found').classList.add('not_found');
    } else { document.getElementById('data_not_found').classList.remove('not_found'); }
    addData(dataSearch);  
});

function changeState(id, action) {
    let pos = data.findIndex(e => e.Id == id);
    data[pos].Estado = action ? 'Activo' : 'Inactivo';  

    if (rolData.length) { addData(rolData); }
    else if (stateData.length) { addData(stateData); }
    else { addData(data); }
} 
function selectFilter(typeFilter) {
    
    if (typeFilter) {        
        const options = {
            1: () => {
                filterData('Administrador', 1);
                rolBtn.classList.add('active_filter');
            },
            2: () => filterData('Aprendiz', 1),
            3: () => filterData('Funcionario', 1),
            4: () => { 
                rol = 1; 
                stateData.length ? addData(stateData) : addData(data); 
                rolData = []; 
                rolBtn.classList.remove('active_filter'); 
            }
        }
        options[rol]();
    } else {
        const options = {
            1: () => {
                filterData('Activo', 0);
                stateBtn.classList.add('active_filter');
            },
            2: () => filterData('Inactivo', 0),
            3: () => { 
                state = 1; 
                rolData.length ? addData(rolData) : addData(data); 
                stateData = []; 
                stateBtn.classList.remove('active_filter');
            }
        }
        options[state]();
    }
}
function filterData(text, type) {

    if (type) {
        rol++;
        if (stateData.length) rolData = stateData.filter(e => e.Rol === text);
        else rolData = data.filter(e => e.Rol === text);
        rolData.length ? addData(rolData) : selectFilter(1); 
    } else {
        state++;
        if (rolData.length) stateData = rolData.filter(e => e.Estado === text);
        else stateData = data.filter(e => e.Estado === text);
        stateData.length ? addData(stateData) : selectFilter(0);
    }
}