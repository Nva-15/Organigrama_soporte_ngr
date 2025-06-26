// Datos del equipo con fotos
const equipo = {
  'alfredo': {
    nombre: 'Alfredo Novoa Linares',
    cargo: 'Gerente de Infraestructura y Soporte',
    descripcion: 'Profesional con amplia experiencia en gestión de tecnologías de la información, especializado en infraestructura y soporte técnico. Lidera proyectos estratégicos para garantizar la operatividad y eficiencia tecnológica de la organización.',
    hobby: 'Aficionado al ciclismo de montaña y lector de novelas históricas',
    cumpleanos: '16/08/1979',
    ingreso: '10/05/2020',
    foto: 'img/alfredo.png'
  },
  'jose-carlos': {
    nombre: 'Jose Carlos Ruiz Sanchez',
    cargo: 'Jefe de Soporte',
    descripcion: 'Profesional con sólida trayectoria en soporte técnico y gestión de equipos. Coordina y supervisa las actividades de soporte garantizando tiempos de respuesta eficientes y la satisfacción del usuario.',
    hobby: 'Lectura de tecnología aplicada y ciclismo urbano',
    cumpleanos: '10/11/1980',
    ingreso: '10/05/2010',
    foto: 'img/neiser.png'
  },
  // Supervisores
  'joel': {
    nombre: 'Joel Angel Sanchez Sanchez',
    cargo: 'Supervisor de SP-HD-NOC',
    descripcion: 'Supervisa las operaciones del Help Desk y el NOC, asegurando el cumplimiento de SLA y la mejora continua del servicio.',
    hobby: 'Análisis de videojuegos y tácticas de fútbol',
    cumpleanos: '16/05/1994',
    ingreso: '15/08/2015',
    foto: 'img/neiser.png'
  },
  'andres-ramos': {
    nombre: 'Andres Saul Ramos Sanchez',
    cargo: 'Supervisor de HD',
    descripcion: 'Encargado de coordinar y supervisar el Help Desk. Se enfoca en mejorar la atención al usuario final y optimizar los procesos de soporte.',
    hobby: 'Fútbol competitivo y tecnología móvil',
    cumpleanos: '21/06/1993',
    ingreso: '15/08/2015',
    foto: 'img/andres.png'
  },
  'sergio-acosta': {
    nombre: 'Sergio Augusto Acosta Huapaya',
    cargo: 'Supervisor de SOP',
    descripcion: 'Lidera el equipo de soporte especializado, gestionando incidencias complejas y promoviendo buenas prácticas técnicas.',
    hobby: 'Fotografía urbana y exploración de destinos culturales',
    cumpleanos: '01/06/1990',
    ingreso: '22/07/1985',
    foto: 'img/sergio.png'
  },
  'leo-cordova': {
    nombre: 'Leo Marcelino Cordova Cucho',
    cargo: 'Supervisor de SOP',
    descripcion: 'Gestor técnico con enfoque en soporte especializado y mejoras en la infraestructura. Facilita capacitaciones técnicas.',
    hobby: 'Producción musical y cocina experimental',
    cumpleanos: '15/08/1994',
    ingreso: '15/08/2017',
    foto: 'img/leo.png'
  },
  'geam-pari': {
    nombre: 'Geam Franco Alexis Pari Pinedo',
    cargo: 'Supervisor de NOC',
    descripcion: 'Responsable de la supervisión del centro de operaciones de red (NOC), monitorea y analiza el estado de los servicios de red 24/7.',
    hobby: 'Senderismo en montaña y armado de PC de alto rendimiento',
    cumpleanos: '10/09/1994',
    ingreso: '12/10/2014',
    foto: 'img/geam.png'
  },
   // Tecnicos de soporte
  'eli-neiser': {
    nombre: 'Eli Neiser Vasquez Alarcon',
    cargo: 'Líder Técnico (LT)',
    descripcion: 'Líder técnico enfocado en soporte de primer y segundo nivel, con experiencia en diagnóstico y resolución efectiva de incidencias.',
    hobby: 'Música urbana, cine de acción y fútbol',
    cumpleanos: '15/05/1996',
    ingreso: '04/03/2019',
    foto: 'img/neiser.png'
  },
  'jean-lopez': {
    nombre: 'Jean Carlos Lopez Sanchez',
    cargo: 'Líder Técnico (LT)',
    descripcion: 'Especialista en soporte avanzado y automatización de procesos. Destaca por su enfoque estructurado y su liderazgo técnico.',
    hobby: 'Electrónica aplicada y robótica casera',
    cumpleanos: '04/03/1991',
    ingreso: '22/06/2019',
    foto: 'img/neiser.png'
  },
  'axel-aguirre': {
    nombre: 'Axel Aguirre Encarnacion',
    cargo: 'Líder Técnico (LT)',
    descripcion: 'Profesional especializado en infraestructura tecnológica, con fuerte conocimiento en redes LAN/WAN y seguridad.',
    hobby: 'E-sports y running',
    cumpleanos: '04/08/1998',
    ingreso: '10/09/2020',
    foto: 'img/axel.png'
  },
  'marvin-porta': {
    nombre: 'Marvin Ivan Porta Evangelista',
    cargo: 'Técnico de Soporte',
    descripcion: 'Técnico responsable del soporte de primer nivel, experto en atención al usuario y resolución de incidencias comunes.',
    hobby: 'Artesanía en madera y pesca deportiva',
    cumpleanos: '27/05/2000',
    ingreso: '03/03/2013',
    foto: 'img/neiser.png'
  },
  'shirley-gonzales': {
    nombre: 'Shirley Carolina Gonzales Palacios',
    cargo: 'Técnico de Soporte',
    descripcion: 'Encargada de atención al usuario final, con énfasis en la empatía y rapidez de solución.',
    hobby: 'Arte digital y cocina saludable',
    cumpleanos: '27/09/2003',
    ingreso: '03/03/2013',
    foto: 'img/shirley.png'
  },
  'eric': {
    nombre: 'Eric Guerreros Huaman',
    cargo: 'Técnico de Soporte',
    descripcion: 'Brinda soporte técnico a usuarios internos, garantizando continuidad operativa.',
    hobby: 'Modelismo y ciclismo de ruta',
    cumpleanos: '08/09/1996',
    ingreso: '03/03/2013',
    foto: 'img/neiser.png'
  },
  'brando': {
    nombre: 'Brando Renato Medina Vasquez',
    cargo: 'Técnico de Soporte',
    descripcion: 'Soporte técnico especializado en mantenimiento preventivo y correctivo.',
    hobby: 'Cine de ciencia ficción y mecánica',
    cumpleanos: '21/09/1994',
    ingreso: '03/03/2013',
    foto: 'img/brando.png'
  },
  'miguel': {
    nombre: 'Miguel Angel Ramirez Huarancca',
    cargo: 'Técnico de Soporte',
    descripcion: 'Atención de incidencias, instalación de software y soporte en sitio.',
    hobby: 'Automovilismo y juegos de estrategia',
    cumpleanos: '26/02/1996',
    ingreso: '03/03/2013',
    foto: 'img/miguel.png'
  },
  'rodrigo': {
    nombre: 'Rodrigo Villanueva Vasquez',
    cargo: 'Técnico de Soporte',
    descripcion: 'Asiste al personal en temas técnicos relacionados a hardware, redes y software.',
    hobby: 'Viajes cortos y tecnología de consumo',
    cumpleanos: '12/11/1998',
    ingreso: '03/03/2013',
    foto: 'img/neiser.png'
  },
  'jean-mejia': {
    nombre: 'Jean Pierre Jesus Mejia Mango',
    cargo: 'Técnico de Soporte',
    descripcion: 'Técnico con experiencia en entornos Windows y gestión de incidencias por ticket.',
    hobby: 'Escalada y lectura de fantasía',
    cumpleanos: '14/06/1996',
    ingreso: '03/03/2013',
    foto: 'img/neiser.png'
  },
  'mirian': {
    nombre: 'Miriam Ruiz Puma',
    cargo: 'Back Office (BO)',
    descripcion: 'Apoyo administrativo en procesos logísticos y gestión de proveedores técnicos.',
    hobby: 'Organización de eventos y diseño artesanal',
    cumpleanos: '03/08/1995',
    ingreso: '03/03/2013',
    foto: 'img/miriam.png'
  },
   // Equipo HD
  'naim-cuya': {
    nombre: 'Naim Victor Cuya Delesma',
    cargo: 'Back Office (BO)',
    descripcion: 'Gestión de tickets, soporte documental y procesos de calidad interna.',
    hobby: 'Ensayo creativo y novelas de ciencia ficción',
    cumpleanos: '10/06/1996',
    ingreso: '18/11/2019',
    foto: 'img/neiser.png'
  },
  'sheyla': {
    nombre: 'Sheyla Galarza Galarza',
    cargo: 'Back Office (BO)',
    descripcion: 'Soporte a la operativa administrativa y control de calidad de atención al cliente.',
    hobby: 'Baile moderno y pintura en acrílico',
    cumpleanos: '14/07/1996',
    ingreso: '05/05/2021',
    foto: 'img/neiser.png'
  },
  'joseph': {
    nombre: 'Joseph Alexander Jaramillo Alvarez',
    cargo: 'Back Office (BO)',
    descripcion: 'Encargado de la documentación operativa y seguimiento de requerimientos técnicos.',
    hobby: 'Diseño de muebles y fotografía de paisajes',
    cumpleanos: '14/10/1997',
    ingreso: '03/03/2013',
    foto: 'img/neiser.png'
  },
  'anderson': {
    nombre: 'Anderson Adrian Pisfil Maza',
    cargo: 'Back Office (BO)',
    descripcion: 'Asistencia en tareas de monitoreo de tickets y gestión interna.',
    hobby: 'Dibujo digital y edición de video',
    cumpleanos: '23/04/2001',
    ingreso: '03/03/2013',
    foto: 'img/anderson.png'
  },
  'bruno': {
    nombre: 'Bruno Evzen Burgos Bardales',
    cargo: 'Técnico de HD',
    descripcion: 'Encargado del registro y clasificación de incidencias, soporte remoto y presencial.',
    hobby: 'Skateboarding y reparación de gadgets',
    cumpleanos: '08/08/2000',
    ingreso: '03/03/2013',
    foto: 'img/neiser.png'
  },
  'oscar': {
    nombre: 'Oscar Grimaldo Torres Venegas',
    cargo: 'Técnico de HD',
    descripcion: 'Responsable de atención al usuario, seguimiento de casos y cierre de incidencias.',
    hobby: 'Cómics y mantenimiento de hardware',
    cumpleanos: '16/03/2000',
    ingreso: '16/03/2013',
    foto: 'img/neiser.png'
  },
  'sthephanny': {
    nombre: 'Sthephanny Naomy Cristal Callan Vicente',
    cargo: 'Técnico de HD',
    descripcion: 'Atención al cliente mediante canales digitales y telefónicos, con foco en la experiencia del usuario.',
    hobby: 'Diseño de uñas y decoración creativa',
    cumpleanos: '22/03/2004',
    ingreso: '03/03/2013',
    foto: 'img/neiser.png'
  },
  'anyela': {
    nombre: 'Anyela Melissa Luna Huamani',
    cargo: 'Técnico de HD',
    descripcion: 'Soporte técnico de primer contacto. Enfocada en brindar soluciones rápidas y efectivas.',
    hobby: 'Lectura romántica y canto',
    cumpleanos: '22/11/1992',
    ingreso: '03/03/2013',
    foto: 'img/neiser.png'
  },
  'alfonso': {
    nombre: 'Alfonso Giampierre Rios Rodriguez',
    cargo: 'Técnico de HD',
    descripcion: 'Encargado del registro y clasificación de incidencias, soporte remoto y presencial.',
    hobby: 'Skateboarding y reparación de gadgets',
    cumpleanos: '10/08/1999',
    ingreso: '03/03/2013',
    foto: 'img/alfonso.png'
  },
   // Equipo NOC
  'hans': {
    nombre: 'Hans Joan Cutti Ciprian',
    cargo: 'Técnico de NOC',
    descripcion: 'Monitoreo de redes, análisis de logs y respuesta temprana ante eventos críticos.',
    hobby: 'Series de suspenso y gaming competitivo',
    cumpleanos: '27/05/2002',
    ingreso: '30/07/2018',
    foto: 'img/hans.png'
  },
  'luis': {
    nombre: 'Luis Isaac Talaverano Ramirez',
    cargo: 'Técnico de NOC',
    descripcion: 'Gestión de redes y administración básica de servidores. Soporte a operaciones críticas.',
    hobby: 'Tocar guitarra y torneos de fútbol',
    cumpleanos: '20/01/1999',
    ingreso: '14/02/2022',
    foto: 'img/neiser.png'
  },
  'yesenia': {
    nombre: 'Yesenia Sheyla Calixtro Laurente',
    cargo: 'Técnico de NOC',
    descripcion: 'Responsable del monitoreo continuo de sistemas y soporte en turnos rotativos.',
    hobby: 'Cine independiente y senderismo',
    cumpleanos: '21/02/1997',
    ingreso: '30/07/2018',
    foto: 'img/neiser.png'
  }
};

  
  // Mostrar próximos cumpleaños
  function actualizarProximosCumpleanos() {
    const hoy = new Date();
    const cumpleanosProximos = [];
    
    for (const id in equipo) {
      const [dia, mes] = equipo[id].cumpleanos.split('/').map(Number);
      const fechaCumple = new Date(hoy.getFullYear(), mes - 1, dia);
      
      // Si el cumpleaños ya pasó este año, verificar el próximo año
      if (fechaCumple < hoy) {
        fechaCumple.setFullYear(hoy.getFullYear() + 1);
      }
      
      const diasRestantes = Math.floor((fechaCumple - hoy) / (1000 * 60 * 60 * 24));
      
      if (diasRestantes <= 30) {
        cumpleanosProximos.push({
          nombre: equipo[id].nombre,
          dias: diasRestantes,
          fecha: `${dia}/${mes}`
        });
      }
    }
    // Ordenar por días restantes
  cumpleanosProximos.sort((a, b) => a.dias - b.dias);

  const notificacion = document.getElementById('cumpleanos-notificacion');
  notificacion.innerHTML = ''; // Limpiar contenido previo

  if (cumpleanosProximos.length > 0) {
    const lista = document.createElement('ul');
    lista.style.paddingLeft = '20px';

    cumpleanosProximos.slice(0, 3).forEach(persona => {
      const item = document.createElement('li');
      item.textContent = `${persona.nombre} (${persona.fecha}) - ${persona.dias} días`;
      lista.appendChild(item);
    });

    notificacion.appendChild(lista);

    if (cumpleanosProximos.length > 3) {
      const ellipsis = document.createElement('p');
      ellipsis.textContent = '...';
      notificacion.appendChild(ellipsis);
    }
  } else {
    notificacion.textContent = 'No hay cumpleaños próximos en los próximos 30 días';
  }
  }
  
  // Calcular tiempo en la empresa
  function calcularTiempoEmpresa(fechaIngreso) {
    const [dia, mes, anio] = fechaIngreso.split('/').map(Number);
    const fechaIng = new Date(anio, mes - 1, dia);
    const hoy = new Date();
    
    let años = hoy.getFullYear() - fechaIng.getFullYear();
    let meses = hoy.getMonth() - fechaIng.getMonth();
    
    if (meses < 0 || (meses === 0 && hoy.getDate() < fechaIng.getDate())) {
      años--;
      meses += 12;
    }
    
    return `${años} año${años !== 1 ? 's' : ''} y ${meses} mes${meses !== 1 ? 'es' : ''}`;
  }
  
  // Mostrar perfil con foto
  function mostrarPerfil(id) {
    const miembro = equipo[id];
    if (!miembro) return;
    
    document.getElementById('perfil-nombre').textContent = miembro.nombre;
    document.getElementById('perfil-cargo').textContent = miembro.cargo;
    document.getElementById('perfil-descripcion').textContent = miembro.descripcion;
    document.getElementById('perfil-hobby').textContent = miembro.hobby;
    document.getElementById('perfil-cumpleanos').textContent = miembro.cumpleanos;
    document.getElementById('perfil-ingreso').textContent = miembro.ingreso;
    
    // Mostrar la foto del perfil
    const fotoPerfil = document.getElementById('perfil-foto');
    fotoPerfil.src = miembro.foto || 'fotos/default.jpg';
    fotoPerfil.alt = `Foto de ${miembro.nombre}`;
    
    const tiempoEmpresa = calcularTiempoEmpresa(miembro.ingreso);
    document.getElementById('tiempo-empresa').textContent = 
      `Este colaborador lleva ${tiempoEmpresa} en la empresa`;
    
    document.getElementById('perfil-modal').style.display = 'block';
  }
  
  // Cerrar modal
  function cerrarModal() {
    document.getElementById('perfil-modal').style.display = 'none';
  }
  
  // Cerrar al hacer clic fuera del modal
  window.onclick = function(event) {
    const modal = document.getElementById('perfil-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
  // Inicializar
  document.addEventListener('DOMContentLoaded', function() {
    actualizarProximosCumpleanos();
  });