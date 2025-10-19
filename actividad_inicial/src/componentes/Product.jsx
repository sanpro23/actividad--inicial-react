
function Product({ id, name, price, image, description }) {

  const imageUrl = `/${id}.webp`;

  return (
    <div className="producto">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{price}€</p>
      <p>{description}</p>
      <button>Añadir al carrito</button>
    </div>
  )
}

export default Product