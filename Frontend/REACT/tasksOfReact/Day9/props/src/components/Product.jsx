const Product = ({Product}) => {
  return (
    <>
    <h1>Product Name : {Product.ProductsName}</h1>
    <h1>Product Price : {Product.Price}</h1>
    <h1>Remining Stock : {Product.StockStatus}</h1>
    </>
  )
}

export default Product