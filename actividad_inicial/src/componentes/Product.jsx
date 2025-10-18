function Product({ guitar }) {
  return (
    <div className="producto">
      <img src={guitar.image} alt={guitar.name} />
      <h3>{guitar.name}</h3>
      <p>{guitar.description}</p>
      <p className="precio">{guitar.price}€</p>
      <button>Añadir al carrito</button>
    </div>
  )
}

export default Product