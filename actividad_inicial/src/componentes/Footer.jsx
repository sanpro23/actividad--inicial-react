
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contacto">
        <p className="calle">Calle El Pistolin, 123</p>
        <p className="ciudad">Las Cabezas de San Juan,Sevilla(41730)España</p>
        <p className="telefono">+34 600 070 001</p>
        <p className="email">info@lasextacuerda.com</p>
        <p className="copyright">© 2025 LA SEXTA CUERDA</p>
      </div>

      <div className="footer-horario">
        <p className="footer-slogan">GUITARRAS AL MEJOR PRECIO</p>
        <p>Lunes a Viernes: 10:00–18:00</p>
      </div>

      <form className="footer-newsletter">
        <label htmlFor="email">Suscríbete:</label>
        <input type="email" id="email" placeholder="Tu correo" />
        <button>Enviar</button>
      </form>


    </footer>
  )
}

export default Footer