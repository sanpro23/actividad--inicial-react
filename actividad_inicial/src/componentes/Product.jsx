
function Product({ name, price, image, description, alt }) {

  return (
    <div className="producto">
      <img src={image} alt={alt} />
      <h3>{name}</h3>
      <p>{price}€</p>
      <p>{description}</p>
      <button onClick={() => alert(`Añadido al carrito: ${name}`)}>
        <i className="fas fa-shopping-cart"></i>Añadir al Carrito
      </button>
    </div>
  )
}

export default Product