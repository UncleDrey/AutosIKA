// Datos de los coches disponibles con múltiples imágenes
const cochesVenta = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2023,
        precio: 25000,
        imagen: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
            'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800'
        ],
        tipo: 'venta',
        estado: 'nuevo',
        popular: true,
        descripcion: 'Toyota Corolla 2023 en excelente estado. Motor eficiente, sistema de seguridad avanzado y tecnología de última generación.',
        caracteristicas: ['Transmisión automática', 'Aire acondicionado', 'Sistema de audio premium', 'Cámara de reversa']
    },
    {
        id: 2,
        marca: 'Honda',
        modelo: 'Civic',
        año: 2022,
        precio: 23000,
        imagen: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800',
            'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
            'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
        ],
        tipo: 'venta',
        estado: 'seminuevo',
        popular: true,
        descripcion: 'Honda Civic 2022 seminuevo, bajo kilometraje. Diseño deportivo y rendimiento excepcional.',
        caracteristicas: ['Motor turbo', 'Asientos de cuero', 'Sistema de navegación', 'Control de crucero adaptativo']
    },
    {
        id: 3,
        marca: 'Ford',
        modelo: 'Mustang',
        año: 2023,
        precio: 45000,
        imagen: 'https://images.unsplash.com/photo-1584345604476-8ec5f5a5b7ba?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1584345604476-8ec5f5a5b7ba?w=800',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800'
        ],
        tipo: 'venta',
        estado: 'nuevo',
        popular: false,
        descripcion: 'Ford Mustang 2023, el icono americano. Potencia, estilo y tecnología en un solo vehículo.',
        caracteristicas: ['Motor V8', 'Modo deportivo', 'Escape deportivo', 'Llantas de aleación 19"']
    },
    {
        id: 4,
        marca: 'Chevrolet',
        modelo: 'Camaro',
        año: 2022,
        precio: 42000,
        imagen: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
        ],
        tipo: 'venta',
        estado: 'seminuevo',
        popular: true,
        descripcion: 'Chevrolet Camaro 2022, deportivo puro. Diseño agresivo y rendimiento superior.',
        caracteristicas: ['Motor V6 turbo', 'Suspensión deportiva', 'Frenos Brembo', 'Interior premium']
    },
    {
        id: 5,
        marca: 'BMW',
        modelo: 'Serie 3',
        año: 2023,
        precio: 50000,
        imagen: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
            'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800',
            'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
        ],
        tipo: 'venta',
        estado: 'nuevo',
        popular: false,
        descripcion: 'BMW Serie 3 2023, lujo y deportividad alemana. Tecnología de vanguardia.',
        caracteristicas: ['Tracción trasera', 'Sistema iDrive', 'Asientos deportivos', 'Faros LED adaptativos']
    },
    {
        id: 6,
        marca: 'Mercedes',
        modelo: 'Clase C',
        año: 2023,
        precio: 55000,
        imagen: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
            'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800',
            'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800'
        ],
        tipo: 'venta',
        estado: 'nuevo',
        popular: false,
        descripcion: 'Mercedes-Benz Clase C 2023, elegancia y confort. El estándar del lujo.',
        caracteristicas: ['Sistema MBUX', 'Asientos con masaje', 'Techo panorámico', 'Asistente de conducción']
    },
    {
        id: 7,
        marca: 'Toyota',
        modelo: 'Camry',
        año: 2022,
        precio: 28000,
        imagen: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
            'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800'
        ],
        tipo: 'venta',
        estado: 'seminuevo',
        popular: false,
        descripcion: 'Toyota Camry 2022, sedán familiar ideal. Comodidad y confiabilidad.',
        caracteristicas: ['Motor híbrido', 'Amplio espacio interior', 'Sistema de entretenimiento', 'Bajo consumo']
    },
    {
        id: 8,
        marca: 'Honda',
        modelo: 'Accord',
        año: 2023,
        precio: 30000,
        imagen: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800',
            'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
            'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
        ],
        tipo: 'venta',
        estado: 'nuevo',
        popular: false,
        descripcion: 'Honda Accord 2023, el sedán perfecto. Equilibrio entre lujo y practicidad.',
        caracteristicas: ['Sensores de estacionamiento', 'Pantalla táctil 10"', 'Apple CarPlay', 'Honda Sensing']
    }
];

const cochesAlquiler = [
    {
        id: 9,
        marca: 'Toyota',
        modelo: 'Yaris',
        año: 2023,
        precio: 50,
        imagen: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
        ],
        tipo: 'alquiler',
        estado: 'nuevo',
        popular: false,
        descripcion: 'Toyota Yaris 2023, ideal para ciudad. Económico y fácil de conducir.',
        caracteristicas: ['Aire acondicionado', 'Radio Bluetooth', 'Dirección asistida', 'Bajo consumo']
    },
    {
        id: 10,
        marca: 'Nissan',
        modelo: 'Versa',
        año: 2022,
        precio: 45,
        imagen: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
        ],
        tipo: 'alquiler',
        estado: 'seminuevo',
        popular: false,
        descripcion: 'Nissan Versa 2022, espacioso y confortable. Perfecto para viajes.',
        caracteristicas: ['Amplio maletero', 'Cámara trasera', 'Cruise control', 'USB y AUX']
    },
    {
        id: 11,
        marca: 'Hyundai',
        modelo: 'Accent',
        año: 2023,
        precio: 48,
        imagen: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800'
        ],
        tipo: 'alquiler',
        estado: 'nuevo',
        popular: false,
        descripcion: 'Hyundai Accent 2023, moderno y equipado. Ideal para tu día a día.',
        caracteristicas: ['Pantalla táctil', 'Sensores traseros', 'Conectividad smartphone', 'Climatizador']
    },
    {
        id: 12,
        marca: 'Kia',
        modelo: 'Rio',
        año: 2022,
        precio: 47,
        imagen: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800'
        ],
        tipo: 'alquiler',
        estado: 'seminuevo',
        popular: false,
        descripcion: 'Kia Rio 2022, diseño atractivo y eficiente. Garantía de calidad.',
        caracteristicas: ['Control de estabilidad', 'Frenos ABS', 'Airbags múltiples', 'Económico']
    },
    {
        id: 13,
        marca: 'Chevrolet',
        modelo: 'Spark',
        año: 2023,
        precio: 40,
        imagen: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800'
        ],
        tipo: 'alquiler',
        estado: 'nuevo',
        popular: false,
        descripcion: 'Chevrolet Spark 2023, compacto y ágil. Perfecto para estacionar.',
        caracteristicas: ['Fácil manejo', 'Bajo costo', 'Radio AM/FM', 'Ventanas eléctricas']
    },
    {
        id: 14,
        marca: 'Ford',
        modelo: 'Fiesta',
        año: 2022,
        precio: 46,
        imagen: 'https://images.unsplash.com/photo-1584345604476-8ec5f5a5b7ba?w=400',
        imagenes: [
            'https://images.unsplash.com/photo-1584345604476-8ec5f5a5b7ba?w=800',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800'
        ],
        tipo: 'alquiler',
        estado: 'seminuevo',
        popular: false,
        descripcion: 'Ford Fiesta 2022, divertido de conducir. Deportividad compacta.',
        caracteristicas: ['Suspensión deportiva', 'Sistema SYNC', 'Volante multifunción', 'Estilo juvenil']
    }
];

// Imágenes del carrusel (sin cambios)
const carruselImagenes = [
    {
        url: './images/yaris.jpg',
        titulo: 'Encuentra tu coche ideal',
        subtitulo: 'Venta • Alquiler • Asesoramiento'
    },
    {
        url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200',
        titulo: 'Los mejores precios del mercado',
        subtitulo: 'Financiación disponible'
    },
    {
        url: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1200',
        titulo: 'Asesoramiento profesional',
        subtitulo: 'Te ayudamos a elegir'
    }
];

// Exportar datos
window.cochesVenta = cochesVenta;
window.cochesAlquiler = cochesAlquiler;
window.carruselImagenes = carruselImagenes;
window.todosLosCoches = [...cochesVenta, ...cochesAlquiler];