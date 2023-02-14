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
                        Programa: 'Sistemas',
                        Codigo: '144320 V.1',
                        Competencias: ['Competencias 2'],
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
                        Programa: 'Programacion de Software',
                        Codigo: 2443160,
                        Competencias: ['Competencias 1'],
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
                        Programa: 'Sistemas',
                        Codigo: '144320 V.1',
                        Competencias: ['Competencias 2'],
                        Descripcion: 'Descripcion 2',
                        Num_Aprendices: 23,
                        Ambiente: 209
                    },
                    {
                        Num_Ficha: 2557679,
                        Num_Ruta: 'Grupo 2',
                        Trimestre: '3 de 3',
                        Programa: 'Programacion de Software',
                        Codigo: '144999 V.1',
                        Competencias: ['Competencias Software'],
                        Descripcion: 'Descripcion Software',
                        Num_Aprendices: 14,
                        Ambiente: 203
                    },
                    {
                        Num_Ficha: 4569780,
                        Num_Ruta: 'Grupo 1',
                        Trimestre: '2 de 3',
                        Programa: 'Programacion de Software',
                        Codigo: '144320 V.1',
                        Competencias: [
                            'Competencias Carpintería Metalica',
                            'Administrar base de datos con los estándares y requisitos técnicos.',
                            'Fomentar cultura emprendedora según habilidades y culturas personales.'
                        ],
                        Descripcion: 'Descripcion Carpintería Metalica',
                        Num_Aprendices: 20,
                        Ambiente: 207
                    }
                ],
                Complementaria: 'Esta es una prueba de complementaria',
                Horas: [{ pos: 0, color: 2 }, { pos: 3, color: 'p' }, { pos: 7, color: 'c' }, { pos: 8, color: 1 }, { pos: 9, color: 3 }]
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
    'Programacion de Software',
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
const competencias = [
    {
        Programacion : [
            'Administrar base de datos con los estándares y requisitos técnicos.',
            'Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente.',
            'Desarrollar la solución de software de acuerdo con el diseño y la metodología de desarrollo.',
            'Desarrollar procesos de comunicación Eficases y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo.',
            'Ejercer derechos fundamentales del trabajo en el marco de la constitución política y los convenios internacionales.',
            'Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz.',
            'Establecer requisitos de solución de software de acuerdo con estándares y procedimiento técnico.',
            'Fomentar cultura emprendedora según habilidades y culturas personales.',
            'Generar hábitos saludables mediante la aplicación de programas de actividad física en los contextos productivos y sociales.',
            ' Interactuar en lengua Inglesa de forma oral y escrita dentro de contextos sociales y laborales según los criterios establecidos del marco común europeo de referencia para las lenguas.',
            'Utilizar herramientas informáticas de acuerdo con las necesidades de manejo de información.',
            'Implementar la solución de software de acuerdo con los requisitos de operación y modelos de referencia.'
        ]
    },
    {
        Sistemas : [
            'Realizar mantenimiento preventivo y predictivo que prolongue el funcionamiento de los equipos de cómputo.',
            'Implementar la estructura de la red de acuerdo con un diseño preestablecido a partir de normas técnicas internacionales.',
            'Aplicar herramientas ofimáticas, redes sociales y colaborativas de acuerdo con el proyecto a desarrollar.',
            'Aplicar en la resolución de problemas reales del sector productivo, los conocimientos, habilidades y destrezas pertinentes a las competencias del programa de formación, asumiendo estrategias y metodologías de autogestión.',
            'Promover la interacción idónea consigo mismo, con los demás y con la naturaleza en los contextos laboral y social.',
            'Comprender textos en inglés en forma escrita y auditiva.',
            'Promover la interacción idónea consigo mismo, con los demás y con la naturaleza en los contextos laboral y social.'
        ]
    }
];