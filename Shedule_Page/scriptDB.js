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
                        Programa: 'Analista de Laboratorios',
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
    'Alistamiento de Laboratorios', 
    'Analista de Laboratorios', 
    'Articulación con la Media', 
    'Bisuteria Artesanal', 
    'Carpinteria de Aluminio', 
    'CarpinteriaM Metalica',  
    'Inspección y Ensayos con Procesos no Destructivos', 
    'Joyeria Armada', 'Modelado 3D para la Industria', 
    'Programacion de Software', 
    'Sistemas', 
    'Soldadura de Productos Metalicos en Platina'
];
const aulas = ['201', '202', '203', '204', '205', '206', '207', '208', '209'];
const colors = {
    1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
    p : 'preparacion', c : 'complement'
}
const competencias = [
    {
        Analista : [
            'Analizar muestras químicas según procedimientos de laboratorio.',
            'Analizar muestras según procedimientos implementados por el laboratorio.',
            'Realizar operaciones de alistamiento del laboratorio, según procedimientos establecidos.'
        ]
    },
    {
        Bisuteria : [
            'Con el curso los estudiantes desarrollarán destrezas en bisutería.',
            'Podrán potenciar estrategias que servirán para poder darle un valor agregado a la joyería colombiana.',
            'Desarrollarán conocimientos para la creación de productos partiendo de materia prima como piedras, materiales sintéticos, fibras, entre otros.',
            'La idea es poder ofrecer un producto innovador a los consumidores.',
            'Se volverán además muchos más expertos en el área del diseño.'
        ]
    },
    {
        CarpinteriaM : [
            'Promover la interacción idónea consigo mismo y con otros partícipes del contexto laboral, ambiental y social.',
            'Comprender textos en inglés escrito y hablado.',
            'Estructurar láminas, perfiles y tubos metálicos de acuerdo con las especificaciones de fabricación.',
            'Conocer e implementar procesos de construcción de estructuras livianas e instalación de láminas para sistemas constructivos en seco, de acuerdo con la normativa que aplique y las especificaciones de construcción.',
            'Conocer los parámetros de efectividad productiva y aplicarlos a procesos de medición de productos metalmecánicos.',
            'Proponer replanteamientos de diseños de acuerdo con las normas, planos y especificaciones correspondientes.',
            'Soldar platina mediante el uso de arco eléctrico con electrodo revestido (SMAW) de acuerdo con el procedimiento de fabricación.',
            'Soldar platina mediante el uso de arco protegido con gas con alambre electrodo (MIG-MAG) de acuerdo con el procedimiento de fabricación.'
        ]
    },
    {
        Carpinteria : [
            'Conocer los subprocesos que comprenden el proceso de troquelado y controlar la materia prima y el producto que derive del mismo.',
            'Identificar el tipo de producto para realización de instalación de acuerdo con las necesidades del cliente.',
            'Ejecutar el ensamblaje de muebles de aluminio de acuerdo con los parámetros específicos de su diseño y la normativa de seguridad.',
            'Conocer y ejecutar el manejo de maquinaria de troquelado de acuerdo con las normativas de seguridad y uso y la naturaleza del producto.',
            'Estructurar láminas, perfiles y tubos metálicos de acuerdo con las especificaciones de fabricación.',
            'Conocer e implementar procedimientos de cortes de perfilería de acuerdo con los procedimientos establecidos.',
            'Promover la interacción idónea consigo mismo y con otros partícipes del contexto laboral, ambiental y social.',
            'Comprender textos en inglés escrito y hablado.'
        ]
    },
    {
        Programacion : [
            'Administrar base de datos con los estándares y requisitos técnicos.',
            'Aplicación de conocimientos de las ciencias naturales de acuerdo con situaciones del contexto productivo y social.',
            'Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente.',
            'Desarrollar la solución de software de acuerdo con el diseño y la metodología de desarrollo.',
            'Desarrollar procesos de comunicación Eficases y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo.',
            'Ejercer derechos fundamentales del trabajo en el marco de la constitución política y los convenios internacionales.',
            'Establecer requisitos de solución de software de acuerdo con estándares y procedimiento técnico.',
            'Fomentar cultura emprendedora según habilidades y culturas personales.',
            'Generar hábitos saludables mediante la aplicación de programas de actividad física en los contextos productivos y sociales.',
            'gestionar procesos propios de la cultura emprendedora y empresarial de acuerdo con el perfil personal y los requerimientos de los contextos productivo y social.',
            'Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz.',
            'Interactuar en lengua Inglesa de forma oral y escrita dentro de contextos sociales y laborales según los criterios establecidos del marco común europeo de referencia para las lenguas.',
            'Implementar la solución de software de acuerdo con los requisitos de operación y modelos de referencia.',
            'Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales.',
            'Utilizar herramientas informáticas de acuerdo con las necesidades de manejo de información.',
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
    }, 
    {
        Soldadura : [
            'Aplicar soldadura a productos metálicos (platinas) de acero al carbono con el proceso gtaw según procedimiento y normatividad aplicable.',
            'Soldar productos metálicos (platina) por arco eléctrico con electrodo revestido (SMAW)). Según procedimiento de fabricación.',
            'Soldar productos metálicos (platina) por arco protegido con gas con alambre electrodo (MIG-MAG).'
        ]
    },
    {
        Alistamiento : [
            'Conocer y aplicar la normativa legal que corresponda para el alistamiento de laboratorios.',
            'Conocer y aplicar la normativa y las especificaciones técnicas para el almacenaje de material químico.',
            'Conocer y aplicar la normativa vigente y las políticas organizacionales para la protección ambiental, de seguridad y de salud en el contexto laboral.',
            'Saber comunicarse eficaz y eficientemente en contextos sociales, personales y organizacionales.',
            'Ejercer los derechos fundamentales laborales de acuerdo con la Constitución Política y los convenios internacionales que apliquen.',
            'Saber propiciar la interacción laboral de acuerdo con los principios éticos asociados con una cultura de paz.',
            'Diseñar, conocer y aplicar programas de actividad física para generar hábitos saludables de vida en el ámbito laboral y social.',
            'Saber desarrollar razonamiento matemáticos en situaciones que así lo requieran.',
            'Comprender textos en inglés escrito y hablado.',
        ]
    }, 
    {
        Joyeria : [
            'Habilidad para la producción de piezas de joyería en diferentes modelos, tamaños ya cavados, ya sea que la producción sea en serio o única.',
            'Reconocer cuáles son las tendencias nacionales e internacionales en cuanto a las joyerías más usadas.',
            'Capacidad para la manipulación y transformación de metales preciosos.',
        ]
    }, 
    {
        Modelado : [
            'Identificar las relaciones entre los elementos modelados de acuerdo con las especificaciones de un proyecto.',
            'Conocer y ejecutar los procedimientos para generar renders según el impacto visual que se tenga como objetivo.',
            'Saber identificar las necesidades del cliente para desarrollar un modelado de imagen que se ajuste a ellas.',
            'Conocer y ejecutar los procedimientos de post-producción para generación de la animación final siguiendo las especificaciones del proyecto.',
            'Promover la interacción idónea consigo mismo y con otros partícipes del contexto laboral, ambiental y social.',
            'Comprender y producir textos en inglés escrito y hablado.'
        ]
    },
    {
        Inspección : [
            'Efectuar en productos o procesos metalmecánicos mediciones cumpliendo parámetros de efectividad operativa.',
            'Inspeccionar piezas, materiales y equipos con la técnica visual de acuerdo con la norma aplicable.',
            'Inspeccionar piezas, materiales y equipos con las técnicas de radiografía industrial de acuerdo con la norma aplicable.',
            'Inspeccionar piezas, materiales y equipos con la técnica del ultrasonido de acuerdo con la norma aplicable.',
            'Inspeccionar piezas, materiales y equipos con la técnica de partículas magnéticas de acuerdo con la norma aplicable.',
            'Inspeccionar piezas, materiales y equipos con la técnica de líquidos penetrantes de acuerdo con norma aplicable.',
            'Promover la interacción idónea del consumo mismo, con los demás y con la naturaleza en los contextos laboral y social.',
            'Comprender textos en inglés de forma escrita y auditiva.'
        ]
    }
];