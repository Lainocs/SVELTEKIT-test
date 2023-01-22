export const load = async ({ fetch }) => {

  const fetchProducts = async () => {
    const productsRes = await fetch('https://dummyjson.com/products?limit=10')
    const productsData = await productsRes.json()
    return productsData.products
  }

  return {
    products: fetchProducts(),
  }
}