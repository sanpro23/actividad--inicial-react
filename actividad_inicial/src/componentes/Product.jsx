
function Product({ id, name, price, image, description }) {

  return (
    <div className="producto">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}€</p>
      <p>{description}</p>
      <button>Añadir al carrito</button>
    </div>
  )
}

export default Product