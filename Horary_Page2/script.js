const data = [
    {
        Identificacion: 1013648615,
        Nombre: 'Johan Sebastian',
        Apellido: 'Ussa Rubio',
        Estado_Horario: true,
        Horario: [
            {
                FechaInicio: '2023-04-03',
                FechaFin: '2023-07-06', 
                Ficha: [
                    {
                        Num_Ficha: 1234567,
                        Num_Ruta: 'Grupo 5',
                        Trimestre: '1 de 3',
                        Programa: 'Tecnico en Sistemas',
                        Codigo: '144320 V.1',
                        Competencias: 'Competencias 2',
                        Descripcion: 'Descripcion 2',
                        Num_Aprendices: 23,
                        Ambiente: 209
                    }
                ],
                Complementaria: false,
                Horas: [{ pos: 5, color: 1 }, { pos: 6, color: 'p' }]
            },
            {
                FechaInicio: '2023-02-02',
                FechaFin: '2023-02-09', 
                Ficha: [
                    {
                        Num_Ficha: 2557679,
                        Num_Ruta: 'Grupo 2',
                        Trimestre: '3 de 3',
                        Programa: 'Programación de Software',
                        Codigo: 2443160,
                        Competencias: 'Competencias 1',
                        Descripcion: 'Descripcion 1',
                        Num_Aprendices: 16,
                        Ambiente: 203
                    }
                ],
                Complementaria: 'Formacion Complementaria',
                Horas: [{ pos: 12, color: 1 }, { pos: 26, color: 'p' }, { pos: 16, color: 'c' }]
            },
            {
                FechaInicio: '2023-04-03',
                FechaFin: '2023-07-06', 
                Ficha: [
                    {
                        Num_Ficha: 1234567,
                        Num_Ruta: 'Grupo 5',
                        Trimestre: '1 de 3',
                        Programa: 'Tecnico en Sistemas',
                        Codigo: '144320 V.1',
                        Competencias: 'Competencias 2',
                        Descripcion: 'Descripcion 2',
                        Num_Aprendices: 23,
                        Ambiente: 209
                    },
                    {
                        Num_Ficha: 2557679,
                        Num_Ruta: 'Grupo 2',
                        Trimestre: '3 de 3',
                        Programa: 'Programacion de Software',
                        Codigo: '144320 V.1',
                        Competencias: 'Competencias Software',
                        Descripcion: 'Descripcion Software',
                        Num_Aprendices: 23,
                        Ambiente: 209
                    }
                ],
                Complementaria: 'Esta es una prueba de complementaria',
                Horas: [{ pos: 0, color: 2 }, { pos: 3, color: 'p' }, { pos: 7, color: 'c' }, { pos: 8, color: 1 }]
            }
        ]        
    },
    {
        Identificacion: 1234567890,
        Nombre: 'Jhon Jairo',
        Apellido: 'Villanueva Sanchez',
        Estado_Horario: false,
        Horario: []
    },
    {
        Identificacion: 1023456789,
        Nombre: 'Maria Mercedes',
        Apellido: 'Gonzalez Triana',
        Estado_Horario: false,
        Horario: []
    },
    {
        Identificacion: 79568412,
        Nombre: 'Ana Milena',
        Apellido: 'Perez Mendez',
        Estado_Horario: false,
        Horario: []
    },
    {
        Identificacion: 52369741,
        Nombre: 'Jhon Alexander',
        Apellido: 'Rodriguez Zapata',
        Estado_Horario: false,
        Horario: []
    },
    {
        Identificacion: 1014256987,
        Nombre: 'Lina Fernanda',
        Apellido: 'Suarez Rodriguez',
        Estado_Horario: false,
        Horario: []
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
const aulas = ['201', '202', '203', '204', '205', '206', '207', '208', '209'];
const colors = {
    1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
    p : 'preparacion', c : 'complement'
}

const formulario = document.forms['formulario'];
const formComplem = document.forms['form_complementario'];
const search = document.getElementById('search');
const table = document.getElementById('table_body');
const selectPrograma = document.getElementById('Programa');
const selectAmbiente = document.getElementById('Ambiente');
const span = document.querySelectorAll('.show_hours span');
const containBtns = document.querySelector('.btns_table');

let countAsignacion = 1;
let colorSelector = 0;
let cantHours = 0;
let activeFicha = false;
let flagPlaneacion = false;
let flagComplement = false;
let saveUpdate = false;
let complement = false;
let shedule = [];
let dataFicha = [];
let userSelected;
let date_start;
let date_end;
let Num_Ficha;
let Num_Ruta;
let Trimestre;
let Programa;
let Codigo;
let Competencias;
let Descripcion;
let Num_Aprendices;
let Ambiente;
let length;
let indexUser;

const saveData = () => {
    if (!(cantHours - shedule.length)) {
        if (saveUpdate) {
            data[indexUser].Horario[length].Horas = shedule;
            saveUpdate = false;
            containBtns.style.display = 'none';
            alert('Horario Actalizado Correctamente!!'); 
        } else {
            btnContinue();
            let objectData = {
                FechaInicio : date_start.value,
                FechaFin : date_end.value,
                Ficha : dataFicha,
                Complementaria: complement,
                Horas: shedule
            }
            data[indexUser].Estado_Horario = true;
            data[indexUser].Horario.push(objectData);
            alert('Información Almacenada Correctamente!!');            
            selectInstructor(userSelected.Identificacion);
        }
    } else { alert('Aun No ha asignado las horas requeridas'); }    
}
const showInstructors = (array) => {
    document.querySelector('.div_instructors').innerHTML = '<p>INSTRUCTORES</p>';
    if (array.length) {
        array.forEach((e, pos) => {
            const { Identificacion, Nombre, Apellido, Estado_Horario } = e;
            document.querySelector('.div_instructors').innerHTML += `
                <section class="info_instructor" onclick="selectInstructor(${Identificacion})">
                    <article><i class="bi bi-person-circle icons"></i></article>
                    <section>
                        <article class="name">${Nombre} ${Apellido}</article>
                        <article class="identification">${Identificacion.toLocaleString()}</article>
                        <span id="state">${Estado_Horario ? 'Asignado' : 'No Asignado'}</span>
                    </section>
                </section>
            `;
        });
    } else {
        document.querySelector('.div_instructors').innerHTML += 
            '<p>No se encontraron coincidencias</p>';
    }
}
const eventClick = e => {
    if (e.target && e.target.tagName == 'TD') {
        let pos = Number(e.target.id);
        const posNum = shedule.findIndex(e => e.pos === pos);
        if (posNum === -1) {
            if (cantHours - shedule.length === 0) {
                return alert('Ya completaste el número de Horas para éste Instructor');
            } 
            shedule.push({ pos, color : colorSelector }); 
            e.target.classList.toggle(`color_${colors[colorSelector]}`);   
        } else if (shedule[posNum].color === colorSelector) { 
            shedule.splice(posNum, 1); 
            e.target.classList.toggle(`color_${colors[colorSelector]}`);
        }         
        updateHours();
    }
}
const changeInput = (e) => {
    let options = {
        Num_Ficha : () => Num_Ficha = e.target.value,
        Num_Ruta : () => Num_Ruta = e.target.value,
        Trimestre : () => Trimestre = e.target.value,
        Programa : () => Programa = e.target.value,
        Codigo : () => Codigo = e.target.value.toUpperCase(),
        Competencias : () => Competencias = e.target.value,
        Descripcion : () => Descripcion = e.target.value,
        Num_Aprendices : () => Num_Aprendices = e.target.value,
        Ambiente : () => Ambiente = e.target.value,
    }
    options[e.target.id]();
}

window.addEventListener('load', () => {
    showInstructors(data);
    programas.forEach(e => selectPrograma.innerHTML += `<option value="${e}">${e}</option>`);
    aulas.forEach(e => selectAmbiente.innerHTML += `<option value="${e}">${e}</option>`);
    clearTable();    
});
search.addEventListener('input', e => {
    const expReg = new RegExp(e.target.value, 'i');
    const filter = data.filter(e => 
        expReg.test(e.Identificacion) || expReg.test(`${e.Nombre} ${e.Apellido}`
    ));
    showInstructors(filter);
});
formulario.addEventListener('submit', e => {        
    e.preventDefault();
    containBtns.style.display = 'flex';
    document.querySelector('.table_shedule').style.display = 'grid';
    document.querySelector('.btns_actions').style.display = 'none';

    document.querySelector('.table_shedule h2').innerHTML = `
        Asignar Horario a la Ficha : ${e.target.Num_Ficha.value}`;
    document.querySelector('.resume').innerHTML += `
        <section>
            <label for="">Ficha Número ${e.target.Num_Ficha.value} : </label>
            <span class="color_${colors[colorSelector]}"></span>
        </section>
    `;
});
formComplem.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.btns_form_comple').style.display = 'none';
    document.querySelector('.table_shedule').style.display = 'grid';

    if (!flagComplement) {
        document.querySelector('.resume').innerHTML += `
            <section>
                <label for="">Formación Complementaria :</label>
                <span class="color_${colors[colorSelector]}"></span>
            </section>
        `;
        flagComplement = true;
    }
});
formComplem.addEventListener('change', e => complement = e.target.value );
formulario.addEventListener('change', changeInput);

function clearTable() {
    table.innerHTML = '';
    document.querySelector('.resume').innerHTML = '';
    let pos = 0;
    for (let i = 0; i < 16; i++) {
        table.innerHTML += `
            <tr>
                <th scope="row">
                    ${(i + 6 < 10) ? 0 : ''}${i + 6}:00 - ${(i + 7 < 10) ? 0 : ''}${i + 7}:00
                </th>
                <td id="${pos++}" class="color_none"></td>
                <td id="${pos++}" class="color_none"></td>
                <td id="${pos++}" class="color_none"></td>
                <td id="${pos++}" class="color_none"></td>
                <td id="${pos++}" class="color_none"></td>
                <td id="${pos++}" class="color_none"></td>
            </tr>
        `;
    }
}
function updateHours() {
    span[0].innerHTML = cantHours;
    span[1].innerHTML = shedule.length;
    span[2].innerHTML = `${cantHours - shedule.length}`;
}
function btnContinue() {
    const resume = document.querySelector('.resume');
    formulario.reset(); 
    formulario.style.display = 'none';

    document.querySelector('.table_shedule h2').innerHTML = `Horario Asignado :`;  
    resume.style.display = 'grid';
    document.querySelector('.btn_add_ficha').style.display = 'flex';
    document.querySelector('.form_complem').style.display = 'none';

    if (!shedule.some(e => e.color === colorSelector)) {
        resume.removeChild(resume.lastElementChild);
        if (flagPlaneacion) flagPlaneacion = false;
        if (flagComplement) flagComplement = false;
        if (colorSelector === 'c') complement = false;
        activeFicha = false;
        colorSelector--;
    }        
    if (activeFicha && !dataFicha.some(e => e.Num_Ficha === Num_Ficha)) {
        dataFicha.push({
            Num_Ficha,
            Num_Ruta,
            Trimestre,
            Programa,
            Codigo,
            Competencias,
            Descripcion,
            Num_Aprendices,
            Ambiente
        });
    }    
    table.removeEventListener('click', eventClick);
}
function btnFilter() {
    if (userSelected) countAsignacion = 3;
    const options = {
        1 : () => {
            const filter = data.filter(e => e.Estado_Horario === true);
            if (filter.length) showInstructors(filter)
            countAsignacion++;
        },
        2 : () => {
            const filter = data.filter(e => e.Estado_Horario === false);
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
    indexUser = data.findIndex(e => e.Identificacion === id);
    userSelected = JSON.parse(JSON.stringify(data[indexUser]));
    showInstructors(new Array(userSelected));
    formComplem.reset();
    formulario.reset();
    clearTable();
    shedule = []; 
    dataFicha = [];
    colorSelector = 0;
    complement = false;
    activeFicha = false;
    flagPlaneacion = false;
    flagComplement = false;
    saveUpdate = false;
    length = userSelected.Horario.length - 1;

    const { Nombre, Apellido } = userSelected;       
    document.getElementById('name_user').innerHTML = `${Nombre} ${Apellido}`;

    containBtns.firstElementChild.style.display = 'block';
    document.querySelector('.name_instructor').style.display = 'block';
    document.querySelector('.btns_options').style.display = 'flex';
    document.querySelector('.show_hours').style.display = 'none';
    document.querySelector('section.show_shedule').style.display = 'none';
    document.querySelector('section.update_info').style.display = 'none';
    document.querySelector('.type_contrato').style.display = 'none';
    document.querySelector('.create_shedule').style.display = 'none';
    document.querySelector('#formulario').style.display = 'none';                    
    document.querySelector('.form_complem').style.display = 'none';
    document.querySelector('.table_shedule').style.display = 'none';
}
function createShedule() {    
    document.querySelector('.btns_options').style.display = 'none';
    document.querySelector('.type_contrato').style.display = 'flex';
}
function typeContrato(horas) {
    cantHours = horas;
    document.querySelector('.show_hours').style.display = 'block';
    document.querySelector('.create_shedule').style.display = 'block';
    document.querySelector('.btn_add_ficha').style.display = 'flex';
    updateHours();
}
function btnsAction(btn) {  
    const options = {
        1 : () => {
            table.addEventListener('click', eventClick);
            if (colorSelector === 'c' || colorSelector === 'p' || Number.isNaN(colorSelector)) { 
                const valorNew = shedule.reduce((count, elem) => {
                    if (count < elem.color) count = elem.color;
                    return count;
                }, 0);
                colorSelector = valorNew;
            }
            colorSelector ++; 
            activeFicha = true;
            document.querySelector('.type_contrato').style.display = 'none';
            document.querySelector('.btns_actions').style.display = 'flex';
            document.querySelector('#formulario').style.display = 'grid';
            document.querySelector('.table_shedule').style.display = 'none';  
        },
        2 : () => {
            table.addEventListener('click', eventClick);
            colorSelector = 'p';
            
            document.querySelector('.table_shedule').style.display = 'grid';
            containBtns.style.display = 'flex';
            document.querySelector('.resume').style.display = 'grid';
            if (!flagPlaneacion) {                
                document.querySelector('.resume').innerHTML += `
                    <section>
                        <label for="">Preparación Formación :</label>
                        <span class="color_${colors[colorSelector]}"></span>
                    </section>
                `;
                flagPlaneacion = true;               
            }
        },
        3 : () => {
            table.addEventListener('click', eventClick);
            colorSelector = 'c';
            formComplem.reset();
            document.querySelector('.resume').style.display = 'grid';
            containBtns.style.display = 'flex';
            document.querySelector('.form_complem').style.display = 'block';
            document.querySelector('.btns_form_comple').style.display = 'block';
            document.querySelector('.table_shedule').style.display = 'none';
        },
        4 : () => {
            if (colorSelector > 0) colorSelector--;
            formulario.reset();
            formComplem.reset();
            document.querySelector('.btn_add_ficha').style.display = 'flex';
            document.querySelector('.form_complem').style.display = 'none';
        }
    } 
    if (validateDate()) {
        document.querySelector('#formulario').style.display = 'none';
        document.querySelector('.btn_add_ficha').style.display = 'none';
        document.querySelector('.table_shedule h2').innerHTML = `Asignación de Horario`;
        options[btn]();
    } 
}
function validateDate() {
    date_start = document.getElementById('date_start');
    date_end = document.getElementById('date_end');

    if (data[indexUser].Horario.length) {
        if (data[indexUser].Horario.some(e => e.FechaInicio === date_start.value)) {
            date_start.focus();
            return alert(`El Instructor ${userSelected.Apellido} Ya tiene asignado un horario para esa fecha`);
        }
    }
    if (!date_start.value) {
        alert('Ingrese la Fecha de Inicio');
        date_start.focus();
        return false;
    } else if (!date_end.value) {
        alert('Ingrese la Fecha Final');
        date_end.focus();
        return false;
    } else return true;
}
function formatDate(date) {
    date = date.replaceAll('-', '/');
    date = new Date(date);
    return Intl.DateTimeFormat('CO', {dateStyle: 'full'}).format(date);
}
function viewShedule() {
    const showShedule = document.querySelector('section.show_shedule');
    const dataShedule = userSelected.Horario;    
    showShedule.style.display = 'grid';
    containBtns.style.display = 'none';

    document.querySelector('.btns_options').style.display = 'none';
    document.querySelector('.table_shedule h2').innerHTML = `Horario Asignado :`;
    document.querySelector('.resume').innerHTML = '';
    clearTable();

    if (dataShedule.length) {
        const element = dataShedule[length];
        document.querySelector('.table_shedule').style.display = 'grid';
        document.querySelector('.resume').style.display = 'grid';
        showShedule.innerHTML = '<h2>HORARIOS</h2>';

        showShedule.innerHTML += `
            <section class="dates_range">
                <i onclick="changeData(0)" class="bi bi-caret-left-fill icons_change_date"></i>
                <span>${formatDate(element.FechaInicio)}</span> A
                <span>${formatDate(element.FechaFin)}</span>
                <i onclick="changeData(1)" class="bi bi-caret-right-fill icons_change_date"></i>
            </section>
        `;
        if (element.Ficha.length) {
            element.Ficha.forEach((e, pos) => {
                showShedule.innerHTML += `
                    <form class="color_${colors[pos + 1]}">
                        <section>
                            <label>Número de Ficha:</label>
                            <input type="text" placeholder="${e.Num_Ficha}" disabled>
                        </section>
                        <section>
                            <label>Número de Ruta:</label>
                            <input type="text" placeholder="${e.Num_Ruta}" disabled>
                        </section>
                        <section>
                            <label>Trimestre:</label>
                            <input type="text" placeholder="${e.Trimestre}" disabled>
                        </section>    
                        <section>
                            <label>Codigo Programa:</label>
                            <input type="text" placeholder="${e.Codigo}" disabled>
                        </section>    
                        <section class="programa_forma">
                            <label>Programa de Formación:</label>
                            <input type="text" placeholder="${e.Programa}" disabled>
                        </section>    
                        <section>
                            <label>Núm. Aprendices:</label>
                            <input type="text" placeholder="${e.Num_Aprendices}" disabled>
                        </section>
                        <section>
                            <label>Núm. Ambiente:</label>
                            <input type="text" placeholder="${e.Ambiente}" disabled>
                        </section>    
                        <section class="sect_competencia">
                            <label>Competencias:</label>
                            <textarea disabled>${e.Competencias}</textarea>
                        </section>    
                        <section class="sect_descrip">
                            <label>Descripción:</label>
                            <textarea disabled>${e.Descripcion}</textarea>
                        </section>
                    </form>
                `;
                document.querySelector('.resume').innerHTML += `
                    <section>
                        <label>Ficha Número ${e.Num_Ficha} : </label>
                        <span class="color_${colors[pos + 1]}"></span>
                    </section>
                `; 
            });
        }
        if (element.Complementaria) {
            showShedule.innerHTML += `
                <form class="form_update_descrip color_${colors['c']}">
                    <section>
                        <label for="update_comple">Descripción Formación Complementaria :</label>
                        <textarea disabled>${element.Complementaria}</textarea>
                    </section>
                </form>
            `;
            document.querySelector('.resume').innerHTML += `
                <section>
                    <label>Formación Complementaria :</label>
                    <span class="color_${colors['c']}"></span>
                </section>
            `;
        }
        let td = document.querySelectorAll('td');
        element.Horas.forEach(e => td[e.pos].classList.toggle(`color_${colors[e.color]}`) );
        if (element.Horas.some(e => e.color === 'p')) {
            document.querySelector('.resume').innerHTML += `
                <section>
                    <label for="">Preparación Formación :</label>
                    <span class="color_${colors['p']}"></span>
                </section>
            `;
        }
    } else {
        showShedule.innerHTML = `
            <br><br><h3>
                El Instructor ${userSelected.Apellido} Aun No tiene Horarios Asignados
            </h3>
        `;
    }
}
function changeData(action) {
    if (action) { 
        if (length + 1 === userSelected.Horario.length) return;
        length ++; viewShedule();
    } else { 
        if (length - 1 >= 0) { 
            length --;
            viewShedule();
        }
    }
}
function updateShedule() {
    const container = document.querySelector('section.update_info');
    containBtns.style.display = 'none';
    document.querySelector('.btns_options').style.display = 'none';
    container.style.display = 'grid';
    clearTable();

    if (userSelected.Horario.length) {
        document.querySelector('.table_shedule h2').innerHTML = `Horario Asignado :`;
        document.querySelector('.resume').innerHTML = '';
        document.querySelector('.resume').style.display = 'grid';
        document.querySelector('.table_shedule').style.display = 'grid';
        document.querySelector('.show_hours').style.display = 'block';
        cantHours = userSelected.Horario[length].Horas.length;
        shedule = userSelected.Horario[length].Horas.map(e => e);
        updateHours();
        const user = JSON.parse(JSON.stringify(data[indexUser].Horario[length]));
        container.innerHTML = '';

        container.innerHTML += `
            <section class="update_dates">
                <section class="dates_before">
                    <span>${formatDate(user.FechaInicio)}</span> A
                    <span>${formatDate(user.FechaFin)}</span>
                </section>
                <section class="dates_after">
                    <article>
                        <label for="update_start">Fecha de Inicio : </label>
                        <input type="date" class="input_date" id="update_start" onchange="updateData(event)">
                    </article>
                    <article>
                        <label for="update_end">Fecha Fin : </label>
                        <input type="date" class="input_date" id="update_end" onchange="updateData(event)">
                    </article>
                </section>
            </section>
        `;
        if (user.Ficha.length) {
            user.Ficha.forEach((e, pos) => {
                container.innerHTML += `
                    <form>
                        <section>
                            <label for="Num_Ficha">Número de Ficha:</label>
                            <input type="number" id="Num_Ficha" placeholder="${e.Num_Ficha}" 
                                onchange="updateData(event)">
                        </section>
                        <section>
                            <label for="Num_Ruta">Número de Ruta:</label>
                            <select name="Num_Ruta" id="Num_Ruta" onchange="updateData(event)">
                                <option selected value="" disabled>${e.Num_Ruta}</option>
                                <option value="Grupo 1">Grupo 1</option>
                                <option value="Grupo 2">Grupo 2</option>
                                <option value="Grupo 3">Grupo 3</option>
                                <option value="Grupo 4">Grupo 4</option>
                                <option value="Grupo 5">Grupo 5</option>
                                <option value="Grupo 6">Grupo 6</option>
                            </select>
                        </section>
                        <section>
                            <label for="Trimestre">Trimestre:</label>
                            <select name="Trimestre" id="Trimestre" onchange="updateData(event)">
                                <option selected value="" disabled>${e.Trimestre}</option>
                                <option value="1 de 3">1 de 3</option>
                                <option value="2 de 3">2 de 3</option>
                                <option value="3 de 3">3 de 3</option>
                            </select>
                        </section>    
                        <section>
                            <label for="Codigo">Codigo Programa:</label>
                            <input type="text" id="Codigo" placeholder="${e.Codigo}" 
                                onchange="updateData(event)">
                        </section>    
                        <section class="programa_forma">
                            <label for="Programa">Programa de Formación:</label>
                            <select name="Select_Programa" id="Programa" onchange="updateData(event)">
                                <option selected disabled value="">${e.Programa}</option>
                            </select>
                        </section>    
                        <section>
                            <label for="Num_Aprendices">Núm. Aprendices:</label>
                            <input type="number" id="Num_Aprendices" 
                                placeholder="${e.Num_Aprendices}" onchange="updateData(event)">
                        </section>
                        <section>
                            <label for="Ambiente">Núm. Ambiente:</label>
                            <select name="Select_Ambiente" id="Ambiente" onchange="updateData(event)">
                                <option selected disabled value="">${e.Ambiente}</option>
                            </select>
                        </section>    
                        <section class="sect_competencia">
                            <label for="Competencias">Competencias:</label>
                            <textarea id="Competencias" rows="9" onchange="updateData(event)"
                                >${e.Competencias}</textarea>
                        </section>    
                        <section class="sect_descrip">
                            <label for="Descripcion">Descripción:</label>
                            <textarea id="Descripcion" rows="5" onchange="updateData(event)"
                                >${e.Descripcion}</textarea>
                        </section>    
                        <section class="update_btns">
                            <button type="button" onclick="updateData(1, ${pos})">Guardar</button>
                        </section>
                    </form>
                `;
                document.querySelector('.resume').innerHTML += `
                    <section>
                        <label>Ficha Número ${e.Num_Ficha} : </label>
                        <span class="color_${colors[pos + 1]} btn_color" onclick="changeShedule(${pos + 1})"></span>
                    </section>
                `; 
            });
        }
        if (user.Complementaria) {
            container.innerHTML += `
                <form class="form_update_descrip">
                    <section>
                        <label for="update_comple">Descripción Formación Complementaria :</label>
                        <textarea id="update_comple" onchange="updateData(event)">${user.Complementaria}</textarea>
                    </section>
                    <section class="update_btns">
                        <button type="button" onclick="updateData(2, ${length})">Guardar</button>
                    </section>
                </form>
            `;
            document.querySelector('.resume').innerHTML += `
                <section>
                    <label>Formación Complementaria :</label>
                    <span class="color_${colors['c']} btn_color" onclick="changeShedule('c')"></span>
                </section>
            `;
        }
        let td = document.querySelectorAll('td');
        user.Horas.forEach(e => td[e.pos].classList.toggle(`color_${colors[e.color]}`) );
        if (user.Horas.some(e => e.color === 'p')) {
            document.querySelector('.resume').innerHTML += `
                <section>
                    <label for="">Preparación Formación :</label>
                    <span class="color_${colors['p']} btn_color" onclick="changeShedule('p')"></span>
                </section>
            `;
        }
        const nodesProgram = document.getElementsByName('Select_Programa');
        const nodesAmb = document.getElementsByName('Select_Ambiente');
        nodesProgram.forEach(node => programas.forEach(e => node.innerHTML += `<option value="${e}">${e}</option>`));
        nodesAmb.forEach(node => aulas.forEach(e => node.innerHTML += `<option value="${e}">${e}</option>`));
    } else {
        container.innerHTML = `
            <br><br><h3>
                El Instructor ${userSelected.Apellido} Aun No tiene Horarios Asignados
            </h3>
        `;
    }
}
function updateData(e, pos = 0) {
    const elem = userSelected.Horario[length];
    if (e === 1) {
        dataFicha = {
            Num_Ficha : Num_Ficha || elem.Ficha[pos].Num_Ficha,
            Num_Ruta : Num_Ruta || elem.Ficha[pos].Num_Ruta,
            Trimestre : Trimestre || elem.Ficha[pos].Trimestre,
            Programa : Programa || elem.Ficha[pos].Programa,
            Codigo : Codigo || elem.Ficha[pos].Codigo,
            Competencias : Competencias || elem.Ficha[pos].Competencias,
            Descripcion : Descripcion || elem.Ficha[pos].Descripcion,
            Num_Aprendices : Num_Aprendices || elem.Ficha[pos].Num_Aprendices,
            Ambiente : Ambiente || elem.Ficha[pos].Ambiente
        };
        data[indexUser].Horario[length].Ficha.splice(pos, 1, dataFicha);
        alert('Información Actualizada Correctamente!!');  
        updateShedule();
    } else if (e === 2) {
        data[indexUser].Horario[pos].Complementaria = complement || elem.Complementaria;
        alert('Información Actualizada Correctamente!!'); 
        updateShedule();
    } else {
        let options = {
            update_start : () => {
                data[indexUser].Horario[length].FechaInicio = e.target.value;
                updateShedule();
            }, 
            update_end : () => {
                data[indexUser].Horario[length].FechaFin = e.target.value;
                updateShedule();
            }, 
            update_comple : () => complement = e.target.value
        }
        if (options[e.target.id]) return options[e.target.id]();
        changeInput(e);
    }
}
function changeShedule(color) {
    containBtns.firstElementChild.style.display = 'none';
    containBtns.style.display = 'flex';
    saveUpdate = true;
    colorSelector = color;    
    table.addEventListener('click', eventClick);
}
