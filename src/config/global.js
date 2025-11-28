export default {
  global: {
    Name: 'Sistematización de resultados y transición agroecológica',
    Description:
      'Este componente  formativo consolida los resultados del diagnóstico participativo mediante los indicadores IPPTA, determinando el Estado de Transición Agroecológica del predio. A través de la recolección, valoración e interpretación contextual de datos, se identifican fortalezas y desequilibrios para la planificación predial. Integra saberes locales y herramientas técnicas, presentando experiencias de transición agroecológica globales y latinoamericanas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de recolección de información y seguridad en campo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Técnicas participativas para la recolección de información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Seguridad en campo: uso de Elementos de Protección Personal (EPP)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Protocolos de seguridad y bioseguridad rural',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Aplicación e interpretación de indicadores IPPTA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Selección de indicadores prediales según criterios técnicos y participativos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Sistematización de resultados en el formato IPPTA',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Interpretación del diagrama radial IPPTA',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La transición agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de transición agroecológica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Orientaciones para la planificación predial según el estado de transición agroecológica',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Experiencias de transición agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ejemplos exitosos en el mundo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Ejemplos exitosos en Latinoamérica',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ejemplos exitosos en Colombia',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La transición agroecológica',
      referencia:
        'FAO y Ministerio de Agricultura y Desarrollo Rural de Colombia. (2021). Guía de transición agroecológica para extensionistas y promotores rurales. ',
      tipo: 'Cartilla',
      link:
        'https://tapipedia.org/sites/default/files/af-guia_de_agroecologia-web_1.pdf ',
    },
    {
      tema: 'Experiencias de transición agroecológica',
      referencia:
        'FAO y Sembrando Capacidades. (2021). Experiencias de transición agroecológica en Colombia. ',
      tipo: 'Cartilla',
      link:
        'https://sembrandocapacidades.fao.org.co/wp-content/uploads/2022/01/11_Experiencias-de-transicion-agroecologica-en-Colombia_compressed.pdf',
    },
    {
      tema: 'Interpretación del diagrama radial IPPTA ',
      referencia:
        'Agencia de Desarrollo Rural Colombia. (2024). Tutorial del Intrumento de Planificación Predial para la Transición Agroecológica - IPPTA [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pE801QBON00&t=10s ',
    },
    {
      tema: 'Experiencias de transición agroecológica',
      referencia:
        'Dirección de Comunicación Institucional - FAUBA (2016). Bases agroecológicas de la transición – Miguel Altieri [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XMmQbrXbjKI ',
    },
    {
      tema: 'Ejemplos exitosos en el mundo',
      referencia:
        'USGS. (2022).Can rock dams reverse climate change? [Video]. YouTube.',
      tipo: 'Video ',
      link:
        'https://www.youtube.com/watch?v=c2tYI7jUdU0&list=PLZ_gacGTx7nWtwxAXtvBj2iajtuN1hZSI&index=16 ',
    },
    {
      tema: 'Ejemplos exitosos en el mundo',
      referencia:
        'Hope. (2022). Agricultura regenerativa: ¿el futuro?. [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=vWApHtc5aGY   ',
    },
    {
      tema: 'Ejemplos exitosos en el mundo',
      referencia:
        'Planet Wild. (2024). Una forma genial de restaurar el suelo muerto. [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=vG1H9Sg4lBM ',
    },
    {
      tema: 'Ejemplos exitosos en el mundo',
      referencia:
        'INTA Informa. (2018). La transicion agroecológica , paso a paso. [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=i7UWn49EyU8 ',
    },
    {
      tema: 'Ejemplos exitosos en el mundo',
      referencia:
        'Máshumus. (2023).10 años de Keyline y Agricultura Regenerativa en Rancho San Ricardo. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=zQyMmznZqQU&list=PLlxOQJvtoXA5uz-5sH5wXJMwMEOYy2Gb3',
    },
    {
      tema: 'Ejemplos exitosos en el mundo',
      referencia:
        'Agroecology Fund. (2024).Transición Agroecológica: Hacia la Soberanía Alimentaria en Cuba. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eWCzuQm48BU',
    },
    {
      tema: 'Ejemplos exitosos en Colombia',
      referencia:
        'La Tulpa. (2020).La Tulpa - Familias Nariñenses en la Agricultura Orgánica.  [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BVsK0WHkn0Y ',
    },
    {
      tema: 'Ejemplos exitosos en Colombia',
      referencia:
        'Gafpuravida. (2020). La Granja Pura Vida Comparte sus experiencias. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KHUscG8fKQw',
    },
    {
      tema: 'Ejemplos exitosos en Colombia',
      referencia:
        'Fondo Acción. (2022).Colombia Baja en Carbono - ASPROCIG.  [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MhddpT_T65o ',
    },
  ],
  glosario: [
    {
      termino: 'Agroecosistema',
      significado:
        'sistema vivo conformado por las relaciones entre suelo, agua, cultivos, animales, clima y familias rurales. Es la unidad de análisis y transformación en la transición agroecológica.',
    },
    {
      termino: 'Autonomía alimentaria',
      significado:
        'capacidad de las familias y comunidades rurales para producir, decidir y consumir alimentos sanos, diversos y culturalmente apropiados, sin depender de insumos externos ni mercados dominantes.',
    },
    {
      termino: 'Diagnóstico predial',
      significado:
        'proceso participativo que permite leer integralmente el estado del predio en dimensiones ecológicas, sociales, económicas y culturales, utilizando herramientas como los 21 indicadores IPPTA.',
    },
    {
      termino: 'Diálogo de saberes',
      significado:
        'encuentro horizontal entre conocimientos locales, científicos, normativos y ancestrales, que orienta la construcción colectiva de propuestas agroecológicas.',
    },
    {
      termino: 'Estado de Transición Agroecológico',
      significado:
        'nivel de avance del predio en su proceso de transformación agroecológica, evaluado mediante el diagrama radial IPPTA y la lectura de indicadores críticos.',
    },
    {
      termino: 'Planificación participativa',
      significado:
        'metodología que involucra activamente a las familias rurales en la toma de decisiones, priorización de acciones y diseño de estrategias de transformación territorial.',
    },
    {
      termino: 'Puntos críticos',
      significado:
        'aspectos del agroecosistema con baja valoración o alto impacto sistémico que requieren atención prioritaria en el plan de acción (ej. manejo de suelos, agua, semillas).',
    },
    {
      termino: 'Transición agroecológica',
      significado:
        'proceso gradual y multidimensional de cambio hacia sistemas agroalimentarios sostenibles, justos y culturalmente arraigados, que se vive en la finca, la comunidad y el paisaje.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia de Desarrollo Rural. (2024). IPPTA - Planificación predial para la transición agroecológica [StoryMap].',
      link:
        'https://storymaps.arcgis.com/stories/f93c00c8f99b41f8bdbc669dac71f592',
    },
    {
      referencia:
        'FAO & Sembrando Capacidades. (2021). Transiciones agroecológicas: prácticas y experiencias en Colombia. Organización de las Naciones Unidas para la Alimentación y la Agricultura. ',
      link: 'https://sembrandocapacidades.fao.org.co',
    },
    {
      referencia:
        'FAO & Sembrando Capacidades. (2022). Experiencias de transición agroecológica en Colombia. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link:
        'https://sembrandocapacidades.fao.org.co/wp-content/uploads/2022/01/11_Experiencias-de-transicion-agroecologica-en-Colombia_compressed.pdf',
    },
    {
      referencia:
        'Freire, P. (1984). ¿Extensión o comunicación? La concientización en el medio rural. México: Siglo XXI Editores.',
      link: '',
    },
    {
      referencia:
        'Sánchez, M. J., Fernández, M., & Díaz, J. C. (2021). Técnicas e instrumentos de recolección de información: análisis y procesamiento realizado por el investigador cualitativo. Revista científica UISRAEL, 8(1), 107 - 121.',
      link: '',
    },
    {
      referencia:
        'Tapipedia. (2021). Guía de transición agroecológica para extensionistas y promotores rurales. FAO Colombia. ',
      link:
        'https://tapipedia.org/es/content/gu%C3%ADa-de-transici%C3%B3n-la-para-extensionistas-y-promotores-rurales-en-colombia',
    },
    {
      referencia:
        'Tittonell, P. (2019). Las transiciones agroecológicas: múltiples escalas, niveles y desafíos. Revista de la Facultad de Ciencias Agrarias. Universidad Nacional de Cuyo, 51(1), 231 - 246.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Roger Fabián García Díaz',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'José Eduardo Solano  Rivero',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
