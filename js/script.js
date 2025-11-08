const { useState, useEffect } = React;

// Página de Inicio
const PaginaInicio = ({ filtros, setFiltros }) => {
    const [cochesParaMostrar, setCochesParaMostrar] = useState([]);
    const [cocheSeleccionado, setCocheSeleccionado] = useState(null);

    useEffect(() => {
        filtrarCoches();
    }, [filtros]);

    const filtrarCoches = () => {
        let coches = filtros.tipo === 'venta' ? cochesVenta : 
                     filtros.tipo === 'alquiler' ? cochesAlquiler : 
                     todosLosCoches;
        
        if (filtros.marca !== 'todas') {
            coches = coches.filter(c => c.marca.toLowerCase() === filtros.marca.toLowerCase());
        }

        if (filtros.estado !== 'todos') {
            coches = coches.filter(c => c.estado === filtros.estado);
        }
        
        setCochesParaMostrar(coches);
    };

    const cochesSolicitados = cochesVenta.filter(c => c.popular);

    const abrirModal = (coche) => {
        setCocheSeleccionado(coche);
    };

    const cerrarModal = () => {
        setCocheSeleccionado(null);
    };

    return (
        <>
            <Carrusel />
            <Filtros filtros={filtros} setFiltros={setFiltros} />
            
            <section className="galeria">
                <div className="container">
                    <h2>Nuestros Vehículos</h2>
                    <div className="coches-grid">
                        {cochesParaMostrar.length > 0 ? (
                            cochesParaMostrar.map(coche => (
                                <TarjetaCoche key={coche.id} coche={coche} onVerMas={abrirModal} />
                            ))
                        ) : (
                            <p className="no-results">No se encontraron vehículos con los filtros seleccionados</p>
                        )}
                    </div>
                </div>
            </section>

            <section className="mas-solicitados">
                <div className="container">
                    <h2>Coches Más Solicitados</h2>
                    <div className="coches-grid">
                        {cochesSolicitados.map(coche => (
                            <TarjetaCoche key={coche.id} coche={coche} onVerMas={abrirModal} />
                        ))}
                    </div>
                </div>
            </section>

            <Servicios />
            <Contacto />

            {cocheSeleccionado && (
                <ModalDetalleCoche coche={cocheSeleccionado} onClose={cerrarModal} />
            )}
        </>
    );
};

// Página de Venta
const PaginaVenta = () => {
    const [cocheSeleccionado, setCocheSeleccionado] = useState(null);

    const abrirModal = (coche) => {
        setCocheSeleccionado(coche);
    };

    const cerrarModal = () => {
        setCocheSeleccionado(null);
    };

    return (
        <>
            <section className="galeria">
                <div className="container">
                    <h2>Coches en Venta</h2>
                    <div className="coches-grid">
                        {cochesVenta.map(coche => (
                            <TarjetaCoche key={coche.id} coche={coche} onVerMas={abrirModal} />
                        ))}
                    </div>
                </div>
            </section>

            {cocheSeleccionado && (
                <ModalDetalleCoche coche={cocheSeleccionado} onClose={cerrarModal} />
            )}
        </>
    );
};

// Página de Alquiler
const PaginaAlquiler = () => {
    const [cocheSeleccionado, setCocheSeleccionado] = useState(null);

    const abrirModal = (coche) => {
        setCocheSeleccionado(coche);
    };

    const cerrarModal = () => {
        setCocheSeleccionado(null);
    };

    return (
        <>
            <section className="galeria">
                <div className="container">
                    <h2>Coches en Alquiler</h2>
                    <div style={{
                        backgroundColor: 'var(--color-accent)',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        marginBottom: '2rem',
                        border: '2px solid var(--color-primary)'
                    }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', textAlign: 'center' }}>
                            <strong>💡 Información:</strong> Tarifas por día. Consulta ofertas especiales para alquileres de larga duración.
                        </p>
                    </div>
                    <div className="coches-grid">
                        {cochesAlquiler.map(coche => (
                            <TarjetaCoche key={coche.id} coche={coche} onVerMas={abrirModal} />
                        ))}
                    </div>
                </div>
            </section>
            <Contacto />

            {cocheSeleccionado && (
                <ModalDetalleCoche coche={cocheSeleccionado} onClose={cerrarModal} />
            )}
        </>
    );
};

// Página de Taxis (sin cambios)
const PaginaTaxis = () => {
    return (
        <section className="proximamente">
            <div className="container">
                <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
                <h1>Próximamente</h1>
                <p>Estamos trabajando en este servicio. ¡Vuelve pronto!</p>
            </div>
        </section>
    );
};

// Página Sobre Nosotros (sin cambios)
const PaginaNosotros = () => {
    return (
        <section className="sobre-nosotros">
            <div className="container">
                <div className="sobre-contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>
                        AutosIKA es un concesionario líder con más de 15 años de experiencia en el mercado automotriz.
                        Nos especializamos en la venta, alquiler y asesoramiento personalizado de vehículos.
                    </p>
                    <p>
                        Nuestro compromiso es ofrecer calidad, transparencia y el mejor servicio al cliente,
                        ayudándote a encontrar el vehículo perfecto para tus necesidades.
                    </p>
                </div>

                <div className="mision-vision">
                    <div className="mision-card">
                        <h3>Nuestra Misión</h3>
                        <p>
                            Proporcionar soluciones de movilidad confiables y accesibles, con un servicio excepcional
                            que supere las expectativas de nuestros clientes.
                        </p>
                    </div>
                    <div className="vision-card">
                        <h3>Nuestra Visión</h3>
                        <p>
                            Ser el concesionario de referencia en la región, reconocido por nuestra integridad,
                            innovación y compromiso con la satisfacción del cliente.
                        </p>
                    </div>
                </div>

                <div className="ubicacion-card">
                    <h3>Ubicación y Contacto</h3>
                    <div className="ubicacion-info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <div className="ubicacion-detalles">
                            <p><strong>Dirección:</strong> Bata, Ciudad</p>
                            <p><strong>Horario:</strong> Lunes a Sábado, 9:00 - 19:00</p>
                            <p><strong>Teléfono:</strong> +240 222 633 211</p>
                            <p><strong>Email:</strong> info@autosika.com</p>
                        </div>
                    </div>
                </div>

                <Servicios />
                <Contacto />
            </div>
        </section>
    );
};

// Aplicación Principal
const App = () => {
    const [paginaActual, setPaginaActual] = useState('inicio');
    const [filtros, setFiltros] = useState({
        tipo: 'todos',
        marca: 'todas',
        estado: 'todos'
    });

    const renderizarPagina = () => {
        switch (paginaActual) {
            case 'inicio':
                return <PaginaInicio filtros={filtros} setFiltros={setFiltros} />;
            case 'venta':
                return <PaginaVenta />;
            case 'alquiler':
                return <PaginaAlquiler />;
            case 'taxis':
                return <PaginaTaxis />;
            case 'nosotros':
                return <PaginaNosotros />;
            default:
                return <PaginaInicio filtros={filtros} setFiltros={setFiltros} />;
        }
    };

    return (
        <>
            <Header paginaActual={paginaActual} setPagina={setPaginaActual} />
            <main>
                {renderizarPagina()}
            </main>
            <Footer setPagina={setPaginaActual} />
        </>
    );
};

// Renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);