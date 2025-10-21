

function Header() {
    return (
        <>
            {/*Barra de navegacion superior*/}
            <nav className="nav-menu">
                <span className="menu-frase">LA SEXTA CUERDA</span>
                <ul>
                    <li><a href="#Inicio">Inicio</a></li>
                    <li><a href="#Productos">Procuctos</a></li>
                    <li><a href="#Peteciones">Peticiones</a></li>
                    <li><a href="#Contacto">Contacto</a></li>
                </ul>
            </nav>

            {/*Header principal con imagen de fondo*/}
            <header className="header-modern">
                <div className="header-background">
                    <img src="/mastil3.webp" alt="fondo-header" />
                    <div className="header-overlay"></div>  {/* Capa de superposición */}
                </div>

                {/* Contenido del header */}
                <div className="header-content">
                    <div className="header-title-wrapper">  {/* agrupa el titulo y linea decorativa*/}
                        <h1>GUITARRAS Y ACCESORIOS DE SEGUNDAMANO</h1>
                    </div>
                </div>

                {/*Degradado blanco */}
                <div className="header-fade"></div>
            </header >
        </>
    );
}


export default Header 