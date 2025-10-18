import Product from "./Product";

function Products({ data }) {
  return (
    <main className="productos-container">
      {data.map((guitar) => (
        <Product 
          key={guitar.id} 
          guitar={guitar}
        />
      ))}
    </main>
  )
}

export default Products