// Datos de los coches disponibles
const cochesVenta = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2023,
        precio: 25000,
        imagen: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
        tipo: 'venta',
        estado: 'nuevo',
        popular: true
    },
    {
        id: 2,
        marca: 'Honda',
        modelo: 'Civic',
        año: 2022,
        precio: 23000,
        imagen: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400',
        tipo: 'venta',
        estado: 'seminuevo',
        popular: true
    },
    {
        id: 3,
        marca: 'Ford',
        modelo: 'Mustang',
        año: 2023,
        precio: 45000,
        imagen: 'https://images.unsplash.com/photo-1584345604476-8ec5f5a5b7ba?w=400',
        tipo: 'venta',
        estado: 'nuevo',
        popular: false
    },
    {
        id: 4,
        marca: 'Chevrolet',
        modelo: 'Camaro',
        año: 2022,
        precio: 42000,
        imagen: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400',
        tipo: 'venta',
        estado: 'seminuevo',
        popular: true
    },
    {
        id: 5,
        marca: 'BMW',
        modelo: 'Serie 3',
        año: 2023,
        precio: 50000,
        imagen: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
        tipo: 'venta',
        estado: 'nuevo',
        popular: false
    },
    {
        id: 6,
        marca: 'Mercedes',
        modelo: 'Clase C',
        año: 2023,
        precio: 55000,
        imagen: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400',
        tipo: 'venta',
        estado: 'nuevo',
        popular: false
    },
    {
        id: 7,
        marca: 'Toyota',
        modelo: 'Camry',
        año: 2022,
        precio: 28000,
        imagen: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
        tipo: 'venta',
        estado: 'seminuevo',
        popular: false
    },
    {
        id: 8,
        marca: 'Honda',
        modelo: 'Accord',
        año: 2023,
        precio: 30000,
        imagen: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400',
        tipo: 'venta',
        estado: 'nuevo',
        popular: false
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
        tipo: 'alquiler',
        estado: 'nuevo',
        popular: false
    },
    {
        id: 10,
        marca: 'Nissan',
        modelo: 'Versa',
        año: 2022,
        precio: 45,
        imagen: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
        tipo: 'alquiler',
        estado: 'seminuevo',
        popular: false
    },
    {
        id: 11,
        marca: 'Hyundai',
        modelo: 'Accent',
        año: 2023,
        precio: 48,
        imagen: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400',
        tipo: 'alquiler',
        estado: 'nuevo',
        popular: false
    },
    {
        id: 12,
        marca: 'Kia',
        modelo: 'Rio',
        año: 2022,
        precio: 47,
        imagen: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
        tipo: 'alquiler',
        estado: 'seminuevo',
        popular: false
    },
    {
        id: 13,
        marca: 'Chevrolet',
        modelo: 'Spark',
        año: 2023,
        precio: 40,
        imagen: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400',
        tipo: 'alquiler',
        estado: 'nuevo',
        popular: false
    },
    {
        id: 14,
        marca: 'Ford',
        modelo: 'Fiesta',
        año: 2022,
        precio: 46,
        imagen: 'https://images.unsplash.com/photo-1584345604476-8ec5f5a5b7ba?w=400',
        tipo: 'alquiler',
        estado: 'seminuevo',
        popular: false
    }
];

// Imágenes del carrusel
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

// Exportar datos (para usar en otros archivos)
window.cochesVenta = cochesVenta;
window.cochesAlquiler = cochesAlquiler;
window.carruselImagenes = carruselImagenes;
window.todosLosCoches = [...cochesVenta, ...cochesAlquiler];