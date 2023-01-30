const data = [
    {
        Identificacion: 1013648615,
        Nombre: 'Johan Sebastian',
        Apellido: 'Ussa Rubio',
        Estado: 'Asignado',
        FechaInicio: '',
        FechaFin: '', 
        Ficha: []
    },
    {
        Identificacion: 1234567890,
        Nombre: 'Jhon Jairo',
        Apellido: 'Villanueva Sanchez',
        Estado: 'No Asignado',
        FechaInicio: '',
        FechaFin: '', 
        Ficha: []
    },
    {
        Identificacion: 1023456789,
        Nombre: 'Maria Mercedes',
        Apellido: 'Gonzalez Triana',
        Estado: 'No Asignado',
        FechaInicio: '',
        FechaFin: '', 
        Ficha: []
    },
    {
        Identificacion: 79568412,
        Nombre: 'Ana Milena',
        Apellido: 'Perez Mendez',
        Estado: 'No Asignado',
        FechaInicio: '',
        FechaFin: '', 
        Ficha: []
    },
    {
        Identificacion: 52369741,
        Nombre: 'Jhon Alexander',
        Apellido: 'Rodriguez Zapata',
        Estado: 'No Asignado',
        FechaInicio: '',
        FechaFin: '', 
        Ficha: []
    },
    {
        Identificacion: 1014256987,
        Nombre: 'Lina Fernanda',
        Apellido: 'Suarez Rodriguez',
        Estado: 'No Asignado',
        FechaInicio: '',
        FechaFin: '', 
        Ficha: []
    }
];

const programas = [
    'Soldadura de Productos Metalicos en Platina',
    'Programación de Software',
    'Sistemas',
    'Carpinteria Metalica',
    'Modelado 3D para la Industria',
    'Supervision fabricación productos metálicos soldados',
    'Joyeria Armada',
    'Soldadura de Tuberias de Acero al Carbono',
    'Carpinteria de Aluminio',
    'Inspección y Ensayos con Procesos no Destructivos',
    'Bisuteria Artesanal',
    'Alistamiento de Laboratorios',
    'Coordinacion Técnica de Laboratorios',
    'Fabricacion Productos en Fibra de Vidrio',
    'Articulación con la Media',
    'Recuperación de Residuos Sólidos Plasticos',
    'Analista de Laboratorios',
];

let dataActual = {
    Identificacion: 0,
    Nombre: '',
    Apellido: '',
    Estado: 'No Asignado',
    FechaInicio: '',
    FechaFin: '', 
    Ficha: []
}

const search = document.getElementById('search');
const formulario = document.forms['formulario'];
const selectPrograma = document.getElementById('Programa');
const table = document.querySelector('.table tbody');

let countAsignacion = 1;
let horasAsignadas = 0;
let userSelected;
let loadTable = false;

const showInstructors = (array) => {
    document.querySelector('.div_instructors').innerHTML = '<p>INSTRUCTORES</p>';
    if (array.length) {
        array.forEach(e => {
            const { Identificacion, Nombre, Apellido, Estado } = e;
            document.querySelector('.div_instructors').innerHTML += `
                <section class="info_instructor" onclick="selectInstructor(${Identificacion})">
                    <article><i class="bi bi-person-circle icons"></i></article>
                    <section>
                        <article class="name">${Nombre} ${Apellido}</article>
                        <article class="identification">${Identificacion.toLocaleString()}</article>
                        <span id="state">${Estado}</span>
                    </section>
                </section>
            `;
        });
    } else {
        document.querySelector('.div_instructors').innerHTML += '<p>No se encontraron coincidencias</p>'
    }
}
window.addEventListener('load', () => {
    showInstructors(data);
    selectPrograma.innerHTML = '<option selected disabled value="">Seleccione . . .</option>';
    programas.forEach(e => {
        selectPrograma.innerHTML += `<option value="${e}">${e}</option>`;
    });
    for (let i = 0; i < 16; i++) {
        table.innerHTML += `
            <tr>
                <th scope="row">
                    ${(i + 6 < 10) ? 0 : ''}${i + 6}:00 - ${(i + 7 < 10) ? 0 : ''}${i + 7}:00
                </th>
                <td class="color_none"></td>
                <td class="color_none"></td>
                <td class="color_none"></td>
                <td class="color_none"></td>
                <td class="color_none"></td>
                <td class="color_none"></td>
            </tr>
        `;
    }
});

function saveData() {
    formulario.reset();
    document.querySelector('#formulario').style.display = 'none';
    document.querySelector('.table_shedule h2').innerHTML = `
        <h3>Horario Asignado:</h3>`;    
    document.querySelector('tfoot').innerHTML = ``;
}

search.addEventListener('input', e => {
    const expReg = new RegExp(e.target.value, 'i');
    const filter = data.filter(e => 
        expReg.test(e.Identificacion) || expReg.test(`${e.Nombre} ${e.Apellido}`
    ));
    showInstructors(filter);
});
formulario.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.table_shedule').style.display = 'grid';
    document.querySelector('.table_shedule h2').innerHTML = `
        Asignar Horario a la Ficha ${e.target.Num_Ficha.value}`;
    document.querySelector('tfoot').innerHTML = `
        <button class="save_data" onclick="saveData()">Guardar</button>
    `;
    if (!loadTable) {
        const td = document.querySelectorAll('td');
        td.forEach((elem, pos) => {
            elem.addEventListener('click', event => {
                event.target.classList.toggle('color_one');
                // console.log(pos)
            });
        });
        loadTable = true;
    }
});

function btnFilter() {
    let options = {
        1 : () => {
            let filter = data.filter(e => e.Estado === 'Asignado');
            if (filter.length) showInstructors(filter)
            countAsignacion++;
        },
        2 : () => {
            let filter = data.filter(e => e.Estado === 'No Asignado');
            if (filter.length) showInstructors(filter);
            countAsignacion++;
        },
        3 : () => { 
            showInstructors(data); 
            countAsignacion = 1; 
        }
    }
    options[countAsignacion]();
}
function selectInstructor(id) {
    userSelected = data.filter(e => e.Identificacion === id);
    showInstructors(userSelected);
    document.querySelector('.btns_options').style.display = 'flex';
    document.querySelector('.table_shedule').style.display = 'none';
}

function createShedule() {    
    document.querySelector('.btns_options').style.display = 'none';
    document.querySelector('.type_contrato').style.display = 'flex';
}

function typeContrato(horas) {
    document.querySelector('.show_hours').style.display = 'block';
    document.querySelector('.create_shedule').style.display = 'block';

    const span = document.querySelectorAll('.show_hours span');
    span[0].innerHTML = horas;
    span[1].innerHTML = horasAsignadas;
    span[2].innerHTML = `${horas - horasAsignadas}`;

    const { Nombre, Apellido } = userSelected[0];       
    document.getElementById('name_user').innerHTML = `${Nombre} ${Apellido}`;
}

function addAction() {    
    document.querySelector('#formulario').style.display = 'grid';
    document.querySelector('.table_shedule').style.display = 'none';
}