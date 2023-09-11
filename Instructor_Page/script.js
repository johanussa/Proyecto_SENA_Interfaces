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
                FechaInicio: '2022-08-06',
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
                    },
                    {
                        Num_Ficha: 4569780,
                        Num_Ruta: 'Grupo 1',
                        Trimestre: '2 de 3',
                        Programa: 'Carpintería Metalica',
                        Codigo: '144320 V.1',
                        Competencias: 'Competencias Carpintería Metalica',
                        Descripcion: 'Descripcion Carpintería Metalica',
                        Num_Aprendices: 20,
                        Ambiente: 207
                    }
                ],
                Complementaria: 'Esta es una prueba de complementaria',
                Horas: [{ pos: 0, color: 2 }, { pos: 3, color: 'p' }, { pos: 7, color: 'c' }, { pos: 8, color: 1 }, { pos: 9, color: 3 }]
            }
        ]        
    }
];
const colors = {
    1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
    p : 'preparacion', c : 'complement'
}

const showCards = document.querySelector('.show_info_cards'),
    date_start = document.getElementById('date_start'),
    date_end = document.getElementById('date_end'),
    resume_colors = document.querySelector('.resume_colors'),
    body_table = document.getElementById('body_table'),
    cantHoras = document.querySelector('.cantHoras'),
    nameInstr = document.getElementById('name_instructor');

let cantShedule;

const cleanTable = () => {
    body_table.innerHTML = '';
    resume_colors.innerHTML = '';
    let pos = 0;
    for (let i = 0; i < 16; i++) {
        body_table.innerHTML += `
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
window.addEventListener('load', () => { 
    cantShedule = data[0].Horario.length - 1; 
    nameInstr.innerHTML = `${data[0].Nombre} ${data[0].Apellido}`;
    viewShedule();
});
function viewShedule() {
    cleanTable();
    if (data[0].Estado_Horario) {
        const user = data[0].Horario[cantShedule];
        date_start.innerHTML = `${formatDate(user.FechaInicio)}`;
        date_end.innerHTML = `${formatDate(user.FechaFin)}`;
        cantHoras.innerHTML = `Horario Asignado : ${user.Horas.length} Horas`;
        showCards.innerHTML = '';
    
        if (user.Ficha.length) {
            user.Ficha.forEach((elm, pos) => {
                showCards.innerHTML += `
                    <form class="color_${colors[pos + 1]}">
                        <section>
                            <label>Número de Ficha:</label>
                            <input type="text" placeholder="${elm.Num_Ficha}" disabled>
                        </section>
                        <section>
                            <label>Número de Ruta:</label>
                            <input type="text" placeholder="${elm.Num_Ruta}" disabled>
                        </section>
                        <section>
                            <label>Trimestre:</label>
                            <input type="text" placeholder="${elm.Trimestre}" disabled>
                        </section>    
                        <section>
                            <label>Codigo Programa:</label>
                            <input type="text" placeholder="${elm.Codigo}" disabled>
                        </section>    
                        <section class="programa_forma">
                            <label>Programa de Formación:</label>
                            <input type="text" placeholder="${elm.Programa}" disabled>
                        </section>    
                        <section>
                            <label>Núm. Aprendices:</label>
                            <input type="text" placeholder="${elm.Num_Aprendices}" disabled>
                        </section>
                        <section>
                            <label>Núm. Ambiente:</label>
                            <input type="text" placeholder="${elm.Ambiente}" disabled>
                        </section>    
                        <section class="sect_competencia">
                            <label>Competencias:</label>
                            <textarea disabled>${elm.Competencias}</textarea>
                        </section>    
                        <section class="sect_descrip">
                            <label>Descripción:</label>
                            <textarea disabled>${elm.Descripcion}</textarea>
                        </section>
                    </form>
                `;
                resume_colors.innerHTML += `
                    <section>
                        <label>Ficha Número ${elm.Num_Ficha} : </label>
                        <span class="color_${colors[pos + 1]}"></span>
                    </section>
                `; 
            });
        }
        if (user.Complementaria) {
            showCards.innerHTML += `
                <form class="form_update_descrip color_${colors['c']}">
                    <section>
                        <label for="update_comple">Descripción Formación Complementaria :</label>
                        <textarea disabled>${user.Complementaria}</textarea>
                    </section>
                </form>
            `;
            resume_colors.innerHTML += `
                <section>
                    <label>Formación Complementaria :</label>
                    <span class="color_${colors['c']}"></span>
                </section>
            `;
        }
        const td = document.querySelectorAll('td');
        user.Horas.forEach(e => td[e.pos].classList.toggle(`color_${colors[e.color]}`) );
        if (user.Horas.some(e => e.color === 'p')) {
            resume_colors.innerHTML += `
                <section>
                    <label for="">Preparación Formación :</label>
                    <span class="color_${colors['p']}"></span>
                </section>
            `;
        }
    } else {
        showCards.innerHTML = `
            <br><br><h3>
                El Instructor ${userSelected.Apellido} Aun No tiene Horarios Asignados
            </h3>
        `;
    }
}
function formatDate(date) {
    date = date.replaceAll('-', '/');
    date = new Date(date);
    return Intl.DateTimeFormat('CO', {dateStyle: 'full'}).format(date);
}
function changeShedule(action) {
    if (action) { 
        if (cantShedule + 1 === data[0].Horario.length) return;
        cantShedule ++; viewShedule();
    } else { 
        if (cantShedule - 1 >= 0) { 
            cantShedule --;
            viewShedule();
        }
    }
}