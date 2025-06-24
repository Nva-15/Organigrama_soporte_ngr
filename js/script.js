// Datos del equipo con fotos
const equipo = {
    'jose-carlos': {
      nombre: 'JOSE CARLOS',
      cargo: 'Jefe de Soporte',
      descripcion: 'Responsable de la gestión general del equipo de soporte.',
      hobby: 'Ciclismo y lectura de tecnología',
      cumpleanos: '15/03/1980',
      ingreso: '10/05/2010',
      foto: 'img/neiser.png'
    },
    'andres-ramos': {
      nombre: 'ANDRES RAMOS',
      cargo: 'Supervisor de HD',
      descripcion: 'Supervisa el equipo de Help Desk y garantiza la calidad del servicio.',
      hobby: 'Fútbol y videojuegos',
      cumpleanos: '22/07/1985',
      ingreso: '15/08/2015',
      foto: 'img/neiser.png'
    },
    'sergio-acosta': {
      nombre: 'SERGIO ACOSTA',
      cargo: 'Supervisor de SOP',
      descripcion: 'Encargado del equipo de soporte técnico de segundo nivel.',
      hobby: 'Fotografía y viajes',
      cumpleanos: '03/11/1988',
      ingreso: '20/03/2016',
      foto: 'img/neiser.png'
    },
    'leo-cordova': {
      nombre: 'LEO CORDOVA',
      cargo: 'Supervisor de SOP',
      descripcion: 'Coordinador del equipo de soporte técnico especializado.',
      hobby: 'Música y cocina',
      cumpleanos: '18/09/1987',
      ingreso: '05/07/2017',
      foto: 'img/neiser.png'
    },
    'geam-pari': {
      nombre: 'GEAM PARI',
      cargo: 'Supervisor de NOC',
      descripcion: 'Responsable del centro de operaciones de red.',
      hobby: 'Trekking y tecnología',
      cumpleanos: '30/01/1983',
      ingreso: '12/10/2014',
      foto: 'img/neiser.png'
    },
    'eli-neiser': {
      nombre: 'ELI NEISER VASQUEZ',
      cargo: 'Líder Técnico (LT)',
      descripcion: 'Técnico en soporte TI egresado de SENATI.',
      hobby: 'Jugar futbol, escuchar música y ver película',
      cumpleanos: '15/05/1996',
      ingreso: '03/03/2019',
      
      foto: 'img/neiser.png'
    },
    'jean-lopez': {
      nombre: 'JEAN LOPEZ',
      cargo: 'Líder Técnico (LT)',
      descripcion: 'Experto en sistemas y soporte técnico avanzado.',
      hobby: 'Robótica y electrónica',
      cumpleanos: '08/04/1989',
      ingreso: '22/06/2019',
      foto: 'img/neiser.png'
    },
    'axel-aguirre': {
      nombre: 'AXEL AGUIRRE',
      cargo: 'Líder Técnico (LT)',
      descripcion: 'Especialista en infraestructura y redes.',
      hobby: 'Videojuegos y deportes',
      cumpleanos: '14/02/1992',
      ingreso: '10/09/2020',
      foto: 'img/neiser.png'
    },
    'marvin-porta': {
      nombre: 'Marvin Porta',
      cargo: 'Técnico de Soporte',
      descripcion: 'Soporte técnico de primer nivel con amplia experiencia.',
      hobby: 'Pesca y carpintería',
      cumpleanos: '19/05/1984',
      ingreso: '03/03/2013',
      foto: 'img/neiser.png'
    },
    'shirley-gonzales': {
      nombre: 'Shirley Gonzales',
      cargo: 'Técnico de Soporte',
      descripcion: 'Soporte técnico de primer nivel con amplia experiencia.',
      hobby: 'Pesca y carpintería',
      cumpleanos: '19/05/1984',
      ingreso: '03/03/2013',
      foto: 'img/shirley.png'
    },
    'naim-cuya': {
      nombre: 'NAIM CUYA',
      cargo: 'Back Office (BO)',
      descripcion: 'Soporte administrativo y gestión de tickets.',
      hobby: 'Lectura y escritura',
      cumpleanos: '07/10/1991',
      ingreso: '18/11/2019',
      foto: 'img/neiser.png'
    },
    'sheyla': {
      nombre: 'SHEYLA',
      cargo: 'Back Office (BO)',
      descripcion: 'Atención al cliente y seguimiento de casos.',
      hobby: 'Baile y manualidades',
      cumpleanos: '28/08/1993',
      ingreso: '05/05/2021',
      foto: 'img/neiser.png'
    },
    'hanz': {
      nombre: 'HANZ',
      cargo: 'Técnico de NOC',
      descripcion: 'Monitoreo de red y respuesta a incidentes.',
      hobby: 'Cine y series',
      cumpleanos: '12/06/1986',
      ingreso: '30/07/2018',
      foto: 'img/neiser.png'
    },
    'luis': {
      nombre: 'LUIS',
      cargo: 'Técnico de NOC',
      descripcion: 'Administración de servidores y redes.',
      hobby: 'Fútbol y música',
      cumpleanos: '09/01/1994',
      ingreso: '14/02/2022',
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
    
    if (cumpleanosProximos.length > 0) {
      const proximos = cumpleanosProximos.slice(0, 3).map(persona => 
        `${persona.nombre} (${persona.fecha}) - ${persona.dias} días`
      ).join(', ');
      
      notificacion.textContent = proximos + (cumpleanosProximos.length > 3 ? '...' : '');
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